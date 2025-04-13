import { useEffect, useState } from "react";
import { FaChevronDown as ChevronDown } from "react-icons/fa";

const TabNav = () => {
  const tabs = [
    { label: "Overview", id: "overview" },
    { label: "Take the tour", id: "tour" },
    { label: "Download the app", id: "download" },
    { label: "Plans & Pricing", id: "pricing" },
    { label: "Microsoft 365 apps", id: "apps" },
    { label: "News & Tips", id: "news" },
    { label: "FAQ", id: "faq" },
  ];

  const pricingTab = { label: "See plans & pricing", id: "see-pricing" };

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setDropdownOpen(false);
    const el = document.getElementById(tabId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // IntersectionObserver setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id); // Set active tab when section is in view
          }
        });
      },
      { threshold: 0.5 } // Change this value to adjust how much of the section should be in view
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [tabs]);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-8 pt-2">
        {/* Desktop Tabs */}
        <nav className="hidden md:flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-3  text-sm font-semibold transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-[#0c2b4f] border-b-[3px] border-[#0c2b4f]"
                  : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile Custom Dropdown */}
        <div className="relative w-full md:hidden">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="w-full flex items-center justify-between text-[#0c2b4f] px-4 py-3 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm"
          >
            {tabs.find((t) => t.id === activeTab)?.label}
            <ChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* See Plans & Pricing */}
        <div className="ml-4 flex-shrink-0">
          <button
            onClick={() => handleTabClick(pricingTab.id)}
            className="bg-[#0a2239] text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-[#0c2b4f] transition-colors duration-200"
          >
            {pricingTab.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabNav;
