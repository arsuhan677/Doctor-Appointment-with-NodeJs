// // app/layout.tsx
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/app/componenets/Header";
// import Footer from "@/app/componenets/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MediCare+ - Your Trusted Healthcare Partner",
//   description:
//     "Book appointments with the best doctors in your area. Quality healthcare at your convenience.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={`${inter.className} bg-white text-gray-900`}>
//         <Header />

//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }




// app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/componenets/Header";
import Footer from "@/app/componenets/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideHeaderFooter = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {!hideHeaderFooter && <Header />}
        <main className="min-h-screen">{children}</main>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
