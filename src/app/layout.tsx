import type { Metadata, Viewport } from 'next';

import Layout from '@/lib/components/layout';
import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';

const APP_NAME = 'Mana Tandoor';

export const metadata: Metadata = {
  title: APP_NAME,
  description: '',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background bg-gradient-to-r from-lime-400 to-lime-500 font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
