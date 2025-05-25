"use client";
import { useState, Suspense } from 'react';
import WelcomeScreen from './welcome';
import LoadingScreen from './loading';
import Hero from '@/components/FullSelectionInterface/Hero';
import HeroSection from '@/components/HeroSection';

import { NFTGrid } from '@/components/NFT/NFTGrid';
import Navbar from '@/components/Layout/Navbar';
import JoinCommunityModal from '@/components/NFT/modal';

export default function Home() {
  const [discordConnected, setDiscordConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {/* <WelcomeScreen /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar
          discordConnected={discordConnected}
          onOpenModal={() => setIsModalOpen(true)}
        />
        <HeroSection
         
        />

        <NFTGrid />
        <JoinCommunityModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDiscordConnect={() => setDiscordConnected(true)}
        />
      </div>
    </Suspense>
  );
}