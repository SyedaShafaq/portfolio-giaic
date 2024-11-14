import type { Metadata } from "next";
import {Sora} from "next/font/google";

import "./globals.css";
import ResponsiveNav from "./navigation/responsive-nav";

 
 
 

const  font =  Sora({
    weight: ["100","200","300","400","500","600","700","800"],
    subsets: ["latin"],
});
 
export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "This is my personal portfolio while using NextJs,Tailwind CSS & TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
<ResponsiveNav/>
        {children}
         
      
      </body>
    </html>
  );
}
