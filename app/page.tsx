import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Welcome to Pageturner.</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is an app for tracking pages read and books reviewed in the
          Summer Reading Challenge.
        </p>
        <div>
          <Link href="/dashboard">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
