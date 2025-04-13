const Footer = () => {
  // Data structure for the footer sections
  const footerData = {
    whatsNew: {
      title: "What's new",
      links: [
        "Microsoft Store",
        "Education",
        "Business",
        "Developer & IT",
        "Company",
      ],
    },
    microsoftStore: {
      title: "Microsoft Store",
      links: [
        "Android Play",
        "Android profile",
        "Android TV",
        "Android usage",
        "Microsoft Code",
        "AI Workflows",
        "Windows 11 apps",
      ],
    },
    education: {
      title: "Education",
      links: [
        "Microsoft in education",
        "Devices for education",
        "Microsoft Teams for Education",
        "Office Education",
        "Azure for students",
      ],
    },
    business: {
      title: "Business",
      links: [
        "Microsoft Cloud",
        "Microsoft Security",
        "Azure",
        "Microsoft Teams",
        "Small Business",
      ],
    },
    developerIt: {
      title: "Developer & IT",
      links: [
        "Microsoft Developer",
        "Microsoft Learn",
        "Azure Management",
        "Microsoft Power Platform",
        "Visual Studio",
      ],
    },
    company: {
      title: "Company",
      links: [
        "About Microsoft",
        "Company news",
        "Privacy at Microsoft",
        "Investors",
        "Sustainability",
      ],
    },
    bottomLinks: {
      privacy: ["Your Privacy Officers", "Concurrent Health Privacy"],
      legal: [
        "Contact Microsoft",
        "Privacy",
        "Terms of use",
        "Trademarks",
        "About our site",
        "ED Compliance BGGs",
        "Regulatory reporting",
      ],
    },
  };

  return (
    <footer className="bg-gray-100 text-gray-600 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* What's New Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4">
              {footerData.whatsNew.title}
            </h3>
            <ul className="space-y-2">
              {footerData.whatsNew.links.map((link, index) => (
                <li key={`whatsnew-${index}`}>
                  <a href="#" className="text-xs hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Microsoft Store Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              {footerData.microsoftStore.title}
            </h3>
            <ul className="space-y-2">
              {footerData.microsoftStore.links.map((link, index) => (
                <li key={`store-${index}`}>
                  <a href="#" className="text-xs hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              {footerData.education.title}
            </h3>
            <ul className="space-y-2">
              {footerData.education.links.map((link, index) => (
                <li key={`edu-${index}`}>
                  <a href="#" className="text-xs hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              {footerData.business.title}
            </h3>
            <ul className="space-y-2">
              {footerData.business.links.map((link, index) => (
                <li key={`business-${index}`}>
                  <a href="#" className="text-xs hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer & IT Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              {footerData.developerIt.title}
            </h3>
            <ul className="space-y-2">
              {footerData.developerIt.links.map((link, index) => (
                <li key={`dev-${index}`}>
                  <a href="#" className="text-xs hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              {footerData.company.title}
            </h3>
            <ul className="space-y-2">
              {footerData.company.links.map((link, index) => (
                <li key={`company-${index}`}>
                  <a href="#" className="text-xs hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer section */}
        <div className="border-t flex gap-10 border-gray-300 pt-6">
          {/* Language selector */}
          <div className="flex gap-3 items-center">
            <div className="">
              <span className="text-xs">English United Kingdom</span>
            </div>

            {/* Privacy links */}
            <div className="">
              <ul className="flex flex-wrap gap-4">
                {footerData.bottomLinks.privacy.map((link, index) => (
                  <li key={`privacy-${index}`}>
                    <a href="#" className="text-xs hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Legal links */}
            <div className="">
              <ul className="flex flex-wrap gap-4">
                {footerData.bottomLinks.legal.map((link, index) => (
                  <li key={`legal-${index}`}>
                    <a href="#" className="text-xs hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Copyright */}
            <div className="">
              <p className="text-xs">© Microsoft RGS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
