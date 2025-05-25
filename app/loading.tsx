'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const LoadingScreen = () => {
  const router = useRouter();
  const [canSkip, setCanSkip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCanSkip(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    router.push('/');
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="relative w-32 h-32"
      >
        <img
          src="/images/arryslogo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8 text-3xl font-bold"
      >
        LOADING GALLERY
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 1.5, duration: 2 }}
        className="h-1 bg-white mt-8 rounded-full"
      />

      {canSkip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={handleSkip}
            className="mt-8 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Skip Animation
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingScreen;