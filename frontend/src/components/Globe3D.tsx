'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Globe as GlobeIcon, Sparkles } from 'lucide-react';
import { HotspotRecord } from '../types';

interface Globe3DProps {
  hotspots?: HotspotRecord[];
}

export const Globe3D: React.FC<Globe3DProps> = ({ hotspots = [] }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe Sphere
    const globeRadius = 80;
    const geometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    
    // Light Blue Wireframe Material for Light Theme Earth
    const material = new THREE.MeshPhongMaterial({
      color: 0x2563eb,
      emissive: 0x2563eb,
      emissiveIntensity: 0.15,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Outer Atmosphere Glow
    const atmosphereGeom = new THREE.SphereGeometry(globeRadius + 4, 32, 32);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeom, atmosphereMat);
    scene.add(atmosphere);

    // Hotspot Pins Group
    const hotspotGroup = new THREE.Group();
    
    const pointsData = hotspots.length > 0 ? hotspots : [
      { lat: 28.6139, lng: 77.2090, title: 'New Delhi', aqiValue: 342 },
      { lat: 39.9042, lng: 116.4074, title: 'Beijing', aqiValue: 215 },
      { lat: 34.0522, lng: -118.2437, title: 'Los Angeles', aqiValue: 128 },
      { lat: -6.2088, lng: 106.8456, title: 'Jakarta', aqiValue: 289 }
    ];

    pointsData.forEach((point) => {
      const phi = (90 - point.lat) * (Math.PI / 180);
      const theta = (point.lng + 180) * (Math.PI / 180);

      const x = -(globeRadius + 2) * Math.sin(phi) * Math.cos(theta);
      const z = (globeRadius + 2) * Math.sin(phi) * Math.sin(theta);
      const y = (globeRadius + 2) * Math.cos(phi);

      const aqiVal = point.aqiValue ?? (point as any).aqi ?? 200;
      const markerGeom = new THREE.SphereGeometry(2.8, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: aqiVal > 250 ? 0xef4444 : 0xf59e0b,
      });
      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.set(x, y, z);
      hotspotGroup.add(marker);
    });

    scene.add(hotspotGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x2563eb, 1.5);
    dirLight.position.set(200, 100, 200);
    scene.add(dirLight);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      hotspotGroup.rotation.y += 0.003;
      atmosphere.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [hotspots]);

  return (
    <div className="relative w-full h-[420px] rounded-2xl bg-white border border-slate-200 shadow-md p-4 overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
            <GlobeIcon className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">3D Atmospheric Earth View</h3>
            <p className="text-xs text-slate-500 font-medium">Three.js Planetary Telemetry Mesh</p>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Live Render Engine
        </span>
      </div>

      {/* Canvas Mount Container */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Bottom overlay info */}
      <div className="z-10 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
        <span>Rotational Velocity: <strong className="text-blue-600 font-mono">0.003 rad/s</strong></span>
        <span>Atmospheric Density: <strong className="text-emerald-600 font-mono">Sentinel-5P Overlay</strong></span>
      </div>
    </div>
  );
};
