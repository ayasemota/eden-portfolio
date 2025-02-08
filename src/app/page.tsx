"use client";
import Cursor from "@/components/Cursor";
// import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ImageBox from "@/components/ImageBox";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Thoughts from "@/components/Thoughts";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "/", src: "socials/linkedin.svg", alt: "LinkedIn" },
  { href: "/", src: "socials/instagram.svg", alt: "Instagram" },
  { href: "/", src: "socials/behance.svg", alt: "Behance" },
  { href: "/", src: "socials/unk_social.svg", alt: "Unknown Social Media" },
  { href: "/", src: "socials/x.svg", alt: "X" },
];

const productList = [
  { href: "/", src: "/product/product_1.jpg", alt: "Confidence at Sui on campus blockchain conference", text: "Confidence at Sui on campus blockchain conference" },
  { href: "/", src: "/product/product_2.jpg", alt: "Confidence training over 300 people in product design", text: "Confidence training over 300 people in product design" },
  { href: "/", src: "/product/product_3.jpg", alt: "Confidence at Devfest 2024", text: "Confidence at Devfest 2024" },
  { href: "/", src: "/product/product_4.jpg", alt: "Confidence hosting eden creative community product design class", text: "Confidence hosting eden creative community product design class" },
  { href: "/", src: "/product/product_5.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
  { href: "/", src: "/product/product_6.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid max-w-full justify-center overflow-x-hidden">
        {/* <Banner /> */}

        <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 max-w-[1200px] px-10 py-8">
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
            <p className="font-tight pt-4">I am Confidence Nkereuwem, a passionate UX designer committed to fostering growth and knowledge. I collaborate with a talented team of designers and developers to create usable and impactful digital products. With a strong focus on user-centric design, I aim to bridge the gap between innovation and usability, delivering solutions that enhance user experiences and drive results.</p>
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

        <section className="relative flex flex-col gap-10 px-10 py-8">
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
          <h1>Something is here</h1>
        </section>

        <section className="flex flex-wrap md:flex-nowrap gap-10 max-w-[1400px] px-10 py-12">
          <div className="flex justify-center gap-10 flex-wrap">
            {productList.map((props) => (
              <Product
                key={undefined}
                src={props.src}
                text={props.text}
              />
            ))}
          </div>
        </section>

        <Thoughts
          text={`"Your ideas, brought to life—creating digital experiences that inspire and empower. Designing your ideas into seamless, user-centered digital experiences that inspire action and trust."`}
        />

        <section className="relative flex flex-col gap-10 grid-cols-2 px-10 py-8">
          <div>
            <h1 className="text-xl">Client Review</h1>
            <p className="text-md max-w-[610px]">Our works are a blend of innovative thinking and practical solutions, ensuring they are both unique and effective.</p>
          </div>
          <div className="py-16 font-tight text-brown flex justify-center">
            <article className="p-8 bg-white shadow-one grid gap-10 w-[400px] max-w-full rounded-[40px]">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <Image
                    src="/teddy.png"
                    alt="Teddy Eragbai"
                    height={52}
                    width={52}
                    className="rounded-full"
                  />
                  <p className="text-md">Teddy Eragbai</p>
                </div>
                <Link href="/">
                  <Image
                    src="/socials/linkedin.svg"
                    alt="Teddy Eragbai"
                    height={28}
                    width={28}
                  />
                </Link>
              </div>
              <div>
                <p className="text-md">Confidence is a great product designer. Working with him on different projects has been totally worth it. I recommend him anytime.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="max-w-[100vw] p-6 grid justify-center">
          <div className="flex justify-center gap-[100px] w-fit bg-one px-8 md:px-20 py-[100px] my-[100px] rounded-[30px]">
            <div className="grid gap-6 text-white">
              <p className="text-md">Stay up to date</p>
              <h2 className="text-[50px]">Eden Newsletter</h2>
              <div className="bg-white inline-flex flex-wrap lg:flex-nowrap lg:no-wrap p-[10px] rounded-lg lg:rounded-full">
                <input type="email" placeholder="Enter your email" className="w-[450px] max-w-[50vw] p-4 focus:outline-none focus:text-black focus:text-md placeholder:text-md rounded-full" />
                <button className="bg-blue px-10 py-4 text-md rounded-full">Subscribe</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/rb_18.png"
                alt="Envelope"
                height={227}
                width={213}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}