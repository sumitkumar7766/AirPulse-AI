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
    
    // Wireframe / Dark Material for Earth
    const material = new THREE.MeshPhongMaterial({
      color: 0x0f172a,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Outer Atmosphere Glow
    const atmosphereGeom = new THREE.SphereGeometry(globeRadius + 4, 32, 32);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeom, atmosphereMat);
    scene.add(atmosphere);

    // Hotspot Pins Group
    const hotspotGroup = new THREE.Group();
    
    // Default sample markers if empty
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

      const markerGeom = new THREE.SphereGeometry(2.5, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: point.aqiValue > 250 ? 0xef4444 : 0xf59e0b,
      });
      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.set(x, y, z);
      hotspotGroup.add(marker);
    });

    scene.add(hotspotGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x06b6d4, 1.5);
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

    // Handle Resize
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
    <div className="relative w-full h-[420px] rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl shadow-2xl p-4 overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <GlobeIcon className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">3D Atmospheric Earth View</h3>
            <p className="text-xs text-gray-400">Three.js Planetary Telemetry Mesh</p>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Live Render Engine
        </span>
      </div>

      {/* Canvas Mount Container */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Bottom overlay info */}
      <div className="z-10 flex items-center justify-between px-3 py-2 rounded-xl bg-background/80 border border-surfaceLight/80 text-xs text-gray-300 backdrop-blur-md">
        <span>Rotational Velocity: <strong className="text-cyan-400">0.003 rad/s</strong></span>
        <span>Atmospheric Density: <strong className="text-emerald-400">Sentinel-5P Overlay</strong></span>
      </div>
    </div>
  );
};
