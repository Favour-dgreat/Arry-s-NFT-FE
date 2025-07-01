import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface NFTReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    id: string;
    title: string;
    image: string;
  };
}

const NFTReservationModal: React.FC<NFTReservationModalProps> = ({ isOpen, onClose, nft }) => {
const [formData, setFormData] = useState({
  fullName: '',
  email: '',
});
const [isLoading, setIsLoading] = useState(false);
const router = useRouter();
if (!isOpen) return null;

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  // Handle reservation logic here
  console.log('Reservation submitted:', formData);
  setTimeout(() => {
    setIsLoading(false);
    onClose();
  router.push(`/NFTminting?id=${nft.id}`);
  }, 1000); // Simulate async operation
};

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
      className="bg-white text-black rounded-sm w-full max-w-md mx-4"
      onClick={(e) => e.stopPropagation()}
      >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold">
          You are about to reserve &quot;{nft.title}&quot;
        </h2>
        </div>

        <div className="mb-6 flex justify-center w-6/6 h-5/6 border shadow-lg border-black rounded-sm overflow-hidden">
        <Image
          src={nft.image}
          alt={nft.title}
          width={320}
          height={100}
          className="w-100 h-auto object-cover"
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
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white`}
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
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
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full px-4 py-2 bg-gray-900 text-white rounded-md disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Processing
              </>
            ) : (
              "Reserve NFT (Valid for 48 Hours)"
            )}
          </button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default NFTReservationModal;