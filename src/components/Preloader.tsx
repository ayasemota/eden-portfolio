import { useEffect, useState } from "react";

const Preloader = () => {
 const [isLoading, setIsLoading] = useState(true);
 const [isVisible, setIsVisible] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => {
   setIsLoading(false);
  }, 3000);

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
  <div
   className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500 ${isLoading ? "opacity-100" : "opacity-0"}`}
  >
   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
  </div>
 );
};

export default Preloader;