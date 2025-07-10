import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <Head>
        <meta name="google-site-verification" content="GTyUSH40uJTk6SwF3mkDTrQU7ekuxHPe9EIvEDrHuWk" />
      </Head>
      <body>
        <header className="flex justify-between items-center px-8 py-4 bg-white/30 backdrop-blur-md shadow">
          <div className="text-[15px] font-bold text-gray-800">
            <Link href="/">MOGCIA</Link>
          </div>
          <nav className="space-x-6">
            <Link href="/contact" className="hover:text-gray-600">お問い合わせ</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
