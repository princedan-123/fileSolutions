import "@/app/globals.css";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import rootLayerIcon from "@/app/icons/file_solutions_logo.png";
import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${interFont.className}`}>
        <header className="shadow-[0_4px_4px_rgba(0,0,0,0.1)] w-full py-6 px-3">
          <nav className="w-full">
            <Link href="/">
              <Image
                src={rootLayerIcon}
                alt="Layout page icon"
                width={800}
                height={240}
                className="w-72"
              />
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
