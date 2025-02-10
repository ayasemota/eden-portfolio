import Link from "next/link";
import ButtonOne from "./ButtonOne";
import Image from "next/image";
import ButtonTwo from "./BannerTwo";
import Review from "./Review";

const socialLinks = [
 { href: "/", src: "socials/linkedin.svg", alt: "LinkedIn" },
 { href: "/", src: "socials/instagram.svg", alt: "Instagram" },
 { href: "/", src: "socials/behance.svg", alt: "Behance" },
 { href: "/", src: "socials/unk_social.svg", alt: "Unknown Social Media" },
 { href: "/", src: "socials/x.svg", alt: "X" },
];

export default function Banner() {
 return (
  <>
   <section
    className="h-[100dvh] flex items-center justify-center bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: "url('/perspective_grid.png')" }}
   >
    
    <div className="absolute z-10 w-full max-w-[1200px] flex gap-16 px-8 py-4">
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
      <div className="flex flex-wrap gap-5">
       <Link href="/">
        <ButtonOne />
       </Link>
       <Link href="/">
        <ButtonTwo />
       </Link>
      </div>
     </div>
    </div>
   </section>
   <div className="absolute top-[20%] md:top-[50%] left-[65%]">
    <div className="relative rounded-full h-[90px] w-[90px] overflow-hidden grid justify-center items-center">
     <Image
      src="/product/product_3.jpg"
      alt="Eden"
      height={115}
      width={115}
     />
    </div>
    <div className="hidden md:grid absolute -top-[90px] left-[90px]">
     <div className="relative">
      <p className="text-white block py-3 px-4 w-[225px] bg-blue rounded-full">Confidence Nkereuwem</p>
      <div className="absolute top-12 -left-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
        <path d="M5.50284 18.7666C5.50284 19.022 5.57395 19.2723 5.70819 19.4895C5.84244 19.7067 6.03453 19.8822 6.26292 19.9964C6.49132 20.1106 6.747 20.159 7.00132 20.136C7.25564 20.1131 7.49856 20.0198 7.70284 19.8666L18.7001 11.6139C19.7561 10.8219 19.1951 9.13885 17.8751 9.13885H12.448C12.2373 9.13898 12.0294 9.09069 11.8403 8.99771C11.6513 8.90473 11.4861 8.76955 11.3576 8.6026L7.96684 4.18198C7.16797 3.13973 5.50146 3.70485 5.50146 5.01935L5.50284 18.7666Z" fill="#0000FE" />
       </svg>
      </div>
     </div>
    </div>
    <div className="hidden md:grid">
     <Review />
    </div>
   </div>
  </>
 );
}