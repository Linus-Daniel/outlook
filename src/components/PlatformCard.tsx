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
    <div className="flex flex-col h-56 p-6 bg-white rounded-xl justify-between gap-4 shadow-gray-500 shadow hover:shadow-lg transition-shadow w-full sm:w-[300px]">
      <Image alt='icon' src={icon as string}/>
      <h3 className="text-lg text-[#17253d] font-semibold">{title}</h3>
      <p className="text-sm text-start text-[#17253d]">{description}</p>
      <a href={downloadLink} className="text-[#17253d] text-sm font-semibold underline-offset-4 underline mt-auto w-fit">
        Download
      </a>
    </div>
  );
};

export default PlatformCard;
