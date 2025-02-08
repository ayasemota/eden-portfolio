"use client";
import Cursor from "@/components/Cursor";
// import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ImageBox from "@/components/ImageBox";
import Navbar from "@/components/Navbar";
import Thoughts from "@/components/Thoughts";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "/", src: "/linkedin.svg", alt: "LinkedIn" },
  { href: "/", src: "/instagram.svg", alt: "Instagram" },
  { href: "/", src: "/behance.svg", alt: "Behance" },
  { href: "/", src: "/unk_social.svg", alt: "Unknown Social Media" },
  { href: "/", src: "/x.svg", alt: "X" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid max-w-full justify-center">
        {/* <Banner /> */}

        <section className="flex flex-wrap md:flex-nowrap gap-10 grid-cols-2 max-w-[1200px] px-10 py-8">
          <div>
            <Image
              src="/eden.png"
              alt="I am Eden"
              width={533}
              height={527}
            />
          </div>
          <div className="flex lg:flex-wrap justify-center flex-col gap-10">
            <Cursor />
            <p className="md:max-w-[40vw] font-tight pt-4">I am Confidence Nkereuwem, a passionate UX designer committed to fostering growth and knowledge. I collaborate with a talented team of designers and developers to create usable and impactful digital products. With a strong focus on user-centric design, I aim to bridge the gap between innovation and usability, delivering solutions that enhance user experiences and drive results.</p>
            <div className="hidden lg:flex gap-14">
              {socialLinks.map((props, index) => (
                <Link href={props.href} key={index}>
                  <Image
                    src={props.src}
                    alt={props.alt}
                    height={30}
                    width={30}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Thoughts
          text={`"Design is problem solving" Solving digital problems with usability focused interfaces`}
        />

        <section className="relative flex flex-col gap-10 grid-cols-2 max-w-[1200px] px-10 py-8">
          <div>
            <h1 className="text-xl">Projects</h1>
          </div>
          <div className="p-4 max-w-full">
            <ImageBox />
            <div className="absolute hidden lg:block -top-10 left-[60%] w-[200px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="552" height="597" viewBox="0 0 552 597" fill="none">
                <path d="M53.2653 56.7227C224.525 -3.18335 121.507 352.156 59.9924 531.795C52.8358 552.694 45.84 550.951 55.3509 531.013C136.992 359.863 359.692 78.6837 502 56.7227" stroke="url(#paint0_linear_13_400)" strokeWidth="100" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_13_400" x1="-126.57" y1="631" x2="537.85" y2="631" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0000FE" />
                    <stop offset="0.26623" stop-color="#E000FE" />
                    <stop offset="0.64623" stop-color="#00FEED" />
                    <stop offset="0.99123" stop-color="#FF9500" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* <h1>Something is here</h1> */}
        </section>

        <section>

        </section>

        <Thoughts
          text={`"Your ideas, brought to life—creating digital experiences that inspire and empower. Designing your ideas into seamless, user-centered digital experiences that inspire action and trust."`}
        />
        
      </main>
      <Footer />
    </>
  );
}