import ButtonOne from "@/components/ButtonOne";
import ButtonTwo from "@/components/ButtonTwo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Cursor from "@/components/Cursor";

export default function About() {
 return (
  <main className="min-h-[100vh] flex flex-col justify-between overflow-hidden"
   style={{ backgroundImage: "url('/perspective_grid.png')" }}
  >
   <Navbar />

   <section className="relative font-neue grid justify-center items-center">
    <div className="w-[1200px] z-10 py-8 max-w-[90vw] justify-center items-center">
     <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-14 lg:gap-4">
      <div className="relative">
       <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] border-solid border-[10px] border-[#DCC0F1] max-w-[90vw] max-h-[100%] rounded-full overflow-hidden">
        <div className="filter grayscale">
         <Image
          src="/confidence_18th_birthday_2.jpg"
          alt="Eden Creates"
          width={500}
          height={500}
          priority
         />
        </div>
       </div>
       <p className="bg-white rounded-full px-5 py-2 absolute top-[70%] -left-4">Eden Creates</p>
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
    <div className="absolute top-[50%] md:left-96 z-0">
     <Image
      src="/gradient.png"
      alt="Gradient Image"
      height={770}
      width={770}
      className="z-0 filter blur-[250px] animate-slowSpin"
     />
    </div>
   </section>

   <div className="z-10">
    <Footer />
   </div>
  </main>
 );
}