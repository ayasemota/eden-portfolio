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
     className="hover:scale-[1.1] flex items-end justify-center w-[300px] max-w-[90vw] h-[500px] rounded-xl bg-cover bg-no-repeat px-8 py-4"
     style={{
      backgroundImage: `url('${props.src}')`
     }}
    >
     <p className="text-white text-lg font-semibold py-6 font-tight">{props.text}</p>
    </article>
  </div>
 )
}