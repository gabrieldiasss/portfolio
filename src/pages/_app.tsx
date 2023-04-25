import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import 'atropos/css'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);

  return <Component {...pageProps} />;
}
