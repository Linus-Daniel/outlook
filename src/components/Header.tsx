import Image from "next/image";
import Link from "next/link";

const icon  =  require("../app/assets/icon.png")
const Header = () => {
  // Navigation links data
  const navLinks = [
    "Microsoft 365",
    "Outlook",
    "Product",
    "For business",
    "Plans and pricing",
    "Support"
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link href="#" className="text-2xl font-bold flex items-center gap-5 text-gray-800 mr-8">
          <Image src={icon} width={100 } height={50 } alt="Microsoft" />
          <p className="">|</p>
          </Link>
            
            {/* Navigation links */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link, index) => (
                <a 
                  key={`nav-${index}`} 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Search and action buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 hover:underline">Buy now</button>
            <button className="text-sm text-gray-600 hover:text-gray-900 hover:underline">Sign in</button>
          </div>
        </div>

       
      </div>
    </header>
  );
};

export default Header;