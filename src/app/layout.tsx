/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J.City │ Hunian Mewah dengan Fasilitas Lengkap di Kota Medan",
  description:
    "Temukan hunian impian di J.City Medan—lokasi premium, dekat tol & fasilitas umum, cocok untuk keluarga dan investasi jangka panjang.",
  keywords: [
    "perumahan Medan",
    "rumah dijual Medan",
    "perumahan JCity",
    "hunian strategis",
    "investasi properti",
    "perumahan mewah Medan",
  ],
  alternates: {
    canonical: "https://jcity.co.id/",
  },
  openGraph: {
    title: "J.City │ Hunian Mewah di Medan",
    description:
      "Temukan hunian terbaik di kota Medan. J.City menawarkan rumah modern dengan fasilitas lengkap dan lokasi premium.",
    url: "https://jcity.co.id/",
    siteName: "J.City Residence",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "J.City │ Hunian Mewah di Medan",
    description:
      "Rumah dengan lokasi strategis, fasilitas mumpuni, dan nilai investasi tinggi. J.City adalah pilihan terbaik Anda.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Facebook Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1266021014699952');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent');
          `}
        </Script>

        {/* NoScript for fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1266021014699952&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${montserratFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
