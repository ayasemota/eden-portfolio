import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
 const [time, setTime] = useState(new Date());

 useEffect(() => {
  const interval = setInterval(() => {
   setTime(new Date());
  }, 1000);

  return () => clearInterval(interval);
 }, []);

 const formatTime = (value: number) => {
  return value < 10 ? `0${value}` : value.toString();
 };

 const hours = formatTime(time.getHours());
 const minutes = formatTime(time.getMinutes());
 const seconds = formatTime(time.getSeconds());

 return (
  <nav className="flex items-center justify-center sticky top-0 w-full bg-white bg-opacity-40 backdrop-blur-md z-[9999]">
   <div className="flex justify-between w-full max-w-[1200px] px-8 py-6">
    <Link href="/">
     <Image
      src="logo.svg"
      alt="logo"
      height={30}
      width={30}
      priority
     />
    </Link>
    <div className="hidden md:flex">
     <span>{hours}</span>
     <span>:</span>
     <span>{minutes}</span>
     <span>:</span>
     <span>{seconds}</span>
     <span>⚡Lagos Nigeria</span>
    </div>
    <button>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M10 6.41064H20M4 12.4106H20H7M4 18.4106H14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
     </svg>
    </button>
   </div>
  </nav>
 );
}