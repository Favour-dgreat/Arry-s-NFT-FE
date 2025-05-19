'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'TEAM', href: '/team' },
  { name: 'BLOG', href: '/blog' },
  { name: 'ROADMAP', href: '/roadmap' },
];

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md text-white py-4 pt-5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-15 h-10 relative ">
              <h1 className='text-2xl md:text-2xl lg:text-2xl font-fattip'>ARRY&apos;S NFT </h1>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;