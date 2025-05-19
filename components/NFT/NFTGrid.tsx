"use client";

import { useState, useEffect } from "react";
import { NFTCard } from "@/components/ui/nft-card";
import { MintingBadge } from "@/components/NFT/LiveMintingIcon";
import { NFTItem } from "@/types";
import { nftItems } from "@/data/nfts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JoinCommunityModal from "@/components/NFT/modal";
export function NFTGrid() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? nftItems : nftItems.slice(0, 12);
  const [displayedItems, setDisplayedItems] = useState<NFTItem[]>([]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedItems(nftItems);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Create arrays for each section of the grid
  const topRow = displayedItems.slice(0, 1);
  const middleRow = displayedItems.slice(1, 3);
  const bottomRow = displayedItems.slice(3, 6);
  const bottomRow1 = displayedItems.slice(6, 9);
  const bottomRow2 = displayedItems.slice(9, 11);


  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="hidden md:block md:col-span-1"></div>
        <div className="md:col-span-1">
          {topRow.map((item) => (
            <NFTCard key={item.id} item={item} />
          ))}
        </div>
        <div className="hidden md:block md:col-span-1"></div>
        
        {middleRow.length > 0 && (
          <>
            <div className="md:col-span-1">
              <NFTCard item={middleRow[0]} />
            </div>
            
            <div className="md:col-span-1 flex items-center justify-center">
              <MintingBadge />
            </div>
            
            <div className="md:col-span-1">
              {middleRow.length > 1 && <NFTCard item={middleRow[1]} />}
            </div>
          </>
        )}
        
        {/* Bottom row - Three NFTs */}
        {bottomRow.map((item) => (
          <div key={item.id} className="md:col-span-1">
            <NFTCard item={item} />
          </div>
        ))}
           {/* Bottom row - Three NFTs */}
        {bottomRow1.map((item) => (
          <div key={item.id} className="md:col-span-1">
            <NFTCard item={item} />
          </div>
        ))}
        {bottomRow2.map((item) => (
          <div key={item.id} className="md:col-span-1">
            <NFTCard item={item} />
          </div>
        ))}
      </motion.div>
      {(
  <div className="mt-12 text-center">
    <Button 
      variant="outline"
      className="bg-transparent border-white text-white hover:bg-white hover:text-black"
      onClick={() => setShowAll((prev) => !prev)}
    >
      {showAll ? 'See less' : 'See more'}
    </Button>
  </div>
)}
<JoinCommunityModal />
    </div>
  );
}