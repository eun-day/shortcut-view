"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className,
  style,
}: AdBannerProps) {
  const adInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations for the same component instance
    if (adInitialized.current) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adInitialized.current = true;
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  // Development mode placeholder
  if (process.env.NODE_ENV === "development") {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 border-2 border-gray-300 rounded-[10px] text-gray-500 text-sm font-medium ${className}`}
        style={{ ...style }}
      >
        <div className="text-center p-4">
          <p>AdSense Placeholder</p>
          <p className="text-xs mt-1">Slot: {dataAdSlot}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your actual AdSense Publisher ID
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
