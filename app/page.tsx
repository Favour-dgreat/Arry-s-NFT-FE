import { Suspense } from 'react';
import WelcomeScreen from './welcome';
import LoadingScreen from './loading';
import HeroSection from '@/components/HeroSection';
import { NFTGrid } from '@/components/NFT/NFTGrid';
import Navbar from '@/components/Layout/Navbar';

export default function Home() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <WelcomeScreen />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <HeroSection />
        <NFTGrid />
      </div>
    </Suspense>
  );
}