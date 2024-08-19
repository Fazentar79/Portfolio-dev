import type { Metadata } from 'next';
import { Anek_Telugu } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { cn } from '@/lib/utils';

const AnekTelugu = Anek_Telugu({ subsets: ['latin'], variable: '--font-caption' });

export const metadata: Metadata = {
  title: 'Hot Frédéric | Web Developer',
  description: 'Online creator and web developer about React, Tailwind, Next.js and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          'dark h-full bg-background font-sans text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}
