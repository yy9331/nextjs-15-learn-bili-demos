import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from 'components/footer';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "我的博客",
  description: "使用 Next.js 15 创建的博客系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Nav/>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
