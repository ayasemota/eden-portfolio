"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ImageBox from "@/components/ImageBox";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Review from "@/components/Review";
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

type pricingProps = {
  product: string,
  description: string,
  amount: string,
  item: {
    one: string,
    two: string,
    three: string,
    four: string,
    five?: string,
  },
};

function Pricing(props: pricingProps) {
  return (
    <article className="shadow-one font-tight text-md hover:border-blue hover:border-2 hover:border-solid w-fit h-fit max-w-[90vw] mx-6 rounded-3xl">
      <div className="grid gap-12 p-[30px] w-[380px] max-w-[70vw]">
        <div className="grid gap-2">
          <h2 className="text-blue text-[30px] font-semibold">{props.product}</h2>
          <p>{props.description}</p>
        </div>
        <div className="grid gap-1">
          <p>Starting at</p>
          <h1 className="text-[70px] font-semibold">${props.amount}</h1>
          <div className="grid gap-1">
            <li className="text-[15px] font-[200] max-w-[90%]">{props.item.one}</li>
            <li className="text-[15px] font-[200] max-w-[90%]">{props.item.two}</li>
            <li className="text-[15px] font-[200] max-w-[90%]">{props.item.three}</li>
            <li className="text-[15px] font-[200] max-w-[90%]">{props.item.four}</li>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <section className="grid justify-center items-center">
        <div className="w-[1200px] max-w-[90vw] px-10 py-8 grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div>
            <Image
              src="/eden.png"
              alt="I am Eden"
              width={533}
              height={527}
            />
          </div>
          <div className="flex lg:flex-wrap justify-center flex-col gap-10">
            <div className="relative">
              <p className="text-white inline py-3 px-4 bg-blue rounded-full">Confidence Nkereuwem</p>
              <div className="absolute top-8 -left-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                  <path d="M5.50284 18.7666C5.50284 19.022 5.57395 19.2723 5.70819 19.4895C5.84244 19.7067 6.03453 19.8822 6.26292 19.9964C6.49132 20.1106 6.747 20.159 7.00132 20.136C7.25564 20.1131 7.49856 20.0198 7.70284 19.8666L18.7001 11.6139C19.7561 10.8219 19.1951 9.13885 17.8751 9.13885H12.448C12.2373 9.13898 12.0294 9.09069 11.8403 8.99771C11.6513 8.90473 11.4861 8.76955 11.3576 8.6026L7.96684 4.18198C7.16797 3.13973 5.50146 3.70485 5.50146 5.01935L5.50284 18.7666Z" fill="#0000FE" />
                </svg>
              </div>
            </div>
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
        </div>
      </section>

      <Thoughts
        text={`"Design is problem solving" Solving digital problems with usability focused interfaces`}
      />

      <section className="grid justify-center items-center relative">
        <div className="w-[1300px] max-w-[90vw] grid gap-10 px-4 py-8">
          <div>
            <h1 className="text-xl">Projects</h1>
          </div>
          <div className="py-4">
            <ImageBox />
            <div className="absolute hidden lg:block -top-8 left-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 552 597" fill="none">
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
        </div>
      </section>

      <section className="grid justify-center items-center">
        <div className="w-[1400px] max-w-[100vw] flex flex-wrap justify-center gap-10 px-10 py-12">
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

      <section className="grid justify-center items-center">
        <div className="grid gap-10 py-8 justify-center">
          <div className="grid justify-center gap-4 px-6">
            <h1 className="text-xl text-center">Client Review</h1>
            <p className="text-md w-fit md:w-[600px] text-center">Our works are a blend of innovative thinking and practical solutions, ensuring they are both unique and effective.</p>
          </div>
          <div>
            <Review />
          </div>
        </div>
      </section>

      <section className="grid justify-center items-center">
        <div className="grid gap-10 py-8 justify-center">
          <div className="grid justify-center gap-4 px-6">
            <h1 className="text-xl text-center">Pricing Options</h1>
            <p className="text-md w-fit md:w-[600px] text-center">Get your project done with affordable prices that you can trust.</p>
          </div>
          <div className="flex flex-wrap justify-center items-start md:items-center gap-10">
            <Pricing
              product="Design Only"
              description="For clients who already have a development team"
              amount="300"
              item={
                {
                  one: "Custom homepage design",
                  two: "3 additional pages",
                  three: "Responsive wireframes",
                  four: "Figma prototype"
                }
              }
            />
            <Pricing
              product="Design + Development Starter"
              description="For small projects needing end-to-end execution."
              amount="800"
              item={
                {
                  one: "Custom homepage design",
                  two: "3 additional pages",
                  three: "Responsive Development",
                  four: "Basic SEO optimization"
                }
              }
            />
            <Pricing
              product="Complete Solution"
              description="A premium service for full-scale projects."
              amount="1800"
              item={
                {
                  one: "Workshop with Employees",
                  two: "Responsive development",
                  three: "Advanced animations and interactivity",
                  four: "Comprehensive SEO integration",
                  five: "3 months of post-launch support"
                }
              }
            />
          </div>
        </div>
      </section>

      <section className="grid justify-center items-center">
        <div className="flex flex-wrap justify-center gap-[100px] w-fit bg-one px-6 my-10 py-12 max-w-[90vw] rounded-[30px]">
          <div className="grid gap-6 text-white">
            <p className="text-md">Stay up to date</p>
            <h2 className="text-[50px]">Eden Newsletter</h2>
            <div className="bg-white inline-flex flex-wrap lg:flex-nowrap lg:no-wrap p-[10px] rounded-lg lg:rounded-full gap-4">
              <input type="email" placeholder="Enter your email" className="w-[450px] max-w-[50vw] p-4 focus:outline-none focus:text-black focus:text-md placeholder:text-md rounded-full" />
              <button className="bg-blue px-10 py-4 text-md rounded-lg lg:rounded-full">Subscribe</button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/rb_18.png"
              alt="Envelope"
              height={227}
              width={213}
              className="mix-blend-luminosity"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}