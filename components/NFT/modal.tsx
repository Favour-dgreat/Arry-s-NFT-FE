// components/JoinCommunityModal.tsx
'use client';
import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

export default function JoinCommunityModal() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // 2 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    setError(email.length && !isValidEmail ? 'Please enter a valid email address.' : '');
  }, [email]);

  const handleJoin = () => {
    if (!isValid) return;
    
    // Task: Save email to firebase backend or analytics service here
    
    // Task: Request for Discord invite link
    window.open('https://discord.gg/your-server-code', '_blank'); 
    setShowModal(false);
  };
  const [buttonProcessing, setButtonProcessing] = useState(false);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative text-black">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-black text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center mb-2">Join our Community</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          To access the full collection and begin your NFT selection,
          please join our Discord community
        </p>

        <label className="block mb-2 font-medium text-sm" htmlFor="email">
          Email address
        </label>
        <div className="flex items-center bg-gray-200 rounded-lg px-4 py-2 mb-4">
          <Mail className="text-gray-500 mr-3 w-5 h-5" />
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full outline-none text-sm"
          />
        </div>
         {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        <button 
          onClick={() => {
            setButtonProcessing(true);
            handleJoin();
          }}
          disabled={!isValid || buttonProcessing}
          className={`w-full mt-4 py-2.5 rounded-lg font-medium ${
            isValid && !buttonProcessing ? 'bg-black text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
        >
          {buttonProcessing ? 'Processing' : 'Join Discord & Continue'}
        </button>


        <p className="text-xs text-center text-gray-500 mt-4">
          By continuing, you agree to our{' '}
          <a href="#" className="underline">Terms of Service</a> and{' '}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
