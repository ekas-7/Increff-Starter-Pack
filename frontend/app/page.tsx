'use client';

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Random background color on mount
  const bgColor = useMemo(() => {
    const colors = ['#172B79', '#9C562D', '#759E70', '#89764E'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      summary: "Mountain landscapes offer breathtaking views and serene environments. The crisp air and vast horizons create perfect moments for reflection and adventure. Nature's raw beauty stands unmatched in these elevated terrains."
    },
    {
      url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop",
      summary: "Coastal regions bring together the power of ocean waves with sandy shores. The rhythmic sound of water creates a meditative atmosphere. These environments showcase nature's dynamic energy and peaceful coexistence."
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      summary: "Forest pathways lead to discovery and exploration. Dense canopies filter sunlight creating magical atmospheric conditions. These natural corridors invite wanderers to embrace the wilderness and find their path."
    },
    {
      url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
      summary: "Desert landscapes demonstrate nature's adaptability and stark beauty. Endless horizons and unique geological formations tell stories of time. The silence and vastness create profound experiences of solitude."
    },
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="h-screen text-black p-8 overflow-hidden relative" style={{ backgroundColor: bgColor }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
      
      {/* HUD Decorative Elements */}
      <div className="absolute top-4 left-4 text-[#CCFF00] text-sm font-mono tracking-tight bg-black px-3 py-2 border-2 border-[#CCFF00]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        {formatTime(currentTime)}
      </div>
      <div className="absolute top-4 right-4 text-[#CCFF00] text-xs font-mono">
        + ACTIVE
      </div>
      <div className="absolute bottom-4 left-4 text-black text-xs font-mono opacity-40">
        ||||||||||||||||||||
      </div>
      
      <main className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <header className="text-center mb-4 flex-shrink-0 relative">
          <div className="inline-block relative">
            <h1 
              className="text-3xl font-black border-8 border-black inline-block px-8 py-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                transform: 'perspective(500px) rotateX(-2deg)',
                lineHeight: '1.6'
              }}
            >
              INCREFF STARTER PACK
            </h1>
            {/* Crosshair accent */}
            <div className="absolute -top-3 -right-3 text-[#CCFF00] text-3xl font-bold">+</div>
          </div>
          {/* Thin divider line */}
          <div className="w-full h-[2px] bg-black mt-4 opacity-20"></div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
          {/* Photo Gallery - Takes 2 columns */}
          <div className="lg:col-span-2 border-4 border-black bg-white p-6 relative overflow-hidden flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {/* HUD Corner Brackets */}
            <div className="absolute top-2 left-2 text-[#CCFF00] text-lg font-mono">[ </div>
            <div className="absolute top-2 right-2 text-[#CCFF00] text-lg font-mono"> ]</div>
            
            <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden border-4 border-black">
              <Image
                src={photos[currentPhoto].url}
                alt={`Photo ${currentPhoto + 1}`}
                fill
                className="object-cover grayscale contrast-125"
                unoptimized
              />
              
              {/* Navigation Arrows - 8-bit style */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#CCFF00] text-7xl font-black hover:text-white transition-colors z-10 bg-black border-4 border-[#CCFF00] w-20 h-20 flex items-center justify-center font-mono"
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#CCFF00] text-7xl font-black hover:text-white transition-colors z-10 bg-black border-4 border-[#CCFF00] w-20 h-20 flex items-center justify-center font-mono"
                aria-label="Next photo"
              >
                ›
              </button>

              {/* Photo counter HUD */}
              <div className="absolute bottom-4 right-4 bg-black border-2 border-[#CCFF00] px-4 py-2 text-[#CCFF00] font-mono text-sm z-10">
                [{currentPhoto + 1}/{photos.length}]
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                /// PHOTOS
              </h2>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-6 overflow-hidden">
            {/* Spotify Player */}
            <div className="border-4 border-black bg-white p-4 flex-shrink-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="w-full">
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                 
                  style={{ borderRadius: 0 }}
                ></iframe>
              </div>
            </div>

            {/* Summary */}
            <div className="border-4 border-black bg-white p-4 flex-1 overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative min-h-0">
              <div className="absolute top-2 left-2 text-[#CCFF00] text-xs font-mono">|||</div>
              <h3 className="text-xs font-black mb-3 pb-2 border-b-2 border-black flex-shrink-0" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                [SUMMARY]
              </h3>
              <div className="flex-1 overflow-y-auto pr-2">
                <p className="text-sm font-bold leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {photos[currentPhoto].summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
