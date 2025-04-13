import Image from "next/image";
import React from "react";
import { FaChevronCircleRight, FaChevronRight, FaStar } from "react-icons/fa";// Or replace with any star icon

const apps = [
  {
    id: 1,
    company: "Microsoft Corporation",
    name: "Power BI",
    description: "Collaborate better with your data.",
    rating: 4.5,
    reviews: 116051,
    logo: "/images/power.png",
  },
  {
    id: 2,
    company: "Microsoft Corporation",
    name: "Copilot",
    description: "Your copilot for work",
    rating: 4.4,
    reviews: 56934,
    logo: "/images/copilot.png",
  },
  {
    id: 3,
    company: "ADOBE INC.",
    name: "Adobe Acrobat for Microsoft Teams a...",
    description: "Gain insights, edit, convert, and collaborate on PDFs",
    rating: 4.1,
    reviews: 41301,
    logo: "/images/adobe.png",
  },
];

interface Apps {
    logo:string;
    name:string;
    company:string
    description:string;
    rating:number;
    reviews:number
}

const AppCard = ({ logo, company, name, description, rating, reviews }:Apps) => (
    <div id="apps" className="w-[350px] h-[250px] bg-white rounded-3xl shadow-md border-gray-300 shadow-gray-200 border p-4 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3  mb-5">
        <div className="border-[2px] h-16 w-16  border-solid p-3 border-[#e6f2fb] rounded-lg ">

        <Image width={40} height={40} src={logo} alt={name} className=" object-contain" />
        </div>
        <div className="text-sm text-[#2a446f] font-medium">{company}

      <h3 className=" font-semibold text-[1.15rem] text-[#0f172a] leading-tight mb-2">
        {name}
      </h3>
      </div>
        </div>
      <p className="text-[1rem] text-gray-700 line-clamp-2">{description}</p>
    </div>
    <div className="flex justify-between items-center text-sm font-medium mt-4">
      <div className="flex items-center gap-1 text-[#17253d]">
        <FaStar size={16} className="text-yellow-500" fill="currentColor" />
        {rating} ({reviews.toLocaleString()})
      </div>
      <a href="# " className="text-[#0067B8] flex items-center gap-2 text-xs hover:underline">
        Learn more <FaChevronRight />
      </a>
    </div>
  </div>

);

const Apps = () => {
  return (
    <section className="bg-[#fff9f3] w-full h-screen py-16 md:px-10 ">
      <div className="mb-10">
        <p className=" text-gray-500 uppercase text-xs font-medium tracking-wide mb-2">
          Partner Solutions
        </p>
        <h2 className="text-3xl md:text-4xl  text-[#0f172a] mb-4">
          Apps for Microsoft 365
        </h2>
        <p className="text-gray-700 max-w-full text-sm ">
          Work smarter in Outlook with apps tailored to help you communicate,
          manage your schedule, and find what you need—simply and fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4 ">
        {apps.map((app) => (
          <AppCard key={app.id} {...app} />
        ))}
      </div>

      <div className="mt-10">
        <button className="flex items-center gap-2 text-sm font-mediumpx-4 text-[#0f172a] py-2 rounded-full hover:bg-[#1e293b] transition">
          <span className="text-lg  text-white p-2 rounded-lg bg-[#0f172a] "> <FaChevronRight /></span> View all apps
        </button>
      </div>
    </section>
  );
};

export default Apps;
