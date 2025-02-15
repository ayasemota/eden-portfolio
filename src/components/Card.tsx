interface Products {
 index?: undefined;
 src: string;
 text: string;
}

export default function Product(props: Products) {
 return (
  <div>
    <article
     key={props.index}
     className="hover:scale-[1.1] flex items-end justify-center w-[340px] h-[460px] rounded-xl bg-cover bg-black bg-opacity-90 bg-no-repeat px-8 py-4"
     style={{
      backgroundImage: `url('${props.src}')`
     }}
    >
     <p className="text-white text-lg font-semibold px-4 py-6 font-tight">{props.text}</p>
    </article>
  </div>
 )
}