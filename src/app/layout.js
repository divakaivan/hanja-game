import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "한자 게임",
  description: "한자 복습과 사전",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
