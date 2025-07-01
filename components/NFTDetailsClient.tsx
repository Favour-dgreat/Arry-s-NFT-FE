"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import NFTReservationModal from "./NFTReservationModal";
import Navbar from "./Layout/Navbar";
import { cn } from "@/lib/utils";

interface NFT {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: number;
}

interface NFTDetailsClientProps {
  nft: NFT;
  collection: string;
  series: NFT[];
}

export default function NFTDetailsClient({
  nft,
  collection,
  series,
}: NFTDetailsClientProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollSeries = (direction: "left" | "right") => {
    const container = document.querySelector(".overflow-x-auto");
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -256 : 256,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar
        discordConnected={true}
        onOpenModal={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-40">
        <div className=" rounded-lg p-8">
          <div
            className="grid md:grid-cols-2 items-center gap-12 px-12"
            style={{
              background: "linear-gradient(135deg, #262E30, #060C0C00)",
            }}
          >
            {/* Left column - Image */}
            <div className="flex items-center rounded-sm w-6/6 h-5/6  justify-center bg-white p-4 shadow-md" 
>
              <Image
                src={nft.image}
                alt={nft.title}
                className="w-full h-auto object-contain"
                width={400}
                height={350}
                style={{ maxHeight: 500, width: "100%", objectFit: "contain" }}
                priority
              />
            </div>

            {/* Right column - Details */}
            <div className="py-20">
              <h1 className="text-3xl font-bold ">{nft.title}</h1>
              <h1 className="text-3xl font-bold mb-6">{nft.subtitle}</h1>

              <div className="space-y-4 mb-8">
                <div>
                  <h2 className="text-[#ffff] text-2xl">Description</h2>
                  <div className="mt-1 space-y-1">
                    <div className="flex justify-between">
                      <span>Series: {collection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Design Title: {nft.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bowlr Type: V2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bowlr Style: LEVEL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rarity: 1 OF MANY (THIS SET OF 12)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Legend/Motto: {nft.subtitle}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-[#fff] ">Created</h2>
                  <p className="mt-1 text-2xl">08/05/2025</p>
                </div>

                <div>
                  <h2 className="text-gray-400">Current Bid</h2>
                  <div className="flex items-center mt-1">
                    <Image
                      src="../../images/ethicon.png"
                      alt="ETH"
                      className="w-8 h-8 mr-2"
                      width={16}
                      height={16}
                    />
                    <span className="text-2xl font-bold">{nft.price} ETH</span>
                  </div>
                </div>
              </div>

              <button
                className="w-3/6 bg-white text-black py-3  font-medium hover:bg-gray-200 transition-colors"
                onClick={() => setIsModalOpen(true)}
                style={{
                  borderRadius: "4px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
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
                    className="flex-shrink-0 h-150 rounded-lg overflow-hidden cursor-pointer hover:border hover:border-gray-600 transition-all p-2"
                    onClick={() => router.push(`/NFTDetails/${item.id}`)}
                    style={{
                      background: "linear-gradient(135deg, #262E30, #060C0C00)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 bg-[#ffff] overflow-hidden cursor-pointer hover:border hover:border-gray-600 transition-all flex items-center justify-center"
                      style={{
                        width: 300,
                        height: 350,
                        minWidth: 200,
                        minHeight: 200,
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                        sizes="300px"
                        priority={false}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-">{item.title}</h3>
                      <h3 className="font-medium mb-2">{item.subtitle}</h3>

                      <div className="block justify-between">
                        <span className="text-gray-400 text-xs">V2 Level</span>
                      </div>
                      <div>
                        <h2 className="text-gray-400 text-xs mt-2">
                          Current Bid
                        </h2>
                       
                        <div className="flex items-center mt-1">
                          <Image
                            src="../images/ethicon.png"
                            alt="ETH"
                            className="mr-2"
                            width={18}
                            height={18}
                          />
                          <span className="text-1xl flex-1">{item.price} ETH</span>
                          <button
                            onClick={() => router.push(`/NFTDetails/${nft.id}`)}
                            className={cn(
                              "px-4 py-2.5 text-xs font-medium transition-colors duration-200",
                              "bg-gray-200 text-gray-700 hover:bg-gray-300",
                              "ml-auto ",
                            )}
                            style={{borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}  
                          >
                            
                            Details
                          </button>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                onClick={() => scrollSeries("left")}
              >
                <ChevronsLeft className="text-black" size={20} />
              </button>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                onClick={() => scrollSeries("right")}
              >
                <ChevronsRight className="text-black" size={20} />
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
