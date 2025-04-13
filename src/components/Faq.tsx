import React, { useState } from "react";

const faqs = [
  "How do I create an Outlook.com account?",
  "I have a Hotmail.com, Live.com, or MSN.com email account. Is that the same as Outlook?",
  "I don’t have an Outlook.com account. Can I still use Outlook apps?",
  "How does mailbox storage / Microsoft storage work for Outlook?",
  "Why do I see ads in my Outlook inbox?",
  "What do I get for Outlook with a Microsoft 365 subscription?",
  "If I have a personal Office (one-time) license, will I be able to access desktop apps and have an ad-free Outlook experience?",
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState<number | any>([]);

  const toggleIndex = (index:number) => {
    setOpenIndexes((prev:any) =>
      prev.includes(index) ? prev.filter((i:number) => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => setOpenIndexes(faqs.map((_, index) => index));
  const collapseAll = () => setOpenIndexes([]);

  return (
    <div id="faq" className="bg-[#fef9f5] min-h-screen px-4 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 md:mb-0">FAQ</h2>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="border border-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium text-gray-400 cursor-not-allowed"
              disabled
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((question, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="border-b border-gray-300 py-4 transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex gap-4 items-start">
                    <span className="text-sm font-semibold text-gray-500 w-8">{String(index + 1).padStart(2, "0")}/</span>
                    <span className="font-medium text-gray-900">{question}</span>
                  </div>
                  <div className="bg-gray-900 text-white rounded-md w-6 h-6 flex items-center justify-center text-sm">
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {/* Collapsible answer placeholder */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-700 px-12">
                    {/* Placeholder answer content */}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates magni vel atque eos adipisci?
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
