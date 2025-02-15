import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [time, setTime] = useState<Date | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-center sticky top-0 w-full bg-white bg-opacity-60 backdrop-blur-xl z-[9998]">
        <div className="flex justify-between w-full max-w-[1200px] px-8 py-6">
          <Link href="/">
            <Image src="logo.svg" alt="logo" height={30} width={30} priority />
          </Link>
          <div className="hidden cursor-pointer md:flex" title="Hang tight, we're trying to find your location">
            {time ? (
              <>
                <span>{formatTime(time.getHours())}</span>
                <span>:</span>
                <span>{formatTime(time.getMinutes())}</span>
                <span>:</span>
                <span>{formatTime(time.getSeconds())}</span>
              </>
            ) : (
              <span>Loading...</span>
            )}
            <span>{"⚡Location Not Found"}</span>
          </div>
          <button onClick={toggleNav}>
            {isNavOpen ? (
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M7.08936 3.5L19.0894 15.5M4 18.4106L17.5 4.91064" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M10 6.41064H20M4 12.4106H20H7M4 18.4106H14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
      
      <div
        className={`fixed inset-0 bg-white bg-opacity-95 backdrop-blur-[50px] z-[9998] transition-opacity duration-300 ${isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <div className="flex flex-col items-start gap-6 px-6">
              <Link
                href="/"
                className="text-[40px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Home
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                href="/About"
                className="text-[40px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                About me
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                href="/Projects"
                className="text-[40px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Projects
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                href="/Gallery"
                className="text-[40px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Eden Gallery
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
              </Link>
              <Link
                href="/"
                className="text-[40px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Book a Call
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}