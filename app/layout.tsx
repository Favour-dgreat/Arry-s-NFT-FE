import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ARRY\'s NFT Gallery',
  description: 'Exclusive NFT collection by ARRY\'s',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-black text-white font-sans`}>
        <main>
           {/* <Navbar /> */}

          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}