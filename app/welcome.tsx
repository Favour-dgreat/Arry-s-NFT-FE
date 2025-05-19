'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const WelcomeScreen = () => {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = React.useState(0);

  const screens = [
    {
      title: "WELCOME TO ARRY'S NFT",
      image: "/images/image1.png"
    },
    {
      title: "DISCOVER DIGITAL ARTS",
      image: "/images/checkerboard.png"
    },
    {
      title: "LOADING GALLERRY",
      image: "/images/loader.png"
    }
  ];

  React.useEffect(() => {
    if (currentScreen < screens.length) {
      const timer = setTimeout(() => {
        setCurrentScreen(prev => prev + 1);
      }, 8000);

      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [currentScreen, router, screens.length]);

  if (currentScreen >= screens.length) return null;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      <motion.div
        key={currentScreen}
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
        transition={{
          duration: 2.8,
          ease: "easeOut"
        }}
        className="relative w-50 h-50"
      >
        <img
          src={screens[currentScreen].image}
          alt="Animation"
          className="w-full h-80 object-contain"
        />
      </motion.div>

      <motion.h1
        key={`title-${currentScreen}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 text-3xl font-bold font-fattip"
      >
        {screens[currentScreen].title}
      </motion.h1>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => router.push('/')}
        className="mt-8 text-sm text-gray-400 hover:text-black transition-colors"
      >
        Skip Animation
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;