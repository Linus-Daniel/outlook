import React, { useState } from "react";

const TABS = ["What’s new", "For personal", "For work", "Tips & tricks"];

const CARDS = [
  {
    id: 1,
    title: "Available for free in the Microsoft Store on Windows 11 and in new versions of Windows starting to ship",
    label: "New Outlook for Windows",
    tab: "What’s new",
    image: "https://via.placeholder.com/600x300",
  },
  {
    id: 2,
    title: "See how Copilot in Outlook does email and time management",
    label: "Copilot in Outlook",
    tab: "For work",
    image: "https://via.placeholder.com/600x300",
  },
  {
    id: 3,
    title: "Stay up to date with Outlook news on Tech Community",
    label: "Blog",
    tab: "Tips & tricks",
    image: "https://via.placeholder.com/600x300",
  },
];

interface Card {
    image:string;
    label:string;
    title:string;
}

const Card = ({ image, label, title }:Card) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
    <img src={image} alt={label} className="w-48 h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
      <h3 className="text-md font-semibold text-[#0f172a] mb-4 leading-snug">
        {title}
      </h3>
      <button className="flex items-center gap-2 text-sm font-medium text-[#0f172a] hover:underline">
        ➤ Learn more
      </button>
    </div>
  </div>
);

const Updates = () => {
  const [activeTab, setActiveTab] = useState("What’s new");

  const filteredCards = CARDS.filter((card) => card.tab === activeTab);

  return (
    <main id="news" className="bg-contain bg-left-bottom bg-no-repeat bg-[#fff9f3]"
    style={{
        backgroundImage: "url('/images/bg2.avif')", // Replace with your actual background
    }}>

    <div
      className=" py-16 px-4 md:px-20 font-sans bg-no-repeat bg-left-bottom bg-contain"
     
    >
      {/* Top Nav */}
      <div className="flex justify-between items-center mb-8">
        <button className="flex items-center gap-2 text-sm font-medium text-[#0f172a] bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100 transition">
          <span className="text-lg">➤</span> View all apps
        </button>
      </div>

      {/* Header */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-500 uppercase mb-2">
          News and Tips
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
          Get the latest on Microsoft Outlook
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3">
          {TABS.map((tab) => (
              <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                  ? "bg-[#0f172a] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
            <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
        </main>
  );
};

export default Updates;
