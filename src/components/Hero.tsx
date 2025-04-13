import React from 'react';
import Image from 'next/image'; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 md:px-  overflow-hidden">
      <div>

      {/* Background image - using Next.js optimized Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/hero-bg.avif"}
          alt="Outlook background"
          layout="fill"
          objectFit="cover"
          quality={100}
          //   placeholder="blur" // Optional blur-up while loading
          // className="opacity-10" // Adjust opacity as needed
          />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4  sm:px-6 lg:pl-52 py-24 md:py-32">
        <div className="">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Outlook for everyday <br/ >email and calendars
          </h1>
          
          {/* Description */}
          <p className="text-xl  text-gray-600 max-w-3xl mx-auto mb-10">
            Stay on top of multiple accounts with email, calendars, and contacts in one place.
            Available on desktop, mobile, and web.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#091f2c] font-semibold text-white md:px-4 px-8 py-3 rounded-sm text-base  transition-colors duration-200">
              Sign in
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 border border-[#091f2c] px-8 md:px-5 text-sm py-3 rounded-md  font-semibold font-medium transition-colors duration-200">
              Create free account
            </button>
          </div>
        </div>
      </div>
          </div>
          <div className='' />
    </section>
  );
};

export default Hero;