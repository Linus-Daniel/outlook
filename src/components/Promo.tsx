import React, { useState } from "react";

const panels = [
  {
    title: "Together in one place",
    content:
      "See everything you need to manage your day in one view. Easily stay on top of emails, calendars, contacts, and to-do lists—at home or on the go.",
    image: "images/outlook-images/1.png",
  },
  {
    title: "Connect your accounts",
    content: "Connect all your email accounts and manage them in one place for better productivity.",
    image: "/outlook-images/2.png",
  },
  {
    title: "Write more effective emails",
    content: "Use smart suggestions and integrated tools to compose impactful and professional messages.",
    image: "/outlook-images/3.png",
  },
  {
    title: "Easily access your files",
    content: "Quickly attach files from your cloud or local storage directly within your email composer.",
    image: "/outlook-images/4.png",
  },
];

const OutlookPromo = () => {
  const [activeIndex, setActiveIndex] = useState<number | any>(0);

  const togglePanel = (index:number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#fef9f5] min-h-screen px-4 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-10">
          <p className="uppercase text-sm font-semibold text-gray-600 mb-2">Overview</p>
          <h1 className="text-[2rem] md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Your Outlook can change everything
          </h1>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold text-sm">
              Key benefits
            </button>
            <button className="bg-gray-200 text-black px-6 py-2 rounded-full font-semibold text-sm">
              Get more from Outlook
            </button>
            <button className="bg-gray-200 text-black px-6 py-2 rounded-full font-semibold text-sm">
              Copilot in Outlook
            </button>
          </div>
        </div>

        {/* Layout: Left Accordion + Right Image */}
        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* Accordion */}
          <div className="w-full md:w-1/2 space-y-4">
            {panels.map((panel, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                <button
                  onClick={() => togglePanel(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-lg">{panel.title}</span>
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="mt-3 text-sm text-gray-700 transition-all duration-300 ease-in-out">
                    {panel.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Panel */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={panels[activeIndex]?.image}
              alt="Outlook preview"
              className="rounded-xl shadow-lg max-w-full h-auto transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutlookPromo;
