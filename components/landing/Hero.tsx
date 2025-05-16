'use client';

import React from 'react';

const SOCIAL_PLATFORMS = [
  'TikTok', 'Meta', 'Youtube', 'Instagram', 'Amazon'
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6948549/6948549-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up leading-tight">
          Thousands of Creators.<br />
          <span className="text-[#4B9FD6]">One Goal:</span> Your Success.
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up animate-delay-150">
          {SOCIAL_PLATFORMS.map((platform) => (
            <div key={platform} className="text-sm md:text-base font-medium flex items-center">
              {platform}
              {platform !== SOCIAL_PLATFORMS[SOCIAL_PLATFORMS.length - 1] && 
                <span className="ml-6 h-1 w-1 rounded-full bg-[#4B9FD6] opacity-70"></span>}
            </div>
          ))}
        </div>

        <a
          href="#signup"
          className="btn-primary inline-block bg-[#4B9FD6] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 transform hover:shadow-2xl animate-fade-up animate-delay-300 hover:bg-[#3D8CBF]"
        >
          Start creating content
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;