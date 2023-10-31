import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "./(components)/Navbar";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticketing App",
  description: "Get yor tickets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="flex flex-col h-screen text-blue-100 ">
          <Navbar />
          <div className="grow bg-cyan-950 overflow-y-auto">
          {children}

          </div>
        </div>
      </body>
    </html>
  );
}
