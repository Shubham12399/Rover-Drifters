// import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
const BottomNav = React.lazy(() => import("@/components/BottomNav"));
const Navbar = React.lazy(() => import("@/components/Navbar"));
import React, { Suspense } from "react";
// import ReactQueryProvider from "@/components/ReactQueryProvider";
const ReactQueryProvider = React.lazy(() =>
  import("@/components/ReactQueryProvider")
);

export const metadata = {
  title: {
    default:"Rover Drifters - Explore World",
    template:"%s | Rover Drifters"
  },
  description: "The Next feeling of Tour & Travel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script strategy="afterInteractive" id="">
        {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3553114,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <body
      //  className={inter.className}
      suppressHydrationWarning={true}
      >
        <Suspense fallback="">
          <Navbar></Navbar>
        </Suspense>
        <Suspense fallback=""><ReactQueryProvider>{children}</ReactQueryProvider></Suspense>
        {/* <ReactQueryProvider> */}
          {/* {children} */}
        {/* </ReactQueryProvider> */}
        {/* <Suspense fallback="">
          <BottomNav></BottomNav>
        </Suspense> */}
       
      </body>
    </html>
  );
}
