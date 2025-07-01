'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const WelcomeScreen = () => {
  const router = useRouter();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    router.push('/gallery');
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    router.push('/gallery');
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white opacity-10 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-gray-400 opacity-10 rounded-full filter blur-3xl z-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex flex-col items-center">
          <video
            ref={videoRef}
            src="/videos/loadingvideo.mp4"
            width={400}
            height={320}
            className="w-full max-w-md h-80 object-contain rounded-xl shadow-lg border border-white/20"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
          <button
            onClick={handleSkip}
            className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-black to-gray-700 text-white font-semibold shadow-md hover:scale-105 hover:from-gray-700 hover:to-black transition-all duration-200"
          >
            Skip Animation
          </button>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-2">Welcome to Arry&apos;s NFT Gallery</h1>
          <p className="text-lg text-white/80">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
