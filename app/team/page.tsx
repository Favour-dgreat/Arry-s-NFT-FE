"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NFTReservationModal from "@/components/TundeModal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Layout/Navbar2";

interface TeamProps {
  setDiscordConnected?: (connected: boolean) => void;
}
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
const TeamPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discordConnected, setDiscordConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const router = useRouter();

  const handleOpenModal = (nft: any) => {
    setSelectedNFT(nft);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNFT(null);
  };
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <div className="absolute right-2 top-2 z-50">
        <Navbar
          discordConnected={discordConnected}
          onOpenModal={() => setShowModal(true)}
        />
      </div>
      <main className="flex-1 flex text-center flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-6xl sm:text-5xl md:text-8xl font-fattip mt-5 font-black mb-2 md:mb-4">
            &apos;ARRY&apos;S
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">
            BOWLR SUPREME
          </h2>
        </motion.div>
        <div className="w-7/12 border-8 border-black flex items-center justify-center sm:p-4">
          <Image
            src="./images/teamphoto.jpg"
            alt="Tunde & Sam Photo"
            className="object-contain w-full h-auto"
            width={320}
            height={320}
          />
        </div>

        <div className="flex flex-row mt-8 gap-4 sm:gap-2">
          <button
            onClick={() =>
              handleOpenModal({
                id: "1",
                title: "TUNDE UCHE KAINE",
                image: "/images/Tunde.jpg",
                office: "CDO",
                subtitle:
                  "Expertise in creating must have brands for retailers and celebrities having worked with the founder of ASOS and ACHICA. Has worked, designed and launched brands in diverse sectors: Brett Polo, Caves du Roy St Tropez and Ski club of Gt Britain. Leading proponent of new design philosophy Technological Luxury which will integrate lifestyle and technology.",
              })
            }
            className="px-6 py-3 sm:px-3 sm:py-2 sm:text-[10px] text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            TUNDE UCHE KAINE
          </button>

          <button
            onClick={() =>
              handleOpenModal({
                id: "2",
                title: "SAM COOK",
                image: "/images/Samcook.jpg",
                office: "CEO",
                subtitle:
                  "A serial entrepreneur from the age of 19 with a passion for growing and sharing best practices/perspectives. Experienced in OOH, DOOH, manufacturing, digital printing - ultra large formats, patents, IP, team building and management. As serving President of the Entrepreneurs Organisation. Discovered how to create an industry with multiple barriers to entry.",
              })
            }
            className="px-6 py-3 sm:px-3 sm:py-2 sm:text-[10px] text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            SAM COOK
          </button>
        </div>

        <AnimatePresence>
          {isModalOpen && selectedNFT && (
            <NFTReservationModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              nft={selectedNFT}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap justify-center"
      >
        {socialLinks.map((social) => (
          <Link key={social.icon} href={social.href}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Image
                src={social.image}
                alt={social.icon}
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0 px-2 sm:px-8 py-4">
        <div className="flex-1 flex justify-center items-center">
          <p>© 2025 Arrys NFT by Artheistlabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;
