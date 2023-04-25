import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        <link rel="stylesheet" href="path/to/atropos.css" />

        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />


      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="bower_components/aos/dist/aos.js"></script>

      </body>
    </Html>
  );
}
