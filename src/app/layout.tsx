import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peltroche Gym",
  description:
    "Peltroche Gym is a fitness club located in the heart of  Cusco,Peru. We offer a wide range of services and classes to help you achieve your fitness goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
