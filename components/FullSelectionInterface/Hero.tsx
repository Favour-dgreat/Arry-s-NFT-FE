'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { nftsByCollection } from '@/lib/data';
import { ArrowUp, Filter, Link2 } from 'lucide-react';
import UserRow from '@/components/UserRow';
import { NFTCard } from '../ui/nft-card';
import Link from 'next/link';
const filters = [
  { id: 'all', label: 'All Categories' },
  { id: 'number', label: 'Number Series' },
  { id: 'light', label: 'Light Bulb Movement Series' },
  { id: 'deconstruct', label: 'Deconstruct Series' },
];
const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "TEAM", href: "/team" },
  { name: "BLOG", href: "/blog" },
  { name: "ROADMAP", href: "/roadmap" },
];


const users = [
  {
    avatar: '/images/unsplash.png',
    ethIcon: '/images/ethereum1.png',
    username: 'NeoBowler #02',
    smallValue: '0.342',
    bigValue: '26.52%',
    percentage: '+26.52%',
  },
  {
    avatar: '/images/unsplash_5MTf9XyVVgM.png',
    ethIcon: '/images/ethereum1.png',
    username: 'Illumination',
    smallValue: '1,578',
    bigValue: '-10.52%',
    percentage: '-10.52%',
  },
  {
    avatar: '/images/unsplash_fT49QnFucQ8.png',
    ethIcon: '/images/ethereum1.png',
    username: 'Ego Drip',
    smallValue: '9,232.39',
    bigValue: '+2.52%',
    percentage: '+2.52%',
  },
  {
    avatar: 'images/unsplash_WjIB-6UxA5Q.png',
    ethIcon: '/images/ethereum1.png',
    username: 'Verified User',
    smallValue: '3,789.39',
    bigValue: '+1.52%',
    percentage: '+1.52%',
  },
  {
    avatar: 'images/unsplash_zkNT5mikUuo.png',
    ethIcon: '/images/ethereum1.png',
    username: 'La Vache',
    smallValue: '10,789.39',
    bigValue: '+2.52%',
    percentage: '+2.52%',
  },
];

const featuredNFTs = [
  {
    id: 1,
    image: '/images/NFT1.png',
    title: 'EXPRESSIONISM NUMERO UNO GENTLEMANO NUMERO UNO',
    level: "v2 level",
    currentBid: 0.234,
  },
  {
    id: 2,
    image: '/images/2.png',
    title: 'LIGHT BULB MOMENT',
    level: "v2 level",
    currentBid: 0.234,
  },
  {
    id: 3,
    image: '/images/art3.png',
    title: 'DECONSTRUCT SERIES',
    level: "v2 level",
    currentBid: 0.234,
  }
];

