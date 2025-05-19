import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SiDiscord, SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 font-fattip">ARRY&apos;S NFT</h3>
            <p className="text-sm text-gray-400 mb-4">
              The world&apos;s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-blue-400 hover:text-white">
                  <SiDiscord className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-black-400 hover:text-white">
                <SiX className="w-5 h-5" />
              </Link>
              
            </div>
          </div>
          
          {/* Market Place */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Market Place</h3>
            <ul className="space-y-2">
              {['All NFTs', 'Art', 'Music', 'Domain Names', 'Virtual Worlds', 'Trading Cards'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* My Account */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              {['Profile', 'Favorites', 'Watchlist', 'My Collections', 'Settings'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Stay In The Loop */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay In The Loop</h3>
            <p className="text-sm text-gray-400 mb-4">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks.
            </p>
            <div className="flex mt-4">
              <Input 
                type="email"
                placeholder="Your email address" 
                className="mr-2 bg-gray-900  border-gray-800 text-white"
              />
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-center text-sm text-gray-400">
            © Copyright 2025 ARRY&apos;S NFT | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;