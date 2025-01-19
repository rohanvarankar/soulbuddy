import { Roboto } from "next/font/google";
import "./globals.css"; // Import global styles (directly from src/app/globals.css)
import Header from "./components/header"; // Import Header component
import Footer from "./components/footer"; // Import Footer component

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
  variable: "--font-roboto",
});

export const metadata = {
  title: "SoulBuddy - AI-Powered Spiritual Guide",
  description: "AI-driven spiritual guidance with personalized astrology and numerology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-black text-white`}>
        <Header />  {/* Header rendered on all pages */}
        <main>{children}</main>  {/* Main content */}
        <Footer />  {/* Footer rendered on all pages */}
      </body>
    </html>
  );
}
