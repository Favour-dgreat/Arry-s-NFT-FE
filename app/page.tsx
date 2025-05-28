"use client";
import { useState, useEffect, Suspense } from 'react'; // Import useEffect
import { useRouter } from 'next/navigation';
import WelcomeScreen from './welcome';
import LoadingScreen from './loading';
import Hero from '@/components/HeroSection';

import { NFTGrid } from '@/components/NFT/NFTGrid';
import Navbar from '@/components/Layout/Navbar';
import JoinCommunityModal from '@/components/NFT/modal';

export default function Home() {
  // Initialize state from localStorage, default to false
  const [discordConnected, setDiscordConnected] = useState(() => {
    if (typeof window !== 'undefined') { // Check if window is defined (client-side)
      const storedConnectionStatus = localStorage.getItem("discordConnected");
      return storedConnectionStatus === "true"; // Returns true if "true", false otherwise
    }
    return false; 
  });
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  // Effect to save discordConnected state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("discordConnected", String(discordConnected));
    }
  }, [discordConnected]);

  // Function to handle Discord connection logic
  const handleDiscordConnect = async () => {
    try {
      // Close the modal immediately
      setModalOpen(false);

      // Simulate Discord connection process
      console.log("Attempting to connect to Discord...");

      // Simulate a successful connection after a short delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // IMPORTANT: Update the state which will trigger the Navbar re-render
      setDiscordConnected(true);
      console.log("Discord successfully connected!");

      // Navigate to the next page after successful connection
      // This happens AFTER discordConnected is set to true
      router.push("/FullSelectionInterface"); // Changed to your specified next page
    } catch (error) {
      console.error("Failed to connect Discord:", error);
      // Handle connection errors (e.g., show an error message to the user)
    }
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      {/* <WelcomeScreen /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <Hero 
        setDiscordConnected={setDiscordConnected}
        onOpenModal={() => setModalOpen(true)}
        />

        <NFTGrid />
        <JoinCommunityModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onDiscordConnect={handleDiscordConnect} // This handler now sets persisted state and navigates
        />
        
      </div>
    </Suspense>
  );
}