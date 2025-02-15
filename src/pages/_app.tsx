import type { AppProps } from "next/app";
import Head from "next/head";
import "../app/globals.css";
import Preloader from "@/components/Preloader";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <>
   <Head>
    <title>Eden Portfolio</title>
    <meta name="description" content="Created With Love - Design by Eden" />
   </Head>
   {/* <Preloader /> */}
   <Component {...pageProps} />
  </>
 );
}