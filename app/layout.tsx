import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight : ["100" , "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Online Job Portal",
  description: "A platform for job seekers and employers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
        

      </body>
    </html>
  );
}
