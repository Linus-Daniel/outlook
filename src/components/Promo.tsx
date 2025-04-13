import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    title: "Key benefits",
    image: "/images/img1.png",
    content: [
      {
        title: "Together in one place",
        body:
          "See everything you need to manage your day in one view. Easily stay on top of emails, calendars, contacts, and to-do lists—at home or on the go.",
        image: "/images/section1.png",
      },
      {
        title: "Connect your accounts",
        body: "Link all your email accounts and manage everything from one place.",
        image: "/images/section2.png",
      },
      {
        title: "Write more effective emails",
        body: "Use smart suggestions and AI tools to write better, faster.",
        image: "/images/section3.png",
      },
      {
        title: "Easily access your files",
        body: "Attach and preview files stored in OneDrive, Dropbox, or Google Drive.",
        image: "/images/section4.png",
      },
    ],
  },
  {
    title: "Get more from Outlook",
    image: "/images/img2.png",
    content: [
      {
        title: "Advanced calendar options",
        body: "Schedule meetings, set reminders, and stay on top of your schedule.",
        image: "/images/section5.png",
      },
      {
        title: "Smart inbox",
        body: "Focus on what matters most with Focused Inbox and intelligent filters.",
        image: "/images/section6.png",
      },
    ],
  },
  {
    title: "Copilot in Outlook",
    image: "/images/img3.png",
    content: [
      {
        title: "AI Assistance",
        body:
          "Let Copilot help draft emails, summarize conversations, and suggest replies.",
        image: "/images/section7.png",
      },
      {
        title: "Productivity Insights",
        body:
          "Receive insights and suggestions based on your email activity.",
        image: "/images/section8.png",
      },
    ],
  },
];

const OutlookUI = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSections, setOpenSections] = useState<any>({});
  const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections((prev: any) => {
      const isOpen = !prev[index];
      setActiveSectionIndex(isOpen ? index : null);
      return { ...prev, [index]: isOpen };
    });
  };

  return (
    <div className="p-8 h-screen bg-[#fefaf6] min-h-screen flex flex-col lg:px-36 font-sans">
      <h4 className="text-sm tracking-wider uppercase text-gray-500">Overview</h4>
      <h1 className="text-4xl font-bold mt-2 text-gray-900">
        Your Outlook can change everything
      </h1>

      {/* Responsive Scrollable Tabs */}
      <div className="w-full mt-6 scrollbar-hide h-fit overflow-x-auto">
        <div className="flex space-x-4 w-max whitespace-nowrap px-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(i);
                setOpenSections({});
                setActiveSectionIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm space-x-8  font-medium shadow-sm transition-all duration-300 ${
                activeTab === i ? "bg-black text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content and Image Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="flex-1 w-full">
          {tabs[activeTab].content.map((section, i) => (
            <div
              key={i}
              className="border-t py-4 cursor-pointer"
              onClick={() => toggleSection(i)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
                <span className="text-xl">{openSections[i] ? "▴" : "▾"}</span>
              </div>
              <AnimatePresence>
                {openSections[i] && (
                  <motion.p
                    className="mt-2 text-gray-600 max-w-xl"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.body}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Animated Image Display */}
        <div className="flex-1 w-full flex justify-center items-start">
          <motion.div
            key={
              activeSectionIndex !== null
                ? tabs[activeTab].content[activeSectionIndex].image
                : tabs[activeTab].image
            }
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              alt="Outlook demo UI"
              className="w-full max-w-lg rounded-xl shadow-xl"
              src={
                activeSectionIndex !== null
                  ? tabs[activeTab].content[activeSectionIndex].image
                  : tabs[activeTab].image
              }
              width={500}
              height={50}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OutlookUI;
