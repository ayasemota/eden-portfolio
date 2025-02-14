type pricingProps = {
 product: string,
 description: string,
 amount: string,
 item: {
  one: string,
  two: string,
  three: string,
  four: string,
  five?: string,
 },
};

export default function Pricing(props: pricingProps) {
 return (
  <article className="shadow-one font-tight text-md hover:border-blue hover:border-2 hover:border-solid w-fit h-fit max-w-[90vw] mx-6 rounded-3xl">
   <div className="grid gap-12 p-[30px] w-[380px] max-w-[70vw]">
    <div className="grid gap-2">
     <h2 className="text-blue text-[30px] font-semibold">{props.product}</h2>
     <p>{props.description}</p>
    </div>
    <div className="grid gap-1">
     <p>Starting at</p>
     <h1 className="text-[70px] font-semibold">${props.amount}</h1>
     <div className="grid gap-1">
      <li className="text-[15px] font-[200] max-w-[90%]">{props.item.one}</li>
      <li className="text-[15px] font-[200] max-w-[90%]">{props.item.two}</li>
      <li className="text-[15px] font-[200] max-w-[90%]">{props.item.three}</li>
      <li className="text-[15px] font-[200] max-w-[90%]">{props.item.four}</li>
     </div>
    </div>
   </div>
  </article>
 );
}