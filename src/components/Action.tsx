import React from 'react';
import Image from 'next/image';

const OutlookAction: React.FC = () => {
  return (
    <section className="relative bg-[#fef9f4] text-center py-20 px-4 overflow-hidden">
      {/* Wavy background image behind everything */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/actionbg.png"
          alt="Wavy background"
          layout="fill"
          objectFit="cover"
          className="object-bottom"
        />
      </div>

      {/* Content layer above the background */}
      <div className="relative z-10">
        {/* Heading and description */}
        <p className="uppercase text-sm font-medium tracking-wide text-gray-500">Take the tour</p>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-gray-900">
          See Outlook in Action
        </h2>
        <p className="max-w-2xl mx-auto text-base text-gray-700 mb-10">
          Manage what’s important with Outlook. Whether it’s different email accounts, multiple calendars, or signing that form, Outlook has you covered—whether at home or on the go.
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-0 border rounded-full overflow-hidden max-w-2xl mx-auto mb-14 bg-white shadow-sm">
          <button className="px-5 py-3 text-sm font-medium text-blue-700 bg-white border-b-2 border-blue-700 rounded-none focus:outline-none">
            Connect your accounts
          </button>
          <button className="px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Write better emails
          </button>
          <button className="px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Use free Microsoft 365 apps
          </button>
        </div>

        {/* Subheading */}
        <h3 className="text-xl font-semibold text-gray-900 mb-10">
          Streamline your different accounts in one place
        </h3>

        {/* Main Outlook Screenshot */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/actionz.png"
            alt="Outlook screenshot"
            width={1600}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OutlookAction;
