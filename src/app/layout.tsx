// app/layout.tsx
import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

const SITE_URL = "https://mogcia.com";

export default function RootLayout({ children }: { children: ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社MOGCIA",
    url: SITE_URL,
    logo: `${SITE_URL}/ogp.jpg`, // 専用ロゴがあれば /logo.png に差し替え
    sameAs: [
      // 公式SNSがあればURLを追加
      // "https://www.instagram.com/xxxx"
    ]
  };

  return (
    <html lang="ja">
      <head>
        {/* 文字コード / 表示設定 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 検索での見出し/説明 */}
        <title>株式会社MOGCIA｜AI×SNS支援「Signal.」/ コーヒー卸 / Web制作</title>
        <meta
          name="description"
          content="株式会社MOGCIAはAI×SNS運用支援ツール「Signal.」を中心に、コーヒー豆の卸売やWebサイト制作を提供する事業会社です。まずはお気軽にお問い合わせください。"
        />
        <link rel="canonical" href={SITE_URL} />

        {/* Favicon / アイコン（/public直置き） */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

        {/* OGP / SNS共有 */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="株式会社MOGCIA" />
        <meta
          property="og:title"
          content="株式会社MOGCIA｜AI×SNS支援「Signal.」/ コーヒー卸 / Web制作"
        />
        <meta
          property="og:description"
          content="AIでSNS運用を効率化する「Signal.」、コーヒー卸、Web制作まで。MOGCIAが事業の成長を支援します。"
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="株式会社MOGCIA｜AI×SNS支援「Signal.」/ コーヒー卸 / Web制作" />
        <meta
          name="twitter:description"
          content="AIでSNS運用を効率化する「Signal.」、コーヒー卸、Web制作まで。MOGCIAが事業の成長を支援します。"
        />
        <meta name="twitter:image" content="/ogp.jpg" />

        {/* Search Console */}
        <meta name="google-site-verification" content="GTyUSH40uJTk6SwF3mkDTrQU7ekuxHPe9EIvEDrHuWk" />

  {/* 既存スクリプトやmetaの下あたりに追加 */}
  <meta name="google-site-verification" content="d5eyj1_gHTU2alviVoq7IxGvZKdsx3c14ik6FJZPsBo" />


        {/* 構造化データ（Organization + OfferCatalog） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/* Cookie 同意（既存） */}
        <Script
          src="https://cdn.consentmanager.net/delivery/autoblocking/4700d9d682e36.js"
          strategy="afterInteractive"
          data-cmp-ab="1"
          data-cmp-host="c.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
        />
      </head>
      <body>
        {/* GA（既存） */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R8LMDVT08M" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8LMDVT08M');
          `}
        </Script>

        <header className="flex justify-between items-center px-8 py-4 bg-white/30 backdrop-blur-md shadow">
          <div className="text-[15px] font-bold text-gray-800">
            <Link href="/">MOGCIA</Link>
          </div>
          <nav className="space-x-6">
            <Link href="/contact" className="hover:text-gray-600">
              お問い合わせ
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
