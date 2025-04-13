import Image from 'next/image';
import React from 'react';

interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  downloadLink: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ icon, title, description, downloadLink }) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow w-full sm:w-[300px]">
      <Image alt='icon' src={icon}/>
      <h3 className="text-lg text-gray font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <a href={downloadLink} className="text-blue-600 underline mt-auto w-fit">
        Download
      </a>
    </div>
  );
};

export default PlatformCard;
