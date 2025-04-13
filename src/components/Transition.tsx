import Image from 'next/image';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const HotmailComponent = () => {
  return (
    <div className="bg-[#fef9f3] min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white p-3 rounded-xl shadow-gray-400 shadow-md grid gap-6 md:grid-cols-2">
        {/* Left Text Section */}
        <div className=" p-6 rounded-xl flex flex-col justify-center">
          <p className="text-xs text-gray-500 mb-2">Get started</p>
          <h1 className="text-3xl text-[#001e41] font-bold mb-4">What happened to Hotmail?</h1>
          <p className="text-sm text-gray-600 mb-6">
            Outlook.com replaced Hotmail years ago, but your Hotmail account will continue to work across Outlook apps.
          </p>
          <button className="bg-[#001e41] text-white px-4 py-2 rounded-md md:w-fit">Sign in</button>
        </div>

        {/* Right Image Section */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/transition.avif"
            alt="Person using tablet"
            width={434}
            height={282}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 mt-10 md:grid-cols-2">
        {/* Create Account Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
          <div className=" text-white rounded-full p-2 mr-3">
             <Image src={"/images/person.svg"} alt='diamond' width={30} height={30} />
            </div>
            <h2 className="text-lg text-[#001e41] font-semibold">Create free account</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Don’t have an account? Get started with a free Outlook.com email today.
          </p>
         <div className="mt-10">
                 <button className="flex items-center gap-2 text-sm font-mediumpx-4 text-[#0f172a] py-2 rounded-full hover:bg-[#1e293b] transition">
                   <span className="text-lg  text-white p-2 rounded-lg bg-[#0f172a] "> <FaChevronRight /></span> Create account
                 </button>
               </div>
        </div>

        {/* Try Premium Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className=" text-white rounded-full p-2 mr-3">
             <Image src={"/images/diamond.svg"} alt='diamond' width={30} height={30} />
            </div>
            <h2 className="text-lg text-[#001e41] font-semibold">Try premium</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Get the best Outlook experience with a Microsoft 365 subscription.
          </p>
          <div className="mt-10">
                  <button className="flex items-center gap-2 text-sm font-mediumpx-4 text-[#0f172a] py-2 rounded-full hover:bg-[#1e293b] transition">
                    <span className="text-lg  text-white p-2 rounded-lg bg-[#0f172a] "> <FaChevronRight /></span> Explore plans
                  </button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default HotmailComponent;
