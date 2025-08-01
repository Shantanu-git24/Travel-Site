import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// Add this to app/layout.js or globals.css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Poppins } from 'next/font/google';
import PopupWrapper from './components/PopupWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Travel Website",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montez&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>

      <body>
        <PopupWrapper>
          {children}
        </PopupWrapper>
      </body>
    </html>

  );
}

