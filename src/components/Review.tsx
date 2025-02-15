"use client";

import Image from "next/image";
import Link from "next/link";
import reviews from "../../data/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

type ArticleProps = {
 img: {
  src: string;
  alt: string;
 };
 name: string;
 linkedin?: string;
 message: string;
};

function Article(props: ArticleProps) {
 return (
  <article className="rounded-[40px]">
   <div className="md:px-[5%] grid gap-10">
    <div className="flex items-center justify-between">
     <div className="flex gap-4 items-center">
      <Image src={props.img.src} alt={props.img.alt} height={52} width={52} className="rounded-full" />
      <p className="text-md">{props.name}</p>
     </div>
     {props.linkedin ? <Link href={props.linkedin} className="hidden sm:block" title="View Linkedin Profile">
      <Image src="/socials/linkedin.svg" alt="LinkedIn logo" height={28} width={28} />
     </Link> : null}
    </div>
    <div>
     <p className="text-md">{props.message}</p>
    </div>
   </div>
  </article>
 );
}

export default function Review() {
 return (
  <>
   <div className="font-tight text-brown grid items-center justify-center z-10">
    <div className="py-6">
     <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
       1000: {
        slidesPerView: 2,
       },
      }}
      className="w-[90vw] max-w-[1200px] cursor-grab"
      title="Grab to move"
     >
      {reviews.map((props, index) => (
       <SwiperSlide key={index} className="flex justify-center items-center">
        <Article img={props.img} name={props.name} message={props.message} linkedin={props.linkedin} />
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
   </div>

   {/* <div className="flex justify-center gap-4 mt-4">
    <button className="prev-btn px-4 py-2 bg-gray-200 rounded">←</button>
    <button className="next-btn px-4 py-2 bg-gray-200 rounded">→</button>
   </div> */}
  </>
 );
}