import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tint",
  description: "Tint",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${inter.variable} antialiased font-inter`}>
        {children}
      </body>
    </html>
  );
}
