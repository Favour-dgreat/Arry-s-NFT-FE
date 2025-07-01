"use client";
import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import WelcomeScreen from './welcome';
import LoadingScreen from './loading';
import Hero from '@/components/HeroSection';
import { NFTGrid } from '@/components/NFT/NFTGrid';
import Navbar from '@/components/Layout/Navbar';
import JoinCommunityModal from '@/components/NFT/modal';
import GalleryPage from './gallery/page';

export default function Home() {
  // Modal and Discord connection state
 

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div>
        {/* <Navbar
          discordConnected={discordConnected} // This prop now reflects persisted state
          onOpenModal={() => {
            if (!discordConnected) {
              setModalOpen(true);
            } else {
              // If already connected, clicking the Navbar button should still navigate
              // This provides a consistent entry point to the "Full Selection Interface"
              router.push("/FullSelectionInterface");
            }
          }}
        /> */}
        <WelcomeScreen />
        
      </div>
    </Suspense>
  );
}