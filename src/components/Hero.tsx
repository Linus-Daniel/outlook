import React from 'react';
import Image from 'next/image'; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background image - using Next.js optimized Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/hero-bg.avif"}
          alt="Outlook background"
          layout="fill"
          objectFit="cover"
          quality={100}
        //   placeholder="blur" // Optional blur-up while loading
          className="opacity-10" // Adjust opacity as needed
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Outlook for everyday email and calendars
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Stay on top of multiple accounts with email, calendars, and contacts in one place.
            Available on desktop, mobile, and web.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm text-base font-medium transition-colors duration-200">
              Sign in
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-sm text-base font-medium transition-colors duration-200">
              Create free account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;