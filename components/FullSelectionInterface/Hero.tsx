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
import { useRouter } from 'next/navigation';

const filters = [
  { id: 'all', label: 'All Categories' },
  { id: 'number', label: 'Number Series' },
  { id: 'light', label: 'Light Bulb Movement Series' },
  { id: 'deconstruct', label: 'Deconstruct Series' },
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
    id: 'lb-001',
    image: '/images/light1.png',
    title: 'EXPRESSIONISM NUMERO ONCE GENTLEMANO NUMERO ONCE',
    level: "v2 level",
    currentBid: 0.234,
  },
  {
    id: 'dec-001',
    image: '/images/de1.png',
    title: 'CHAPLIN\'S PARADOX - 1',
    level: "v2 level",
    currentBid: 0.234,
  }
];

// ...existing code...
const HeroSection: React.FC = ({}) => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // This variable is not used
  interface FeaturedNFT {
    id: number | string;
    image: string;
    title: string;
    level: string;
    currentBid: number;
  }

  const getStackedNFTs = (startIndex: number): FeaturedNFT[] => {
    const nextNFTs: FeaturedNFT[] = [];
    if (featuredNFTs.length === 0) return nextNFTs;

    for (let i = 1; i <= 3; i++) {
      const index = (startIndex + i) % featuredNFTs.length;
      nextNFTs.push(featuredNFTs[index]);
    }
    return nextNFTs;
  };

  const mainNFT = featuredNFTs[currentIndex];
  const stackedNFTs = getStackedNFTs(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredNFTs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mainNFT) return null; 

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



  return (
   <section className="py-6 sm:py-16 md:py-16 md:px-12">
  {/* Hero Section */}
  <div
    className="max-w-7xl h-full mx-auto px-3 xs:px-4 md:px-8 lg:px-24 py-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    style={{ background: 'linear-gradient(135deg, #262E30, #060C0C00)',  }}
  >
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4  leading-tight">
        Discover, and Collect Digital Arts (NFTs)
      </h1>
      <p className="text-gray-400 mb-5 sm:mb-6 text-base sm:text-lg">
        One NFT. One Story. Choose a piece from your favorite series before they&apos;re all gone.
      </p>
      <div className="flex flex-row gap-6 ">
        <div className="flex items-center gap-6 mt-2 sm:mt-0">
          <div>
            <div className="text-2xl sm:text-3xl font-bold">9k+</div>
            <div className="text-xs sm:text-sm text-gray-400">Artwork</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold">5k+</div>
            <div className="text-xs sm:text-sm text-gray-400">Artists</div>
          </div>
        </div>
        <Button className="bg-[#2C2C2C] rounded-sm border-[0.42px] border-[#757575] text-white mt-3 hover:bg-[#2C2C2C] px-5 py-5 sm:w-16 sm:mt-4 w-full md:w-1/2 lg:w-1/2">
          Explore now
        </Button>
        
      </div>
    </motion.div>
  <div className="relative w-full h-[280px] xs:h-[450px] sm:h-[650px] md:h-full lg:h-[550px] items-center justify-center  sm:px-0">
    {/* Stacked Background NFTs */}
    {stackedNFTs.map((nft, index) => {
      // Responsive card width/height and spacing
      const cardWidths = ["w-[220px]", "xs:w-[220px]", "sm:w-[220px]", "md:w-[420px]"];
      const cardHeights = ["h-[320px]", "xs:h-[380px]", "sm:h-[450px]", "md:h-[550px]"];
      const translateX = `${index * 38}px`; // less spacing for mobile
      const zIndex = 10 - index;
      const opacity = 1 - index * 0.3;

      return (
        <div
          key={nft.id}
          className={cn(
            "absolute top-0 transition-all duration-300 ease-in-out rounded-sm overflow-hidden shadow-2xl bg-gray-900 border border-gray-700",
            cardWidths.join(" "),
            cardHeights.join(" "),
            "p-2 sm:p-4"
          )}
          style={{
            transform: `translateX(${translateX})`,
            zIndex,
            opacity,
            background: 'linear-gradient(135deg, #262E30, #060C0C00)',
          }}
        >
          <div className="relative w-full h-[60%] justify-center items-center">
            <div className="relative w-full h-[160px] xs:h-[200px] sm:h-[260px] md:h-[400px] bg-white overflow-hidden border border-gray-200">
              <Image
                src={nft.image}
                alt={nft.title}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-2 sm:px-4 pb-3 pt-2 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 className="text-xs xs:text-sm sm:text-lg font-semibold uppercase tracking-wide text-white m-0">
              {nft.title}
            </h3>
            <p className="text-gray-400 text-[10px] xs:text-xs mt-1 tracking-wider font-medium">
              {nft.level}
            </p>
            <div className="flex justify-between items-center mt-2 sm:mt-3">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/ic_etc.png"
                  alt="Ethereum"
                  width={16}
                  height={16}
                  className="w-6 h-6 sm:w-4 sm:h-4"
                />
                <span className="text-white text-sm sm:text-sm font-medium">
                  {nft.currentBid.toFixed(3)} ETH
                </span>
              </div>
              <button
                className="px-4 py-2 text-[10px] xs:text-xs font-medium rounded-none bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/NFTDetails/${nft.id}`);
                }}
              >
                Details
              </button>
              </div>
          </div>
        </div>
      );
    })}

  
    </div>
  </div>

      


 

  {/* NFT Collections Section */}
  <div className="bg-black py-6 sm:py-10 px-2 sm:px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-2 sm:flex-col justify-between items-start sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Discover more NFTs</h2>
        <div className="flex flex-row flex-nowrap gap-1 sm:gap-2 overflow-x-auto scrollbar-hide w-full">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'ghost'}
              className={`text-[10px] xs:text-xs px-2 py-1 min-w-fit ${
                activeFilter === filter.id
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-transparent text-gray-300'
              }`}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              style={{ whiteSpace: 'nowrap' }}
            >
              {filter.id === 'filter' && <Filter size={12} className="mr-1" />}
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-5 sm:space-y-8">
        {Object.entries(getFilteredCollections()).map(([collectionName, nfts]) => (
          <div key={collectionName} className="space-y-2 sm:space-y-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">{collectionName}</h3>
            <div className="relative">
              <div className="relative flex flex-row">
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition disabled:opacity-40"
                  onClick={(e) => {
                    const container = (e.currentTarget.nextSibling as HTMLDivElement);
                    if (container) container.scrollBy({ left: -240, behavior: 'smooth' });
                  }}
                  aria-label="Scroll left"
                  type="button"
                >
                  <ArrowUp className="rotate-[-90deg] text-black" size={20} />
                </button>
                <div className="flex overflow-x-auto space-x-2 xs:space-x-3 sm:space-x-4 pb-4 scrollbar-hide">
                  {nfts.map((nft: { id: string; image: string; title: string; description: string; subtitle: string; price: number; }) => (
                    <div key={nft.id} className="flex-shrink-0">
                      <div className="w-48 xs:w-56 sm:w-80 md:w-96 flex flex-col items-center justify-center" onClick={() => router.push(`/NFTDetails/${nft.id}`)} style={{ background: 'linear-gradient(135deg, #262E30, #060C0C00)' }}>
                        <NFTCard item={nft} />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition disabled:opacity-40"
                  onClick={(e) => {
                    const container = (e.currentTarget.previousSibling as HTMLDivElement);
                    if (container) container.scrollBy({ left: 240, behavior: 'smooth' });
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
// ...existing code...

export default HeroSection;