import React from "react";

interface ThoughtsProps {
 text: string;
}

export default function Thoughts(props: ThoughtsProps) {
 return (
  <div className="grid justify-center items-center">
   <div className="grid gap-6 w-[1000px] max-w-[100vw] px-6 my-6">
    <div className="flex items-center justify-between w-full">
     <p className="text-md">Eden thoughts</p>
     <div className="h-[1px] w-[300px] max-w-[20%] hidden md:inline bg-black"></div>
    </div>
    <h2 className="text-lg lg:text-xl">{props.text}</h2>
    <div className="h-[1px] w-[200px] max-w-[20%] bg-black"></div>
   </div>
  </div>
 );
}