import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
 const [isLoading, setIsLoading] = useState(true);
 const [isVisible, setIsVisible] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => {
   setIsLoading(false);
  }, 5000);

  return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  if (!isLoading) {
   const fadeOutTimer = setTimeout(() => {
    setIsVisible(false);
   }, 500);

   return () => clearTimeout(fadeOutTimer);
  }
 }, [isLoading]);

 if (!isVisible) return null;

 return (
  <div className={`fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-500 ${isLoading ? "opacity-100 z-[9999]" : "opacity-0 z-0"}`}>
   <div className="animate-spin">
    <Image src="logo.svg" alt="logo" height={50} width={50} priority />
   </div>
  </div>
 );
};

export default Preloader;