import React, { useState } from 'react';

const TabNav = () => {
  // Tab data with corresponding section IDs
  const tabs = [
    { label: "Overview", id: "overview" },
    { label: "Take the tour", id: "tour" },
    { label: "Download the app", id: "download" },
    { label: "Plans & Pricing", id: "pricing" },
    { label: "Microsoft 365 apps", id: "apps" },
    { label: "News & Tips", id: "news" },
    { label: "FAQ", id: "faq" },
    { label: "See plans & pricing", id: "see-pricing" }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId:string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="border-b sticky flex justify-center py-1 items-center top-0 z-50 bg-white border-gray-200">
      <nav className="flex overflow-x-auto whitespace-nowrap px-4 md:px-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-3 text-sm ${tab.id === "see-pricing"? "bg-black rounded-md text-white":""} font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNav;