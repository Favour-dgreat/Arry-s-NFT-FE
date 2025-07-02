"use client";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { createPortal } from "react-dom";

interface JoinCommunityModalProps {
  open: boolean;
  onClose: () => void;
  onDiscordConnect: () => void; 
}

export default function JoinCommunityModal({ open, onClose, onDiscordConnect }: JoinCommunityModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [buttonProcessing, setButtonProcessing] = useState(false);

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
    // Navigate to /FullSelectionInterface after opening Discord
    window.location.href = "/FullSelectionInterface";
    // const clientId = "YOUR_DISCORD_CLIENT_ID"; 
    // const redirectUri = encodeURIComponent(window.location.origin + "/discord-callback");
    // const discordOauthUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=identify%20guilds.join`;
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
        <p className="text-center text-lg font-light text-[#000000] mb-6">
          To access the full collection and begin your NFT selection, please
          join our Discord community
        </p>
        <label className="block mb-2 font-medium text-lg" htmlFor="email">
          Email address
        </label>
        <div className="flex items-center bg-[#E3E3E3] border-2 border-[#767676] rounded-lg px-4 py-4 mb-2">
          <Mail className="text-[#000000] mr-3 w-5 h-5" />
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full outline-none text-sm placeholder-[#000000]"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>} {/* Display error */}
        <button
          onClick={async () => {
            // Set processing state and update button text before opening the link
            setButtonProcessing(true);
            // Wait a tick to ensure the UI updates before opening the new tab
            await new Promise((resolve) => setTimeout(resolve, 100));
            handleJoin();
          }}
          disabled={!isValid || buttonProcessing} // Disable if invalid or processing
          className={`w-full mt-2 py-3.5 rounded-lg font-medium ${
            isValid && !buttonProcessing
              ? "bg-black text-white"
              : "bg-[#2C2C2C] text-gray-200 cursor-not-allowed"
          }`}
        >
          {buttonProcessing ? "Processing..." : "Join Discord & Continue"}
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