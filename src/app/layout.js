import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Provider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link rel="stylesheet" href="/assets/css/plugins/bootstrap-grid.css" />

        <link
          rel="stylesheet"
          href="/assets/css/plugins/font-awesome.min.css"
        />

        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />

        <link rel="stylesheet" href="/assets/css/dark-mode.css" />

        <title>Protoja</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        {/* Fontfaces */}
        <Script src="/assets/js/plugins/jquery.min.js"></Script>
        <Script src="/assets/js/plugins/swup.min.js"></Script>
        <Script src="/assets/js/plugins/SwupBodyClassPlugin.min.js"></Script>
        <Script src="/assets/js/plugins/swiper.min.js"></Script>
        <Script src="/assets/js/plugins/gsap.min.js"></Script>
        <Script src="/assets/js/plugins/smooth-scroll.js"></Script>
        <Script src="/assets/js/plugins/ScrollTrigger.min.js"></Script>
        <Script src="/assets/js/plugins/parallax.js"></Script>
        <Script src="/assets/js/main.js"></Script>
      </body>
    </html>
  );
}
