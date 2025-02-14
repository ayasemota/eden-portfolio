import ButtonOne from "@/components/ButtonOne";
import ButtonTwo from "@/components/ButtonTwo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Cursor from "@/components/Cursor";

export default function About() {
 return (
  <main className="min-h-[100vh] flex flex-col justify-between" 
  style={{ backgroundImage: "url('/perspective_grid.png')" }}
  >
   <Navbar />

   <section className="font-neue grid justify-center items-center">
    <div className="w-[1200px] py-8 max-w-[90vw] justify-center items-center">
     <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-14 lg:gap-4">
      <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] border-solid border-[10px] border-[#DCC0F1] max-w-[90vw] max-h-[100%] overflow-hidden rounded-full">
       <Image
        src="/product_6.jpg"
        alt="Eden Creates"
        width={500}
        height={500}
        // className=""
        priority
       />
      </div>
      <div className="grid gap-6">
       <Cursor
        text="Confidence Nkereuwem"
       />
       <div className="mt-6">
        <p>I am Confidence Nkereuwem, a passionate UX designer committed to fostering growth and knowledge. I collaborate with a talented team of designers and developers to create usable and impactful digital products. With a strong focus on user-centric design, I aim to bridge the gap between innovation and usability, delivering solutions that enhance user experiences and drive results.</p>
       </div>
       <div className="flex flex-wrap gap-6">
        <Link href="/">
         <ButtonOne />
        </Link>
        <Link href="/">
         <ButtonTwo />
        </Link>
       </div>
      </div>
     </div>
    </div>
   </section>

   <Footer />
  </main>
 );
}