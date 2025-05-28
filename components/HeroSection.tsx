'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Layout/Navbar';
interface HeroSectionProps {
  setDiscordConnected: (connected: boolean) => void;
  onOpenModal: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  setDiscordConnected,
  onOpenModal,
}) => {
  return (
    <div className="relative bg-black text-white">
      <Navbar
        discordConnected={false} // Replace with actual state if needed
        onOpenModal={onOpenModal}
      />
      
    
    <section className="py-6 md:py-20 mt-20 text-center">
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold font-fattip"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ARRY&apos;S NFT GALLERY
      </motion.h1>
      
      <motion.p 
        className="text-gray-400 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Preview our exclusive collection of digital art. Join our Discord to access the 
        full collection and mint your own NFT.
      </motion.p>
      
    </section>
 
    </div>
  );
};

export default HeroSection;