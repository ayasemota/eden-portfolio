import Image from "next/image";
import { useState } from "react";

export default function ImageBox() {
 const [scale, setScale] = useState(1);
 const [position, setPosition] = useState({ x: 0, y: 0 });
 const [isDragging, setIsDragging] = useState(false);
 const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });

 const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  e.preventDefault();
  e.stopPropagation();

  const rect = e.currentTarget.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const newScale = e.deltaY < 0 ? scale * 1.1 : scale * 0.9;
  const clampedScale = Math.max(0.5, Math.min(5, newScale));

  const scaleFactor = clampedScale / scale;
  setPosition({
   x: mouseX - (mouseX - position.x) * scaleFactor,
   y: mouseY - (mouseY - position.y) * scaleFactor,
  });

  setScale(clampedScale);
 };

 const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  e.preventDefault();
  setIsDragging(true);
  setStartDragPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
 };

 const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (isDragging) {
   e.preventDefault();
   const newX = e.clientX - startDragPosition.x;
   const newY = e.clientY - startDragPosition.y;

   const maxX = (scale - 1) * (1200 / 2);
   const maxY = (scale - 1) * (700 / 2);

   setPosition({
    x: Math.max(-maxX, Math.min(maxX, newX)),
    y: Math.max(-maxY, Math.min(maxY, newY)),
   });
  }
 };

 const handleMouseUp = () => {
  setIsDragging(false);
 };

 const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  const touch = e.touches[0];
  setIsDragging(true);
  setStartDragPosition({ x: touch.clientX - position.x, y: touch.clientY - position.y });
 };

 const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  if (isDragging) {
   const touch = e.touches[0];
   setPosition({
    x: touch.clientX - startDragPosition.x,
    y: touch.clientY - startDragPosition.y,
   });
  }
 };

 const handleTouchEnd = () => {
  setIsDragging(false);
 };

 const handleZoomIn = () => {
  setScale((prev) => Math.min(5, prev * 1.1));
 };

 const handleZoomOut = () => {
  setScale((prev) => Math.max(0.5, prev * 0.9));
 };

 return (
  <div
   className="relative overflow-hidden w-full h-[700px] border bg-white bg-opacity-70 backdrop-blur-md border-gray-300 user-select-none z-10"
   onWheel={handleWheel}
   onMouseDown={handleMouseDown}
   onMouseMove={handleMouseMove}
   onMouseUp={handleMouseUp}
   onMouseLeave={handleMouseUp}
   onTouchStart={handleTouchStart}
   onTouchMove={handleTouchMove}
   onTouchEnd={handleTouchEnd}
   style={{ cursor: isDragging ? "grabbing" : "grab" }}
  >
   <div
    className="absolute inset-0"
    style={{
     transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
     transition: isDragging ? "none" : "transform 0.2s ease",
    }}
   >
    <Image
     src="/project_image.jpg"
     alt="Project Image"
     height={700}
     width={1200}
     className="w-full h-full object-cover"
    />
   </div>
   <div className="absolute bottom-4 right-4 flex space-x-2">
    <button
     onClick={handleZoomIn}
     aria-label="Zoom in"
     className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
    >
     <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
     </svg>
    </button>
    <button
     onClick={handleZoomOut}
     aria-label="Zoom out"
     className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
    >
     <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={2}
       d="M20 12H4"
      />
     </svg>
    </button>
   </div>
  </div>
 );
}