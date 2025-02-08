import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Fetch time from WorldTimeAPI
  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        const data = await response.json();
        const datetime = new Date(data.utc_datetime);
        setTime(datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000); // Update time every second
    return () => clearInterval(interval);
  }, []);

  // Fetch location from OpenCage Geocoder
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            ""
          )}&key=OPENCAGE_API_KEY`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const city = data.results[0].components.city;
          const country = data.results[0].components.country;
          setLocation(`${city}, ${country}`);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-center sticky top-0 w-full bg-white bg-opacity-40 backdrop-blur-md z-[9999]">
        <div className="flex justify-between w-full max-w-[1200px] px-8 py-6">
          <Link href="/">
            <Image src="logo.svg" alt="logo" height={30} width={30} priority />
          </Link>
          <div className="hidden md:flex">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <span>⚡{location}</span>
          </div>
          <button onClick={toggleNav}>
            {isNavOpen ? (
              // X Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 6.41064H20M4 12.4106H20H7M4 18.4106H14"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg z-[9998] transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <div className="flex flex-col items-start gap-6">
              <Link
                href="/"
                className="text-[70px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Home
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/"
                className="text-[70px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                About me
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/"
                className="text-[70px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Projects
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/"
                className="text-[70px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Eden Gallery
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/"
                className="text-[70px] relative inline-block hover:text-gray-600 group"
                onClick={toggleNav}
              >
                Book a call
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}