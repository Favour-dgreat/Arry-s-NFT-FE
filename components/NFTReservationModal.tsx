import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
interface NFTReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    title: string;
    image: string;
  };
}

const NFTReservationModal: React.FC<NFTReservationModalProps> = ({ isOpen, onClose, nft }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation logic here
    console.log('Reservation submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg w-full max-w-md mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              You are about to reserve &quot;{nft.title}&quot;
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-6">
            <Image
              src={nft.image}
              alt={nft.title}
              className="w-full h-auto rounded border border-gray-200"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@emailaddress"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selected NFT
              </label>
              <div className="w-full px-3 py-2 bg-gray-900 text-white rounded-md">
                {nft.title}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors font-medium"
            >
              Reserved NFT (Valid for 48 Hours)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NFTReservationModal;