'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box, Sparkles, AlertCircle, Info, Activity, Flame, ShieldAlert } from 'lucide-react';

interface ZoneDetail {
  name: string;
  aqi: number;
  category: string;
  color: string;
  primaryCause: string;
  buildingsCount: number;
  vehiclesCount: number;
}

export const DigitalTwin3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(null);

  const zones: ZoneDetail[] = [
    { name: 'Industrial Sector 3 (Furnace Zone)', aqi: 312, category: 'Hazardous (Purple Zone)', color: '#a855f7', primaryCause: 'Coal Power Furnace Stack Plumes', buildingsCount: 14, vehiclesCount: 85 },
    { name: 'MP Nagar Traffic Corridor', aqi: 285, category: 'Very Unhealthy (Red Zone)', color: '#ef4444', primaryCause: 'Diesel Heavy Freight Gridlock Exhaust', buildingsCount: 28, vehiclesCount: 210 },
    { name: 'East Sector Construction Hub', aqi: 188, category: 'Unhealthy (Yellow Zone)', color: '#f59e0b', primaryCause: 'Unpaved Road Fugitive PM10 Dust', buildingsCount: 18, vehiclesCount: 65 },
    { name: 'Miyawaki Bio-Forest Sanctuary', aqi: 45, category: 'Good (Green Zone)', color: '#10b981', primaryCause: 'Urban Dense Canopy & Zero Emissions', buildingsCount: 4, vehiclesCount: 10 }
  ];

  const active = selectedZone || zones[0];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090d16);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.set(120, 100, 140);
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Ground Grid & Roads Mesh
    const gridHelper = new THREE.GridHelper(240, 30, 0x06b6d4, 0x1f293d);
    scene.add(gridHelper);

    // 5. Buildings Mesh Group (Color Coded Zones)
    const cityGroup = new THREE.Group();

    // Zone 1: Industrial (Purple)
    const buildMat1 = new THREE.MeshPhongMaterial({ color: 0xa855f7, wireframe: false, opacity: 0.9, transparent: true });
    for (let i = 0; i < 8; i++) {
      const h = Math.random() * 30 + 20;
      const bGeom = new THREE.BoxGeometry(12, h, 12);
      const building = new THREE.Mesh(bGeom, buildMat1);
      building.position.set(-60 + (i % 3) * 16, h / 2, -60 + Math.floor(i / 3) * 16);
      cityGroup.add(building);
    }

    // Zone 2: Traffic Corridor (Red)
    const buildMat2 = new THREE.MeshPhongMaterial({ color: 0xef4444, opacity: 0.9, transparent: true });
    for (let i = 0; i < 10; i++) {
      const h = Math.random() * 45 + 15;
      const bGeom = new THREE.BoxGeometry(10, h, 10);
      const building = new THREE.Mesh(bGeom, buildMat2);
      building.position.set(30 + (i % 3) * 16, h / 2, -50 + Math.floor(i / 3) * 16);
      cityGroup.add(building);
    }

    // Zone 3: Construction (Yellow)
    const buildMat3 = new THREE.MeshPhongMaterial({ color: 0xf59e0b, opacity: 0.9, transparent: true });
    for (let i = 0; i < 6; i++) {
      const h = Math.random() * 25 + 10;
      const bGeom = new THREE.BoxGeometry(14, h, 14);
      const building = new THREE.Mesh(bGeom, buildMat3);
      building.position.set(-50 + (i % 2) * 20, h / 2, 30 + Math.floor(i / 2) * 20);
      cityGroup.add(building);
    }

    // Zone 4: Green Sanctuary (Green)
    const buildMat4 = new THREE.MeshPhongMaterial({ color: 0x10b981, opacity: 0.9, transparent: true });
    for (let i = 0; i < 5; i++) {
      const h = Math.random() * 15 + 8;
      const bGeom = new THREE.SphereGeometry(8, 16, 16);
      const tree = new THREE.Mesh(bGeom, buildMat4);
      tree.position.set(40 + (i % 2) * 18, h / 2, 30 + Math.floor(i / 2) * 18);
      cityGroup.add(tree);
    }

    scene.add(cityGroup);

    // 6. Animated Pollution Cloud Particles
    const cloudGeom = new THREE.SphereGeometry(25, 16, 16);
    const cloudMat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.25 });
    const cloud1 = new THREE.Mesh(cloudGeom, cloudMat);
    cloud1.position.set(-45, 40, -45);
    scene.add(cloud1);

    const cloudMat2 = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.3 });
    const cloud2 = new THREE.Mesh(cloudGeom, cloudMat2);
    cloud2.position.set(40, 50, -40);
    scene.add(cloud2);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x06b6d4, 1.5);
    dirLight.position.set(100, 150, 100);
    scene.add(dirLight);

    // 8. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      cityGroup.rotation.y += 0.002;
      cloud1.rotation.y += 0.005;
      cloud1.position.y = 40 + Math.sin(Date.now() * 0.002) * 5;
      cloud2.rotation.y += 0.004;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 500;
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
      renderer.dispose();
    };
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <Box className="w-5 h-5 text-purple-400 animate-bounce" /> 3D Smart City Digital Twin Command Center
          </h2>
          <p className="text-xs text-gray-400">Three.js Interactive Urban Microclimate & Animated Pollution Vector Simulation</p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400 text-xs font-bold flex items-center gap-1.5 animate-pulse">
          <Sparkles className="w-4 h-4" /> 3D WOW REAL-TIME RENDER ENGINE
        </span>
      </div>

      {/* 3D Canvas Box + Zone Selector Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Three.js Canvas Container */}
        <div className="lg:col-span-2 min-h-[480px] rounded-2xl bg-background/90 border border-surfaceLight relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />
          
          <div className="z-10 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1.5 rounded-xl bg-surface/80 border border-surfaceLight text-xs font-mono text-cyan-400">
              Rotational Orbit: 0.002 rad/s
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-surface/80 border border-surfaceLight text-xs font-mono text-purple-400">
              Live Animated Plumes Active
            </span>
          </div>

          <div className="z-10 flex items-center justify-between text-xs text-gray-300 pointer-events-none pt-2 border-t border-surfaceLight/40">
            <span>Color-Coded Zones: Green (Good) | Yellow (Moderate) | Red (Unhealthy) | Purple (Hazardous)</span>
          </div>
        </div>

        {/* Right 1 Col: Zone Click Details Card */}
        <div className="lg:col-span-1 rounded-2xl bg-surface/90 border border-surfaceLight backdrop-blur-xl p-6 shadow-2xl space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-3">Interactive Digital Twin Zones</h3>
            
            <div className="space-y-2.5">
              {zones.map((z, idx) => {
                const isSelected = active.name === z.name;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedZone(z)}
                    className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-surfaceLight/80 border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'bg-background/80 border-surfaceLight hover:bg-surfaceLight/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white line-clamp-1">{z.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: z.color }}>
                        {z.aqi} AQI
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400">{z.primaryCause}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-background/90 border border-surfaceLight space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Active Zone Telemetry</span>
            <h4 className="text-sm font-bold text-white">{active.name}</h4>
            <p className="text-xs text-gray-300">{active.category}</p>
            <div className="grid grid-cols-2 gap-2 text-xs pt-2 font-mono">
              <span className="text-gray-400">Structures: <strong className="text-white">{active.buildingsCount}</strong></span>
              <span className="text-gray-400">Transit: <strong className="text-white">{active.vehiclesCount}</strong></span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
