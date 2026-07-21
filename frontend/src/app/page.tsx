'use client';

import React, { useState, useEffect } from 'react';
import { LoginPage } from '../components/LoginPage';
import { Sidebar, ActiveModule } from '../components/Sidebar';
import { Header } from '../components/Header';
import { AuthModal } from '../components/AuthModal';
import { AICopilot } from '../components/AICopilot';
import { UserRole } from '../types';

// Module Views
import { DashboardView } from '../components/views/DashboardView';
import { IntelligenceMapView } from '../components/views/IntelligenceMapView';
import { ForecastView } from '../components/views/ForecastView';
import { HotspotView } from '../components/views/HotspotView';
import { AttributionView } from '../components/views/AttributionView';
import { EnforcementView } from '../components/views/EnforcementView';
import { SatelliteView } from '../components/views/SatelliteView';
import { CopilotView } from '../components/views/CopilotView';
import { HealthAdvisoryView } from '../components/views/HealthAdvisoryView';
import { MultiCityView } from '../components/views/MultiCityView';
import { RecommendationsView } from '../components/views/RecommendationsView';
import { DigitalTwin3D } from '../components/views/DigitalTwin3D';
import { AnalyticsView } from '../components/views/AnalyticsView';
import { SettingsView } from '../components/views/SettingsView';

import { useDashboard, useHotspots } from '../hooks/useAirPulseData';

export default function AppRoot() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [activeModule, setActiveModule] = useState<ActiveModule>('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('admin');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCopilotDrawerOpen, setIsCopilotDrawerOpen] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isLoggedIn');
    if (storedAuth === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', 'administrator');
    setIsLoggedIn(true);
    setActiveModule('dashboard');
  };

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // REST API Telemetry
  const dashboardQuery = useDashboard();
  const hotspotsQuery = useHotspots();

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderActiveView = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardView dashboardData={dashboardQuery.data} isLoading={dashboardQuery.isLoading} />;
      case 'map':
        return <IntelligenceMapView hotspots={hotspotsQuery.data} />;
      case 'forecast':
        return <ForecastView />;
      case 'hotspots':
        return <HotspotView hotspots={hotspotsQuery.data} />;
      case 'attribution':
        return <AttributionView />;
      case 'enforcement':
        return <EnforcementView />;
      case 'digitaltwin':
        return <DigitalTwin3D />;
      case 'satellite':
        return <SatelliteView />;
      case 'copilot':
        return <CopilotView />;
      case 'health':
        return <HealthAdvisoryView />;
      case 'multicity':
        return <MultiCityView />;
      case 'recommendations':
        return <RecommendationsView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView dashboardData={dashboardQuery.data} isLoading={dashboardQuery.isLoading} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-gray-100 flex relative overflow-x-hidden">
      
      {/* Ambient background lighting */}
      <div className="fixed top-0 left-1/3 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Sidebar Navigation */}
      <Sidebar
        activeModule={activeModule}
        onSelectModule={setActiveModule}
        userRole={userRole}
        onOpenRoleModal={() => setIsAuthModalOpen(true)}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
        
        {/* Header */}
        <Header
          onToggleCopilot={() => setIsCopilotDrawerOpen(true)}
          cityName={dashboardQuery.data?.cityName || 'Bhopal'}
          isBackendConnected={!dashboardQuery.isError}
          onSignOut={handleSignOut}
        />

        {/* Dynamic View Mount */}
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">
          {renderActiveView()}
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-surfaceLight/60 bg-surface/40 py-6 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <p>© 2026 AirPulse AI. Enterprise Smart City Command Center. Palantir Gotham Architecture.</p>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="text-cyan-400">Frontend: Port 3000</span>
              <span>•</span>
              <span className="text-emerald-400">Backend: Port 5000</span>
              <span>•</span>
              <span className="text-purple-400">MongoDB Atlas Telemetry</span>
            </div>
          </div>
        </footer>

      </div>

      {/* Auth Persona Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onSelectRole={(r) => {
          setUserRole(r);
          setIsAuthModalOpen(false);
        }}
        currentRole={userRole}
      />

      {/* AI Copilot Drawer */}
      <AICopilot
        isOpen={isCopilotDrawerOpen}
        onClose={() => setIsCopilotDrawerOpen(false)}
        cityName={dashboardQuery.data?.cityName || 'Bhopal'}
        currentAQI={dashboardQuery.data?.currentAQI || 178}
      />

    </div>
  );
}
