'use client';

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { COLOR_PALETTE, getHoverColor } from "@/lib/palette";

export default function Home() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  
  // Random background color on mount
  const bgColor = useMemo(() => {
    return COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
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
    <div className="min-h-screen text-black p-4 sm:p-6 md:p-8 overflow-hidden relative" style={{ backgroundColor: bgColor }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
      

      
      <main className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <header className="text-center mb-4 sm:mb-6 flex-shrink-0 relative">
          <div className="inline-block relative">
            <h1 
              className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-black border-4 sm:border-6 md:border-8 border-black inline-block px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                transform: 'perspective(500px) rotateX(-2deg)',
                lineHeight: '1.6'
              }}
            >
              INCREFF STARTER PACK
            </h1>
            {/* Crosshair accent */}
            
          </div>
          {/* Thin divider line */}
          <div className="w-full h-[2px] bg-black mt-3 sm:mt-4 opacity-20"></div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 flex-1 overflow-hidden">
          {/* Photo Gallery - Takes 2 columns */}
          <div className="lg:col-span-2 border-2 sm:border-4 border-black bg-white p-3 sm:p-4 md:p-6 relative overflow-hidden flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {/* HUD Corner Brackets */}
           
            
            <div className="flex-1  relative flex items-center justify-center overflow-hidden border-2 sm:border-4 border-black min-h-[250px] sm:min-h-[350px] md:min-h-[400px]">
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
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl md:text-7xl font-black transition-all z-10   w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center opacity-50 hover:opacity-100"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl md:text-7xl font-black transition-all z-10    w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center opacity-50 hover:opacity-100"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
                aria-label="Next photo"
              >
                ›
              </button>

              {/* Photo counter HUD */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4  bg-opacity-80 border-2 border-white px-2 py-1 sm:px-4 sm:py-2 text-white font-mono text-xs sm:text-sm z-10" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                [{currentPhoto + 1}/{photos.length}]
              </div>
            </div>
            
            <div className="mt-3 sm:mt-4 text-center">
              <h2 className="text-sm sm:text-xl md:text-2xl font-black" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                /// EVENT
              </h2>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-4 sm:gap-6 overflow-hidden">
            {/* Spotify Player */}
            <div className="border-2 sm:border-4 border-black bg-white p-3 sm:p-4 flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="w-full">
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg?utm_source=generator&theme=0"  
                  height="352"
                  width={"100%"}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                 
                  style={{ borderRadius: 0 }}
                  className="min-h-[250px] sm:min-h-[300px]"
                ></iframe>
              </div>
            </div>

            {/* Summary */}
            <div className="border-2 sm:border-4 border-black bg-white p-3 sm:p-4 flex-1 overflow-hidden flex flex-col shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative min-h-[150px] sm:min-h-0">
              <div className="absolute top-2 left-2 text-[#CCFF00] text-xs font-mono">|||</div>
              <h3 className="text-[10px] sm:text-xs font-black mb-2 sm:mb-3 pb-2 border-b-2 border-black flex-shrink-0" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                [SUMMARY]
              </h3>
              <div className="flex-1 overflow-y-auto pr-2">
                <p className="text-xs sm:text-sm font-bold leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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
