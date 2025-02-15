import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

const projects = [
 { href: "/", src: "/confidence_at_sui.jpg", alt: "Confidence at Sui on campus blockchain conference", text: "Confidence at Sui on campus blockchain conference" },
 { href: "/", src: "/confidence_300.jpg", alt: "Confidence training over 300 people in product design", text: "Confidence training over 300 people in product design" },
 { href: "/", src: "/confidence_at_devfest.jpg", alt: "Confidence at Devfest 2024", text: "Confidence at Devfest 2024" },
 { href: "/", src: "/confidence_hosting_eden.jpg", alt: "Confidence hosting eden creative community product design class", text: "Confidence hosting eden creative community product design class" },
 { href: "/", src: "/confidence_18th_birthday.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
 { href: "/", src: "/confidence_18th_birthday_2.jpg", alt: "Confidence 18th birthday", text: "Confidence 18th birthday" },
];

export default function Gallery() {
 return (
  <main
   className="font-neue"
   style={{ backgroundImage: "url('/perspective_grid.png')" }}
  >
   <Navbar />

   <section className="relative font-neue grid justify-center items-center py-6">
    <div className="w-full py-8 justify-self items-center">
     <div
      className="w-full grid bg-black h-[700px] rounded-xl"
      style={{ backgroundImage: "url('confidence_at_sui.jpg')" }}>

     </div>
     <div className="mt-[140px] grid justify-center items-center gap-6 px-6">
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

   <div className="z-10 grid items-center">
    <Footer />
   </div>
  </main>
 );
}