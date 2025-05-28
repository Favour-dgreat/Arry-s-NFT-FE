"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import NFTReservationModal from './NFTReservationModal';
import Navbar from './Layout/Navbar';

interface NFT {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface NFTDetailsClientProps {
  nft: NFT;
  collection: string;
  series: NFT[];
}

export default function NFTDetailsClient({ nft, collection, series }: NFTDetailsClientProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollSeries = (direction: 'left' | 'right') => {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -256 : 256, behavior: 'smooth' });
    }
  };

  return (
<>
    <Navbar discordConnected={false} onOpenModal={function (): void {
              throw new Error('Function not implemented.');
          } } />
    <div className="max-w-7xl mx-auto px-4 py-40">

      <div className="bg-[#1E2122] rounded-lg p-8">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Left column - Image */}
            <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
                <Image
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-auto rounded-lg object-contain"
                    width={500}
                    height={500}
                    style={{ maxHeight: 400, width: '100%', objectFit: 'contain' }}
                    priority
                />
            </div>

          {/* Right column - Details */}
          <div>
            <h1 className="text-3xl font-bold mb-6">{nft.title}</h1>

            <div className="space-y-4 mb-8">
              <div>
                <h2 className="text-gray-400">Description</h2>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span>Series:</span>
                    <span className="font-medium">{collection}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design Title:</span>
                    <span className="font-medium">{nft.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bowlr Type:</span>
                    <span className="font-medium">V2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bowlr Style:</span>
                    <span className="font-medium">LEVEL</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rarity:</span>
                    <span className="font-medium">1 OF MANY (THIS SET OF 12)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legend/Motto:</span>
                    <span className="font-medium">{nft.description}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-gray-400">Created</h2>
                <p className="mt-1">08/05/2025</p>
              </div>

              <div>
                <h2 className="text-gray-400">Current Bid</h2>
                <div className="flex items-center mt-1">
                  <Image
                    src="./images/eth-icon.png"
                    alt="ETH"
                    className="w-4 h-4 mr-2"
                    width={16}
                    height={16}
                  />
                  <span className="text-xl font-bold">{nft.price} ETH</span>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              Choose This NFT
            </button>
          </div>
        </div>

        {/* More from this Series */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">More from this Series</h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {series.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-64 bg-[#ffff] rounded-lg overflow-hidden cursor-pointer hover:border hover:border-gray-600 transition-all"
                  onClick={() => router.push(`/nft/${item.id}`)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    width={256}
                    height={192}
                  />
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <div className="flex items-center">
                      <Image
                        src="./images/eth-icon.png"
                        alt="ETH"
                        className="w-3 h-3 mr-1"
                        width={12}
                        height={12}
                      />
                      <span>{item.price} ETH</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
              onClick={() => scrollSeries('left')}
            >
              <ArrowLeft className="text-black" size={20} />
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
              onClick={() => scrollSeries('right')}
            >
              <ArrowRight className="text-black" size={20} />
            </button>
          </div>
        </div>
      </div>

      <NFTReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nft={nft}
      />
    </div>
  
</>
  );    
}
