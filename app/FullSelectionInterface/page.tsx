'use client';
import { useState } from "react";
import Navbar from '@/components/Layout/Navbar';
import HeroSection from '@/components/FullSelectionInterface/Hero';
import JoinCommunityModal from '@/components/NFT/modal';
import Footer from "@/components/Layout/Footer";
import GalleryPage from "../gallery/page";

export default function FullSelectionInterfacePage() {
   const [modalOpen, setModalOpen] = useState(false);
    const [discordConnected, setDiscordConnected] = useState(false);
  
    // Handler for Discord connect
    const handleDiscordConnect = () => {
      setDiscordConnected(true);
      setModalOpen(false);
      // Optionally navigate after connecting
      // router.push("/FullSelectionInterface");
    };

  return (
    <><>
      <Navbar
        discordConnected={discordConnected}
        onOpenModal={() => setModalOpen(true)} />
      <HeroSection />
        
        <JoinCommunityModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onDiscordConnect={() => setDiscordConnected(true)} />
    </><Footer /></>
  );
}