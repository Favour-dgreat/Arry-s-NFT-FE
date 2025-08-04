"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NFTItem = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
};

type NFTCardProps = {
  item: NFTItem;
};

export function NFTCard({ item }: NFTCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  if (!item) {
    return null;
  }
  return (
    <motion.div
      className="rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
      style={{
        background: "linear-gradient(135deg, #262E30 0%, #060C0C00 100%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/nft/${item.id}`)}
    >
      <div className="relative flex justify-center p-2 md:p-4">
        <div className="bg-white overflow-hidden p-2 md:p-4 border border-gray-200 rounded-md">
          <Image
        src={item.image}
        alt={item.title}
        width={220}
        height={220}
        className={cn(
          "object-contain transition-transform duration-500",
          isHovered ? "scale-105" : "scale-100",
          "w-[120px] h-[120px] md:w-[180px] md:h-[180px] mx-auto"
        )}
          />
        </div>
      </div>
      <div className="p-2 md:p-4 text-left pb-2 md:pb-4 flex flex-col gap-1">
        <h3 className="text-white text-base md:text-lg font-semibold uppercase tracking-wide">
          {item.title}
        </h3>
        <h4 className="text-white text-sm md:text-base font-semibold uppercase tracking-wide">
          {item.subtitle}
        </h4>
        <p className="text-gray-400 text-xs md:text-sm mt-1 tracking-wider font-medium line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
        <span className="text-gray-400 font-medium mt-2 md:mt-4 text-xs md:text-sm">Current Bid</span>
        <div className="flex items-center gap-1">
          <Image
            src="/images/ic_etc.png"
            alt="Ethereum"
            width={18}
            height={18}
            className="mr-1"
          />
          <span className="text-white font-medium text-xs md:text-sm">
            {typeof item.price === "number" ? item.price.toFixed(3) : "0.000"} ETH
          </span>
        </div>
          </div>
          <button
        className={cn(
          "px-2 py-1.5 text-xs font-medium rounded-none transition-colors duration-200",
          "bg-gray-200 text-gray-700 hover:bg-gray-300"
        )}
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/NFTDetails/${item.id}`);
        }}
          >
        Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
