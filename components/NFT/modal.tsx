"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail } from "lucide-react";
import { createPortal } from "react-dom";

interface JoinCommunityModalProps {
  open: boolean;
  onClose: () => void;
  onDiscordConnect: () => void; // This prop is called when Discord connection is initiated
}

export default function JoinCommunityModal({ open, onClose, onDiscordConnect }: JoinCommunityModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [buttonProcessing, setButtonProcessing] = useState(false); // Manages the button's loading state

  useEffect(() => {
    // Reset state when the modal is closed
    if (!open) {
      setEmail("");
      setError("");
      setButtonProcessing(false);
    }
  }, [open]);

  useEffect(() => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    setError(
      email.length && !isValidEmail ? "Please enter a valid email address." : ""
    );
  }, [email]);

  const handleJoin = async () => {
    if (!isValid || buttonProcessing) return; // Prevent action if invalid or already processing

    setButtonProcessing(true); // Start processing state

    // Simulate opening Discord in a new tab
    // In a real scenario, this might trigger an OAuth flow that redirects back
    window.open("https://discord.gg/your-server-code", "_blank");

    // Call the parent's onDiscordConnect function.
    // The parent is responsible for updating 'discordConnected' state and navigating.
    onDiscordConnect(); 

    // Close the modal immediately after initiating the connection and navigation
    onClose(); 
    
    // Note: The navigation to /FullSelectionInterface should ideally happen
    // in the parent component after the Discord connection is confirmed.
    // If you keep it here, it will navigate regardless of actual Discord connection success.
    // For a robust solution, the parent component (Home.tsx) should control navigation
    // after its `handleDiscordConnect` confirms success.
    // If your modal *itself* confirms Discord success (unlikely with a simple window.open),
    // then keeping router.push here might make sense.
    // For this example, we'll assume the parent component handles the final navigation.
  };

  if (!open) return null; // Don't render anything if the modal is not open

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative text-black shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-center mb-2">
          Join our Community
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          To access the full collection and begin your NFT selection, please
          join our Discord community
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
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>} {/* Display error */}
        <button
          onClick={handleJoin}
          disabled={!isValid || buttonProcessing} // Disable if invalid or processing
          className={`w-full mt-4 py-2.5 rounded-lg font-medium ${
            isValid && !buttonProcessing
              ? "bg-black text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          {buttonProcessing ? "Connecting..." : "Join Discord & Continue"}
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>,
    document.body
  );
}