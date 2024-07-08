import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SocialLinks from "@/components/SocialLinks";
const inter = Inter({ subsets: ["latin"] });
import UserProvider from "../context/UserProvider";
import CartProvider from "../context/CartProvider";
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <UserProvider>
            <CartProvider>
              <ToastContainer />
              <Navbar />
              {children}
              {/* <SocialLinks /> */}
              <Footer />
            </CartProvider>
          </UserProvider>
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
