"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import JoinCommunityModal from "@/components/NFT/modal";

interface GalleryProps {
  setDiscordConnected?: (connected: boolean) => void;
}

const nftCollection = [
  {
    id: 1,
    number: "NO 1",
    title: "THIS IS OUR CANVAS",
    subtitle: "TAG '0' THE THINKER",
    image: "./images/gallery/1.png",
  },
  {
    id: 2,
    number: "NO 2",
    title: "DIGITAL EXPRESSION",
    subtitle: "TAG '1' THE CREATOR",
    image: "./images/gallery/2.png",
  },
  {
    id: 3,
    number: "NO 3",
    title: "MODERN ARTISTRY",
    subtitle: "TAG '2' THE VISIONARY",
    image: "./images/gallery/3.png",
  },
  {
    id: 4,
    number: "NO 3",
    title: "MODERN ARTISTRY",
    subtitle: "TAG '2' THE VISIONARY",
    image: "./images/gallery/3.png",
  },
];

const socialLinks = [
  { icon: "discord", href: "#", image: "./images/ri_discord-line.png" },
  { icon: "youtube", href: "#", image: "./images/line-md_youtube.png" },
  { icon: "twitter", href: "#", image: "./images/prime_twitter.png" },
  { icon: "instagram", href: "#", image: "./images/mdi_instagram.png" },
];

const navigationButtons = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TEAM", href: "/team" },
  { label: "ROADMAP", href: "/roadmap" },
];

const GalleryPage = () => {
  // Remove setDiscordConnected from props
  // If you need setDiscordConnected, manage it inside this component or via context
  // ...existing code...
  const [discordConnected, setDiscordConnected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nftCollection.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const currentNFT = nftCollection[currentIndex];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
     <JoinCommunityModal
      open={showModal}
      onClose={() => setShowModal(false)}
      onDiscordConnect={() => {
        setDiscordConnected?.(true);
        setShowModal(false);
      }}
      />
     <JoinCommunityModal
      open={showModal}
      onClose={() => setShowModal(false)}
      onDiscordConnect={() => {
        setDiscordConnected?.(true);
        setShowModal(false);
      }}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-fattip font-black mb-4">
            ARRY&apos;S NFT
          </h1>
          <h2 className="text-xl md:text-2xl font-bold tracking-wider">
            BOWLR SUPREME
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-2xl mb-8 text-lg leading-relaxed"
        >
          Preview our exclusive collection of digital art. Join our Discord to
          access the full collection and mint your own NFT.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 mb-12"
        >
          {socialLinks.map((social) => (
            <Link key={social.icon} href={social.href}>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Image
                  src={social.image}
                  alt={social.icon}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </Link>
          ))}
        </motion.div>

        {/* NFT Showcase */}
        <div className="relative w-full max-w-4xl">
          {/* NFT Display */}
          <div className="text-center">
            <div className="relative w-[50rem] h-80 mx-auto mb-8 overflow-hidden bg-white">
              <div className="w-full h-full overflow-show relative">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    initial={{ x: direction > 0 ? "100%" : "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: direction > 0 ? "-100%" : "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full flex"
                  >
                    <div className="w-full flex items-center justify-center p-4">
                      <Image
                        src={nftCollection[currentIndex].image}
                        alt="Current NFT"
                        className="object-contain w-full h-full"
                        width={320}
                        height={320}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {nftCollection.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => {
                    setCurrentIndex(dotIndex);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-4 h-1 rounded transition-colors ${
                    dotIndex === currentIndex ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            {/* NFT Details */}
            <div className="text-center">
              <div className="text-lg font-bold mb-2">
                <span className="font-bold">WORKING TITLE:</span>{" "}
                {currentNFT.title}
              </div>
              <div className="text-gray-600">
                <span className="font-bold">BOWLR:</span> {currentNFT.subtitle}
              </div>
            </div>
          </div>
      </main>
      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-4 mb-8"
      >
        {navigationButtons.map((nav) => (
          <Link key={nav.label} href={nav.href}>
            <Button
              variant="outline"
              className="px-6 py-2 rounded-none bg-white border border-black text-black font-bold border-solid shadow-[20px_-8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 mx-4"
            >
              {nav.label}
            </Button>
          </Link>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="flex justify-between  items-center text-sm">
        <Image
          src="./images/footerpipe.png"
          alt="Arry's Logo"
          width={80}
          height={80}
          className="w-50 h-50 object-cover"
        />

        <div className="flex-1 flex justify-center items-center">
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-500 hover:text-black">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="text-black font-bold">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </footer>
      </div>
  );
};

export default GalleryPage;
