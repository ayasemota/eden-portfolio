import Link from "next/link";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./BannerTwo";
// import Socials from "./Socials";

export default function Banner() {
 return (
  <>
   <section
    className="min-h-[100dvh] flex items-center justify-center w-full bg-cover bg-no-repeat px-8 py-4"
    style={{ backgroundImage: "url('/perspective_grid.png')" }}
   >
    <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 animate-gradientMove"></div>

    <div className="w-full max-w-[1200px] flex gap-16">
     <div className="hidden lg:grid gap-4">
      {/* <Socials /> */}
     </div>
     <div className="grid gap-16">
      <div className="grid gap-5 leading-none">
       <h2 className="text-[24px] md:text-[50px]">Eden Creates</h2>
       <h1 className="text-[60px] md:text-[150px]">Creative Portfolio</h1>
      </div>
      <div className="flex flex-wrap gap-5">
       <Link href="/"><ButtonOne /></Link>
       <Link href="/"><ButtonTwo /></Link>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}