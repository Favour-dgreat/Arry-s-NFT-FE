"use client";

import React, { useState } from "react";

interface SeeMoreProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

const SeeMore: React.FC<SeeMoreProps> = ({ preview, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="text-lg max-w-xl text-center leading-relaxed text-black">
      {preview}
      {expanded && <div className="mt-2">{children}</div>}
      <button
        className="text-[#8E8E93] italic cursor-pointer underline mt-1"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "see less" : "see more"}
      </button>
    </div>
  );
};

export default SeeMore;
