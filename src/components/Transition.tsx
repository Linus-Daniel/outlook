import Image from "next/image";
import React from "react";

const HotmailInfo = () => {
  return (
    <main className="">
      <div className="bg-[#fff9f3] min-h-screen py-10 px-4 md:px-20 font-sans">
        {/* Top Feature Section */}
        <div className="grid lg:grid-cols-2 gap-6 bg-white rounded-2xl shadow-md overflow-hidden mb-10">
          {/* Text Section */}
          <div className="p-8 flex flex-col justify-center">
            <p className="text-xs text-gray-500 mb-2">Get started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              What happened to <br /> Hotmail?
            </h2>
            <p className="text-sm text-gray-600 mb-5 max-w-md">
              Outlook.com replaced Hotmail years ago, but your Hotmail account
              will continue to work across Outlook apps.
            </p>
            <button className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm w-fit hover:bg-gray-800 transition">
              Sign in
            </button>
          </div>

          {/* Image Section */}
          <div className="h-64 md:h-auto w-full">
            <Image
              src="/images/transition.avif" // Replace with actual image
              width={343}
              height={282}
              alt="Woman using tablet"
              className=" object-fit object-center"
            />
          </div>
        </div>

        {/* Bottom Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Create Account Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4">
            <div className="text-xl text-gray-700">👤</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Create free account
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Don’t have an account? Get started with a free Outlook.com email
                today.
              </p>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                Create account
              </button>
            </div>
          </div>

          {/* Try Premium Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4">
            <div className="text-xl text-gray-700">💎</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Try premium
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the best Outlook experience with a Microsoft 365
                subscription.
              </p>
              <button className="text-sm text-gray-900 font-medium hover:underline transition">
                Explore plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HotmailInfo;
