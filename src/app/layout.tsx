import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Four Lights',
  description: 'Illuminating the future of technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-blue-950 to-black min-h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
