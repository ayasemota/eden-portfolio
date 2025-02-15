import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import gallery from "../../../data/gallery";

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
       {gallery.map((props, index) => (
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