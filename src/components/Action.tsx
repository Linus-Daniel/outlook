import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    title: 'Connect your accounts',
    subtitle: 'Streamline your different accounts in one place',
    image: '/images/action.png',
  },
  {
    title: 'Write better emails',
    subtitle: 'Create impactful emails with AI-powered suggestions and formatting tools.',
    image: '/images/action-write.png',
  },
  {
    title: 'Use free Microsoft 365 apps',
    subtitle: 'Access Word, Excel, and PowerPoint from Outlook with a single click.',
    image: '/images/action-m365.png',
  },
];

const OutlookAction: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id='tour' className="relative bg-[#fef9f4] text-center py-20 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/actionbg.png"
          alt="Wavy background"
          layout="fill"
          objectFit="cover"
          className="object-bottom"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="uppercase text-sm font-medium tracking-wide text-gray-500">Take the tour</p>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-gray-900">
          See Outlook in Action
        </h2>
        <p className="max-w-2xl mx-auto text-base text-gray-700 mb-10">
          Manage what’s important with Outlook. Whether it’s different email accounts, multiple calendars, or signing that form, Outlook has you covered—whether at home or on the go.
        </p>

{/* Tabs */}
<div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-14">
  <div className="inline-flex space-x-2 sm:space-x-0 sm:flex sm:justify-center sm:flex-wrap border rounded-full bg-white shadow-sm max-w-2xl mx-auto">
    {tabs.map((tab, index) => (
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`px-5 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
          activeTab === index
            ? 'text-blue-700 bg-white border-b-2 border-blue-700'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        {tab.title}
      </button>
    ))}
  </div>
</div>


        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={tabs[activeTab].subtitle}
            className="text-xl font-semibold text-gray-900 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].subtitle}
          </motion.h3>
        </AnimatePresence>

        {/* Image */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={tabs[activeTab].image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                width={1600}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OutlookAction;
