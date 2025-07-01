'use client';

import React from 'react';
import { Dialog } from '@headlessui/react';
import { BadgeCheck } from 'lucide-react';

interface MintSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenName: string;
}

export default function MintSuccessModal({
  isOpen,
  onClose,
  tokenName,
}: MintSuccessModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-lg" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-2">
      <Dialog.Panel className="max-w-lg w-full bg-gradient-to-b from-[#262E30] to-[#060C0C00] rounded-2xl p-8 text-center shadow-4xl border border-[#AAAAAA]">
        <div className="mx-auto mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mx-auto">
          <BadgeCheck size={45} className="text-white" />
        </div>
        </div>
        <Dialog.Title className="text-white text-2xl font-semibold mb-1">
        Minting Successful
        </Dialog.Title>
        <Dialog.Description className="text-[#AAAAAA] mb-4" style={{fontSize: "20px"}}>
        Congratulations you have successfully minted<br />
        <span className="text-white font-semibold">{tokenName.toUpperCase()}</span>
        </Dialog.Description>

      <div className="mt-4 justify-center gap-4 flex flex-row items-center">
         <button
        onClick={onClose}
        className="mt-6 w-36 bg-[#2C2C2C] text-white py-3 font-medium rounded-sm hover:bg-[#232323] transition-colors"
        style={{  
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        >
        Back to Gallery
        </button> 
        <button
        onClick={onClose}
        className="mt-6 w-28 bg-white text-black py-3 font-medium rounded-sm hover:bg-gray-200 transition-colors"
        style={{  
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        >
        View All NFTs
        </button>
        </div>
       
      </Dialog.Panel>
      </div>
    </Dialog>
  );
}
