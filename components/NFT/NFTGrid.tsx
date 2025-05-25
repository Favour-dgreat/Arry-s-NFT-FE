"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { NFTCard } from "@/components/ui/nft-card";
import { MintingBadge } from "@/components/NFT/LiveMintingIcon";
import { Button } from "@/components/ui/button";
import JoinCommunityModal from "@/components/NFT/modal";
import { NFTItem } from "@/types";
import { nftItems } from "@/data/nfts";

export function NFTGrid() {
  const [showAll, setShowAll] = useState(false);
  const [displayedItems, setDisplayedItems] = useState<NFTItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedItems(nftItems);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const visibleItems = showAll ? displayedItems : displayedItems.slice(0, 12);

  // Define sections
  const topRow = visibleItems.slice(0, 1);
  const middleRow = visibleItems.slice(1, 3);
  const bottomRows = visibleItems.slice(3);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Top Row */}
        <div className="hidden md:block md:col-span-1" />
        <div className="md:col-span-1">
          {topRow.map((item) => (
            <NFTCard key={item.id} item={item} />
          ))}
        </div>
        <div className="hidden md:block md:col-span-1" />

        {/* Middle Row with MintingBadge */}
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

        {/* Remaining Items */}
        {bottomRows.map((item) => (
          <div key={item.id} className="md:col-span-1">
            <NFTCard item={item} />
          </div>
        ))}
      </motion.div>

      {/* Show More / Show Less Button */}
      <div className="mt-12 text-center">
        <Button
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white hover:text-black"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "See less" : "See more"}
        </Button>
      </div>

      {/* Join Modal */}
      <JoinCommunityModal />
    </div>
  );
}