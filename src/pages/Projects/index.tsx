import Footer from "@/components/Footer";
import ImageBox from "@/components/ImageBox";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const projects = [
 { href: "/", src: "/myne_estate.jpg", alt: "Myne Estate", text: "Myne Estate" },
 { href: "/", src: "/enola_landing_page.jpg", alt: "Enola Landing Page", text: "Enola Landing Page" },
 { href: "/", src: "/confidence_hosting_eden.jpg", alt: "Confidence hosting eden creative community product design class", text: "Confidence hosting eden creative community product design class" },
 { href: "/", src: "/confidence_18th_birthday.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
 { href: "/", src: "/confidence_18th_birthday_2.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
];

export default function Project() {
 return (
  <main className="font-neue"
   style={{ backgroundImage: "url('/perspective_grid.png')" }}
  >
   <Navbar />

   <section className="relative font-neue grid justify-center items-center py-6">
    <div className="w-[1200px] z-10 py-8 max-w-[90vw] justify-center items-center">
     <div className="grid gap-6 max-w-[90vw]">
      <h1 className="text-xl">Projects</h1>
      <ImageBox />
      <div>
       <h1 className="text-xl">Havilah Academy</h1>
       <p className="w-[456px] max-w-[90vw]">Crafted a intuitive mobile application to aid learning at Havilah Academy</p>
      </div>
     </div>
     <div className="mt-[140px] grid gap-6">
      <h1 className="text-xl text-center">Other Projects</h1>
      <div className="w-[1200px] max-w-[90vw] flex flex-wrap justify-center gap-10 px-10">
       {projects.map((props, index) => (
        <Card
         key={index}
         src={props.src}
         text={props.text}
        />
       ))}
      </div>
     </div>

    </div>
   </section>

   <div className="z-10">
    <Footer />
   </div>
  </main>
 );
}