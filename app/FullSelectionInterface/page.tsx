'use client';
import { useState } from "react";
import Navbar from '@/components/Layout/Navbar';
import HeroSection from '@/components/FullSelectionInterface/Hero';
import JoinCommunityModal from '@/components/NFT/modal';

export default function FullSelectionInterfacePage() {
  const [discordConnected, setDiscordConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar
        discordConnected={discordConnected}
        onOpenModal={() => setIsModalOpen(true)}
      />
      <HeroSection
      />
      <JoinCommunityModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDiscordConnect={() => setDiscordConnected(true)}
      />
    </>
  );
}