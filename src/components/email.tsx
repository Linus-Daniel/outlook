import Image from "next/image";

interface Params {
    email:string;
    setEmail:Function;
    onNext:any
}

export default function EmailStep({ email, setEmail, onNext }:Params) {
  return (
    <div className="bg-white md:shadow-lg w-full max-w-md mx-4 sm:mx-auto rounded-md px-2 py-4 sm:p-8 flex-shrink-0">
      <img
        src="/images/icon.png"
        alt="Microsoft Logo"
        className="mb-6 w-28 sm:w-36"
      />
      <h1 className="text-2xl text-[#1b1b1b] font-semibold mb-6">Sign in</h1>
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
      <button
        className="bg-[#0067b8] absolute w-[108px] h-[32px] right-8 bottom-8 flex items-center justify-center text-white py-2 transition"
        onClick={onNext}
        disabled={!email}
      >
        Next
      </button>
    </div>
  );
}
