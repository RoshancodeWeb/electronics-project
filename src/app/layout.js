import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import  MyContext  from "./Helper/Context";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Al-Warda Electronics",
  description: "AC Repairing Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>   
          <main>
            <MyContext>
              {children}
            </MyContext>
          </main>
      </body>
    </html>
  );
}
