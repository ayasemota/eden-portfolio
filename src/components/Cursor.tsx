type CursorProps = {
 text: string;
};

export default function Cursor(props: CursorProps) {
 return (
  <div className="relative">
   <p className="text-white inline py-3 px-4 bg-blue rounded-full">{props.text}</p>
   <div className="absolute top-8 -left-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
     <path d="M5.50284 18.7666C5.50284 19.022 5.57395 19.2723 5.70819 19.4895C5.84244 19.7067 6.03453 19.8822 6.26292 19.9964C6.49132 20.1106 6.747 20.159 7.00132 20.136C7.25564 20.1131 7.49856 20.0198 7.70284 19.8666L18.7001 11.6139C19.7561 10.8219 19.1951 9.13885 17.8751 9.13885H12.448C12.2373 9.13898 12.0294 9.09069 11.8403 8.99771C11.6513 8.90473 11.4861 8.76955 11.3576 8.6026L7.96684 4.18198C7.16797 3.13973 5.50146 3.70485 5.50146 5.01935L5.50284 18.7666Z" fill="#0000FE" />
    </svg>
   </div>
  </div>
 );
}