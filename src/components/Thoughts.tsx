import React from "react";

interface ThoughtsProps {
 text: string;
}

export default function Thoughts({ text }: ThoughtsProps) {
 return (
  <div className="grid gap-6 w-[1000px] max-w-[80vw] justify-self-center items-center px-10 my-6">
   <div className="flex items-center justify-between w-full">
    <p className="text-md">Eden thoughts</p>
    <div className="h-[1px] w-[300px] max-w-[20%] hidden md:inline bg-black"></div>
   </div>
   <h2 className="text-lg lg:text-xl">{text}</h2>
   <div className="h-[1px] w-[200px] max-w-[20%] bg-black"></div>
  </div>
 );
}