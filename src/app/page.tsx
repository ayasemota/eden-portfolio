"use client";
import ButtonOne from "@/components/ButtonOne";
import ButtonTwo from "@/components/ButtonTwo";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
// import ImageBox from "@/components/ImageBox";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Pricing from "@/components/Pricing";
import Card from "@/components/Card";
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
  { href: "/", src: "/confidence_at_sui.jpg", alt: "Confidence at Sui on campus blockchain conference", text: "Confidence at Sui on campus blockchain conference" },
  { href: "/", src: "/confidence_300.jpg", alt: "Confidence training over 300 people in product design", text: "Confidence training over 300 people in product design" },
  { href: "/", src: "/confidence_at_devfest.jpg", alt: "Confidence at Devfest 2024", text: "Confidence at Devfest 2024" },
  { href: "/", src: "/confidence_hosting_eden.jpg", alt: "Confidence hosting eden creative community product design class", text: "Confidence hosting eden creative community product design class" },
  { href: "/", src: "/confidence_18th_birthday.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
  { href: "/", src: "/confidence_18th_birthday_2.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
];

export default function Home() {
  return (
    <>
      <Preloader />

      <main>

        <Navbar />

        <section
          className="relative h-[92dvh] min-h-[92dvh] overflow-clip flex items-center justify-center bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/perspective_grid.png')" }}
        >
          <div className="absolute w-full max-w-[1200px] flex gap-16 px-8 py-4">
            <div className="hidden lg:flex flex-col gap-12">
              {socialLinks.map((props, index) => (
                <Link href={props.href} key={index}>
                  <Image src={props.src} alt={props.alt} height={45} width={45} />
                </Link>
              ))}
            </div>
            <div className="grid gap-10">
              <div className="relative grid gap-5 leading-none">
                <h2 className="text-[24px] md:text-[50px]">Eden Creates</h2>
                <h1 className="text-[60px] md:text-[150px]">Creative Portfolio</h1>
              </div>
              <div className="flex flex-wrap gap-6 z-10">
                <Link href="/">
                  <ButtonOne />
                </Link>
                <Link href="/">
                  <ButtonTwo />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-[20%] md:top-[40%] left-[65%]">
            <div className="rounded-full h-[90px] w-[90px] overflow-hidden grid justify-center items-center">
              <Image
                src="/product_3.jpg"
                alt="Eden"
                height={115}
                width={115}
              />
            </div>
            <div className="hidden md:flex relative -top-[170px] left-16">
              <Cursor
                text="Eden Creates"
              />
            </div>
            {/* <div className="hidden md:grid w-[50%] overflow-hidden">
              <Review />
            </div> */}
          </div>
          <div className="absolute top-[50%] md:left-96 z-0">
            <Image
              src="/gradient.png"
              alt="Gradient Image"
              height={770}
              width={770}
              className="z-0 filter blur-[250px]"
            />
          </div>
        </section>

        <section className="grid justify-center items-center overflow-hidden">
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
              <Cursor
                text="Confidence Nkereuwem"
              />
              <p className="pt-4">I am Confidence Nkereuwem, a passionate UX designer committed to fostering growth and knowledge. I collaborate with a talented team of designers and developers to create usable and impactful digital products. With a strong focus on user-centric design, I aim to bridge the gap between innovation and usability, delivering solutions that enhance user experiences and drive results.</p>
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

        <section className="grid justify-center items-center">
          <div className="w-[1200px] max-w-[100vw] flex flex-wrap justify-center gap-10 px-10 py-12">
            {productList.map((props, index) => (
              <Card
                key={index}
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

      </main>
    </>
  );
}