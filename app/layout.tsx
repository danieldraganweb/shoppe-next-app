import type { Metadata } from "next";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
// import styles from "./globals.module.scss";

export const metadata: Metadata = {
  title: "SHOPPE",
  description: "Online Shopping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
