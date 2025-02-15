interface ButtonProps {
 text: string;
}

export default function ButtonOne(props: ButtonProps) {
 return (
  <button className="h-[55px] border-2 border-black border-solid px-6 rounded-full">{props.text}</button>
 );
}