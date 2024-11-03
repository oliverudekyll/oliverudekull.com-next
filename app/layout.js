import localFont from "next/font/local";
import "@styles/globals.css";

import Watermark from "@components/Watermark.js";

const helveticaBlack = localFont({
  src: "../public/assets/fonts/HelveticaNeueLTProBlk.woff2",
  variable: "--helvetica-black",
});

const helveticaExtended = localFont({
  src: "../public/assets/fonts/HelveticaNeueLTProLtEx.woff2",
  variable: "--helvetica-ext",
});

const helveticaBold = localFont({
  src: "../public/assets/fonts/HelveticaNeueLTProBd.woff2",
  variable: "--helvetica-bold",
});

export const metadata = {
  title: "Oliver Udeküll",
  description:
    "Oliver Udeküll is a graphic designer and web developer based in Tallinn, Estonia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="../public/assets/fonts/HelveticaNeueLTProBlk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/assets/fonts/HelveticaNeueLTProLtEx.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="../public/assets/fonts/HelveticaNeueLTProBd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="images/texture.jpg" as="image"></link>
        <link
          rel="preload"
          href="images/watermark-2-singleUnit-97.svg"
          as="image"
        ></link>
      </head>
      <body
        className={`${helveticaBlack?.variable || ""} ${
          helveticaExtended?.variable || ""
        }  ${helveticaBold?.variable || ""}`}
      >
        <Watermark
          docX={docX}
          docY={docY}
          mouseX={mouseX / 3}
          mouseY={mouseY / 3}
          transition={transition}
        />
        {children}
      </body>
    </html>
  );
}
