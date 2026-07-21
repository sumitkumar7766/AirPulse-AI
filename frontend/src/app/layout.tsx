import type { Metadata } from 'next';
import './globals.css';
import Providers from '../lib/providers';

export const metadata: Metadata = {
  title: 'AirPulse AI - Environmental Intelligence & AQI Forecasting',
  description: 'Full-stack monorepo platform for real-time air quality telemetry, 3D atmospheric visualization, geospatial hotspots, and AI copilot analysis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-gray-100 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