const HeroSection = ({
  setDiscordConnected,
  onOpenModal,
}: {
  setDiscordConnected: (val: boolean) => void;
  onOpenModal: () => void;
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getFilteredCollections = () => {
    switch (activeFilter) {
      case 'all':
        return {
          'Numbers Series': nftsByCollection['Numbers Series'],
          'Light Bulb Moment Series': nftsByCollection['Light Bulb Moment Series'],
          'Deconstruct Series': nftsByCollection['Deconstruct Series'],
        };
      case 'number':
        return { 'Numbers Series': nftsByCollection['Numbers Series'] };
      case 'light':
        return { 'Light Bulb Moment Series': nftsByCollection['Light Bulb Moment Series'] };
      case 'deconstruct':
        return { 'Deconstruct Series': nftsByCollection['Deconstruct Series'] };
      default:
        return {
          'Numbers Series': nftsByCollection['Numbers Series'],
          'Light Bulb Moment Series': nftsByCollection['Light Bulb Moment Series'],
          'Deconstruct Series': nftsByCollection['Deconstruct Series'],
        };
    }
  };

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredNFTs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredNFTs.length]);

  return (
    <section className="py-12 md:py-20">
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
                >
                  <span>
                    Discord Connected 
                  </span>
                  <Link2 className="text-white w-4 h-4" />
                </button>
              </div>
            </div>
          </header>
      <div className="max-w-7xl mx-auto px-24 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        style={{ background: 'linear-gradient(135deg, #262E30, #060C0C00)' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover, and Collect Digital Arts (NFTs)
          </h1>
          <p className="text-gray-400 mb-6">
            One NFT. One Story. Choose a piece from your favorite series before they&apos;re all gone.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Explore now
            </Button>
            
            <div className="flex items-center gap-4">
              <div>
                <div className="text-2xl font-bold">9k+</div>
                <div className="text-sm text-gray-400">Artwork</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5k+</div>
                <div className="text-sm text-gray-400">Artists</div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative h-[500px] w-[400px] rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
          style={{ background: 'linear-gradient(135deg, #262E30, #060C0C00)' }}>
          {featuredNFTs.map((nft, index) => (
          <div
            key={nft.id}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0' 
                : index < currentIndex 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
              <div className="relative flex justify-center p-4">
                <div className="bg-white overflow-hidden p-4 border border-gray-200">
                  <Image
                    src={featuredNFTs[currentIndex].image}
                    alt={featuredNFTs[currentIndex].title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-semibold uppercase tracking-wide">{featuredNFTs[currentIndex].title}</h3>
                <p className="text-gray-400 text-xs mt-1 tracking-wider font-medium">{featuredNFTs[currentIndex].level}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-medium mt-4">Current Bid</span>
                    <div className="flex items-center gap-1">
                      <span className="text-emerald-500 text-sm font-medium">
                        <Image
                          src="/images/ethicon.png"
                          alt="Ethereum"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                      </span>
                      <span className="text-white font-medium">{featuredNFTs[currentIndex].currentBid.toFixed(3)} ETH</span>
                    </div>
                  </div>
                  <button
                    className={cn(
                      "px-4 py-2.5 text-xs font-medium transition-colors duration-200",
                      "bg-gray-200 text-gray-700 hover:bg-gray-300 "
                    )}
                  >
                    Details
                  </button>
                </div>
              </div>
           
         
        </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div>
              <h2 className="text-3xl text-[#1E1E1E] font-bold mb-6" style={{ maxWidth: "350px" }}>THE AMAZING NFT ART OF THE WORLD HERE</h2>
              <div className="relative w-90 h-90 mx-auto md:mx-0">
                <Image
                  src="/images/image1.png"
                  alt="NFT Art"
                  width={500}
                  height={500}
                  objectFit="contain"
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {["Fast Transaction", "Growth Transaction", "Safe Transaction"].map((title, idx) => (
                <div key={title} className="p-4 rounded-lg flex items-start gap-4">
                  <div className="p-2 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/fast icon 1.png"
                      alt={`${title} Icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-black font-bold mb-1">{title}</h3>
                    <p className="text-black text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-10 px-6">
              <div className="flex flex-col mb-6">
                <h2 className="text-2xl text-black font-bold">Top Collections over</h2>
                <p className="text-gray-400 text-sm mt-2">Last 7 days</p>
              </div>
              {users.map((user, index) => (
                <UserRow key={index} {...user} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NFT Collections Section */}
      <div className="bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-2 sm:flex-col justify-between items-start sm:items-start gap-4 mb-6">
            <h2 className="text-2xl font-bold">Discover more NFTs</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? 'default' : 'ghost'}
                  className={`text-sm ${
                    activeFilter === filter.id
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-transparent text-gray-300 '
                  }`}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.id === 'filter' && <Filter size={14} className="mr-1" />}
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {Object.entries(getFilteredCollections()).map(([collectionName, nfts]) => (
              <div key={collectionName} className="space-y-4">
                <h3 className="text-xl font-semibold">{collectionName}</h3>
                <div className="relative">
                  <div className="relative flex flex-row">
                    <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition disabled:opacity-40"
                      onClick={(e) => {
                        const container = (e.currentTarget.nextSibling as HTMLDivElement);
                        if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
                      }}
                      aria-label="Scroll left"
                      type="button"
                    >
                      <ArrowUp className="rotate-[-90deg] text-black" size={20} />
                    </button>
                    <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                      {nfts.map((nft: { id: string; image: string; title: string; subtitle: string; description: string; price: number; }) => (
                        <div key={nft.id} className="flex-shrink-0">
                          <div className="w-96 flex flex-col items-center justify-center">
                            <NFTCard item={nft} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition disabled:opacity-40"
                      onClick={(e) => {
                        const container = (e.currentTarget.previousSibling as HTMLDivElement);
                        if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
                      }}
                      aria-label="Scroll right"
                      type="button"
                    >
                      <ArrowUp className="rotate-90 text-black" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;