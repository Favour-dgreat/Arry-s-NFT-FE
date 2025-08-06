"use client";
import Link from "next/link";
import { Link2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navigationButtons = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TEAM", href: "/team" },
  { label: "ROADMAP", href: "/roadmap" },
];
const navItems = [
  {
    name: "HOME",
    href: "/",
    icon: "/images/menu1.png", // replace with your actual image path
  },
  {
    name: "ABOUT",
    href: "/about",
    icon: "/images/menu2.png",
  },
  {
    name: "TEAM",
    href: "/team",
    icon: "/images/menu3.png",
  },
  {
    name: "ROADMAP",
    href: "/roadmap",
    icon: "/images/menu4.png",
  },

  // Add more items as needed
];

type NavbarProps = {
  discordConnected: boolean;
  onOpenModal: () => void;
};

const Navbar = ({ discordConnected, onOpenModal }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   <header className="w-full top-0 left-0 transition-all duration-300 text-white py-4 pt-5">
  <div className="max-w-7xl mx-auto px-4 md:hidden sm:px-6 lg:px-8">
    <div className="flex justify-between items-center">
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-gray-300"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded hover:bg-gray-700 transition-colors"
          aria-label="Open menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Image
              src="/images/menu.png"
              alt="Menu"
              className="object-contain w-6 h-6"
              width={24}
              height={24}
            />
          )}
        </button>
      </div>

      {/* Desktop Discord Button */}
      <button
        className="hidden md:flex items-center space-x-2 bg-[#2C2C2C] hover:bg-gray-600 text-xs font-medium px-3 py-2 rounded transition-colors"
        onClick={onOpenModal}
        disabled={discordConnected}
      >
        <span>{discordConnected ? "Discord Connected" : "Join Discord"}</span>
        <Link2 className="text-white w-4 h-4" />
      </button>
    </div>
  </div>

  {/* Mobile Fullscreen Nav Menu */}
  {mobileMenuOpen && (
  <div className="fixed inset-0 bg-white z-10 flex flex-col items-center justify-center text-white">
    {/* Close Icon */}
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="absolute top-4 left-4 z-50 p-2"
      aria-label="Close menu"
    >
      <Image
        src="/images/Close.png"
        alt="Close Menu"
        className="object-contain w-6 h-6"
        width={24}
        height={24}
      />
   
    </button>

    {/* Mobile Nav Menu */}
    <nav className="flex flex-col justify-start space-y-6">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col justify-start text-left gap-2 sm:gap-4 mb-8"
      >
        {navigationButtons.map((nav) => (
          <Link key={nav.label} href={nav.href}>
            <Button
              variant="outline"
              className="px-4 py-2 sm:px-6 sm:py-2 rounded-none bg-white border border-black text-black font-bold border-solid shadow-[8px_-4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[20px_-8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 mx-2 sm:mx-4 text-xs sm:text-base"
            >
              {nav.label}
            </Button>
          </Link>
        ))}
      </motion.div>

      <button
        className="flex items-center space-x-2 bg-[#2C2C2C] hover:bg-gray-600 text-xs font-medium px-4 py-2 rounded transition-colors"
        onClick={onOpenModal}
        disabled={discordConnected}
      >
        <span>
          {discordConnected ? "Discord Connected" : "Join Discord"}
        </span>
        <Link2 className="text-white w-4 h-4" />
      </button>
    </nav>
  </div>
)}

</header>

  );
};

export default Navbar;
