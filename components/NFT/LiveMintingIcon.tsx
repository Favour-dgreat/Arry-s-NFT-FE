"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function MintingBadge() {
  return (
    <div className="relative flex items-center justify-center my-8">
      <motion.div 
        className="absolute inset-0 bg-white rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="relative w-30 h-30"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="images/liveminting.png"
          alt="Live Minting"
          width={130}
          height={130}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}