"use client";

import React, { useState } from "react";
import { nftsByCollection } from "../../lib/data";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ChevronsDown, } from "lucide-react";
import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/react';
import Navbar from "../../components/Layout/Navbar";
import MintSuccessModal from '@/components/MintingModal';
import Footer from "@/components/Layout/Footer";
const walletOptions = [
  { value: '', label: 'Select your wallet' },
  { value: 'metamask', label: 'MetaMask' },
  { value: 'coinbase', label: 'Coinbase Wallet' },
  { value: 'walletconnect', label: 'WalletConnect' },
  { value: 'trustwallet', label: 'Trust Wallet' },
  { value: 'phantom', label: 'Phantom' },
  { value: 'solflare', label: 'Solflare' },
  { value: 'other', label: 'Other' },
];
export default function NFTMintingPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
   selectWallet: "",  
   option: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Find the NFT by id
  let nft, collection, series;
  for (const [coll, nfts] of Object.entries(nftsByCollection)) {
    const found = nfts.find((n) => n.id === id);
    if (found) {
      nft = found;
      collection = coll;
      series = nfts;
      break;
    }
  }

  if (!nft) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">NFT not found.</p>
      </div>
    );
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle reservation logic here
    console.log('Reservation submitted:', formData);
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true); // Open modal after minting
    }, 1000); // Simulate async operation
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
            <div className="flex items-center rounded-sm w-6/6 h-5/6  justify-center bg-white p-4 shadow-md">
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
              <h1 className="text-sm text-[#AAAAAA] mb-6">{nft.level}</h1>

              <div className="space-y-4 mb-8">
                <div>
                  <h2 className="text-[#AAAAAA] text-sm">Series</h2>
                  <h2 className="text-2xl font-bold mb-10 ">{collection}</h2>

                  <h2 className="text-[#AAAAAA] text-sm">Reserved Until</h2>
                  <h2 className="text-2xl font-bold mb-10">
                    08/05/2025, 11:05:32
                  </h2>

                  <h2 className="text-[#AAAAAA] text-sm">Current Bid</h2>
                  <div className="flex items-center mt-1">
                    <Image
                      src="../../images/ic_etc.png"
                      alt="ETH"
                      className="w-8 h-8 mr-2"
                      width={16}
                      height={16}
                    />
                    <span className="text-2xl font-bold">{nft.price} ETH</span>
                  </div>
                </div>
              </div>

              {/* <button
                className="w-3/6 bg-white text-black py-3  font-medium hover:bg-gray-200 transition-colors"
                onClick={() => setIsModalOpen(true)}
                style={{
                  borderRadius: "4px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Choose This NFT
              </button> */}
            </div>
          </div>

          {/* More from this Series */}
            <div
            className="mt-16 shadow-lg px-5 py-8"
            style={{
              border: "2px solid",
              borderImage: "linear-gradient(180deg,#262E30, #060C0C00) 1",
            }}
            >
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold" >Connect Wallet to Mint</h1>
          <div>
  <label className="block text-sm font-medium text-white mb-3">
    Select Wallet
  </label>
  <div className="relative w-full">
    <Listbox
      value={formData.selectWallet}
      onChange={val => setFormData({ ...formData, selectWallet: val })}
    >
      <ListboxButton className="w-full px-4 py-4 border border-[#2C2C2C] rounded-md bg-[#2C2C2C] text-white text-left flex justify-between items-center">
        {walletOptions.find(opt => opt.value === formData.selectWallet)?.label || "Select your wallet"}
        <ChevronsDown className="ml-2 text-white" size={20} />
      </ListboxButton>
      <ListboxOptions className="absolute z-10 mt-1 w-full bg-[#2C2C2C] border border-[#2C2C2C] rounded-md shadow-lg max-h-60 overflow-auto">
        {walletOptions.map((option) => (
          <Listbox.Option
            key={option.value}
            value={option.value}
            disabled={option.value === ''}
            className={({ active, selected }) =>
              `cursor-pointer select-none px-4 py-3 ${
                active ? 'bg-[#232323]' : ''
              } ${selected ? 'font-bold' : ''} text-white`
            }
          >
            {option.label}
          </Listbox.Option>
        ))}
      </ListboxOptions>
    </Listbox>
  </div>
</div>

        

        <div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 py-4 w-full px-4  bg-[#E3E3E3] border-[#767676] text-black font-bold rounded-md disabled:opacity-50"
          >
            {isLoading ? (
              <>
               
                Minting
                 <svg className="animate-spin h-5 w-5 mr-2 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              </>
            ) : (
              `Mint NFT (${nft.price} ETH) `  
            )}
          </button>
        </div>
      </form>
          </div>
      </div>
       <MintSuccessModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        tokenName={nft.title}
      />
      </div>
      <Footer />
    </>
  );
}
