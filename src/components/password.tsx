import { useState } from "react";

interface Params {
    email:string
}

export default function PasswordStep({ email }:Params) {
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white md:shadow-lg w-full max-w-md mx-4 sm:mx-auto rounded-md px-2 py-4 sm:p-8 flex-shrink-0">
      <img
        src="/images/icon.png"
        alt="Microsoft Logo"
        className="mb-6 w-28 sm:w-36"
      />
      <h1 className="text-2xl text-[#1b1b1b] font-semibold mb-6">
        Enter password
      </h1>
      <p className="text-sm text-gray-800 mb-2">for {email}</p>
      <input
        type="password"
        placeholder="Password"
        className="w-full border-b-2 border-[#1b1b1b] px-4 py-1 mb-6 text-[#1b1b1b] focus:outline-none focus:ring-0"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-[#0067b8] absolute w-[108px] h-[32px] right-8 bottom-8 flex items-center justify-center text-white py-2 transition"
        onClick={() => alert(`Signed in as ${email}`)}
        disabled={!password}
      >
        Sign in
      </button>
    </div>
  );
}
