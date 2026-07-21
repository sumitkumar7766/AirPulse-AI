'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { AuthModal } from './AuthModal';
import { AICopilot } from './AICopilot';
import { UserRole } from '../types';
import { useDashboard, useHotspots } from '../hooks/useAirPulseData';

interface CommandCenterShellProps {
  children: React.ReactNode;
}

export const CommandCenterShell: React.FC<CommandCenterShellProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<UserRole>('admin');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCopilotDrawerOpen, setIsCopilotDrawerOpen] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isLoggedIn');
    if (storedAuth !== 'true' && pathname !== '/login') {
      router.push('/login');
    }
  }, [pathname, router]);

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  const dashboardQuery = useDashboard();
  const hotspotsQuery = useHotspots();

  if (pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background text-gray-100 flex relative overflow-x-hidden">
      
      {/* Ambient background lighting */}
      <div className="fixed top-0 left-1/3 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Sidebar Navigation */}
      <Sidebar
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

        {/* Dynamic Route View Page */}
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">
          {children}
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
};
