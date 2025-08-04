import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface TundeModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    id: string;
    title: string;
    image: string;
    office: string;
    subtitle: string;
  };
}

const NFTReservationModal: React.FC<TundeModalProps> = ({ isOpen, onClose, nft }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-md shadow-xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black text-xl z-10"
        >
          <X />
        </button>

        {/* Image Section */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src={nft.image}
            alt={nft.title}
            layout="fill"
            objectFit="cover"
          />

          {/* Name Strip */}
          <div className="absolute bottom-0 w-full bg-[#111827] text-white text-center py-2 text-md font-bold tracking-wide">
            {nft.title}
          </div>
        </div>

        {/* Text Section */}
        <div className="p-6 space-y-3 text-left">
          <h2 className="text-2xl font-semibold text-gray-900">{nft.office}</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
           {nft.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTReservationModal;
