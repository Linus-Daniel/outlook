"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Head>
        <title>Sign in to your Microsoft account</title>
      </Head>

      <main className="relative min-h-screen flex-col items-center px-2  flex md:items-center md:justify-center bg-white">
        {/* Background */}
        <div className="absolute inset-0 hidden md:block bg-[url('/images/loginbg.svg')] bg-no-repeat bg-cover bg-center" />

        {/* Login Card */}
        <div className="relative z-10 bg-white md:shadow-lg w-full max-w-md mx-4 sm:mx-auto rounded-md">
          <div className="px-2 py-4 sm:p-8">
            <img
              src="/images/icon.png"
              alt="Microsoft Logo"
              className="mb-6 w-28 sm:w-36"
            />
            <h1 className="text-2xl text-[#1b1b1b] font-semibold mb-6">
              Sign in
            </h1>
            <input
              type="email"
              placeholder="Email, phone, or Skype"
              className="w-full border-b-2 border-[#1b1b1b] px-4 py-1 mb-3 text-[#1b1b1b] focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm text-gray-600 mb-6">
              No account?{" "}
              <a href="#" className="text-[#0067b8] hover:underline">
                Create one!
              </a>
            </p>
            <button className="bg-[#0067b8] absolute w-[108px] h-[32px] right-0   flex items-center justify-center text-white py-2 transition">
              Next
            </button>
          </div>
        </div>

        <div className=" border-[1px] w-[366px] px-[24px] flex items-center2  py-[8px] mx-20 mt-10 h-[48px]">
          <button className="flex items-center text-sm text-[#1b1b1b] hover:underline">
            <span className="mr-2">
              <Image
                alt="key "
                width={32}
                height={32}
                src={"/images/key.svg"}
              />{" "}
            </span>{" "}
            Sign-in options
          </button>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-16 w-full flex flex-wrap items-center text-xs text-gray-600 gap-3 px-4 sm:gap-6">
          <div className=" flex items-center gap-3">
            <a href="#" className="hover:underline">
              Terms of use
            </a>
            <a href="#" className="hover:underline">
              Privacy & cookies
            </a>
            <span className=" sm:inline">• • •</span>
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
