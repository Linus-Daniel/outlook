import React from 'react';
import PlatformCard from '../components/PlatformCard';
import { FaWindows, FaApple, FaAndroid } from 'react-icons/fa';
import { SiIos } from 'react-icons/si';

const windows = require("./../../public/images/windows.svg")
const mac = require("./../../public/images/mac.svg")
const android = require("./../../public/images/android.svg")
const ios = require("./../../public/images/IOS.svg")


interface PlatformData {
  icon: React.ReactNode;
  title: string;
  description: string;
  downloadLink: string;
}

const platforms: PlatformData[] = [
  {
    icon: windows,
    title: 'On Windows',
    description: 'Now included for free in Windows for personal use',
    downloadLink: '#',
  },
  {
    icon: mac,
    title: 'On Mac',
    description: 'Redesigned for macOS, enhanced for Apple Silicon, and free for personal use',
    downloadLink: '#',
  },
  {
    icon: ios,
    title: 'On iOS',
    description: 'Works with iPhone, iPad, and Apple Watch',
    downloadLink: '#',
  },
  {
    icon: android,
    title: 'On Android',
    description: 'Stay connected across phones, tablets, and smart devices',
    downloadLink: '#',
  },
];

const Platform: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#fff9f5] py-16 px-6 text-center">
      <p className="uppercase text-sm text-gray-500 tracking-wide">Download the app</p>
      <h2 className="text-3xl sm:text-4xl font-bold my-4">Outlook wherever you are</h2>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {platforms.map((platform, index) => (
          <PlatformCard key={index} {...platform} />
        ))}
      </div>
    </section>
  );
};

export default Platform;
