"use client";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "TEAM", href: "/team" },
  { name: "BLOG", href: "/blog" },
  { name: "ROADMAP", href: "/roadmap" },
];

const Navbar = ({
  discordConnected,
  onOpenModal,
}: {
  discordConnected: boolean;
  onOpenModal: () => void;
}) => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md text-white py-4 pt-5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Logo or Brand */}
              <span className="font-bold text-lg">Arry&apos;s NFT</span>
            </Link>
          </div>
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
          <button
            className="flex items-center space-x-2 bg-[#2C2C2C] hover:bg-gray-600 text-xs font-medium px-3 py-2 rounded transition-colors"
            onClick={onOpenModal}
            disabled={discordConnected}
          >
            <span>
              {discordConnected ? "Discord Connected" : "Join Discord"}
            </span>
            <Link2 className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;