"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 0,
      title: "AIソリューション",
      subtitle: "機械学習・データ分析・業務効率化",
      icon: "🤖",
      description: "AIと機械学習を活用して、企業の業務プロセスを根本から変革します。",
      color: "from-blue-600 to-blue-800",
      features: [
        "機械学習による予測分析",
        "自然言語処理による文書分析",
        "画像認識による品質管理",
        "異常検知によるリスク管理"
      ],
      challenges: [
        "大量のデータを活用できていない",
        "手作業による業務の非効率性",
        "意思決定の根拠が曖昧",
        "業務プロセスの最適化ができない"
      ],
      technologies: [
        "Python / TensorFlow / PyTorch",
        "AWS SageMaker / Google Cloud AI",
        "OpenAI API / Azure Cognitive Services",
        "Tableau / Power BI / Grafana"
      ],
      process: [
        "現状分析と課題抽出",
        "AIモデルの設計・開発",
        "データ基盤の構築",
        "運用・改善の継続支援"
      ]
    },
    {
      id: 1,
      title: "デジタルマーケティング",
      subtitle: "SNS戦略・ブランディング支援",
      icon: "📱",
      description: "データ駆動のマーケティング戦略で、ブランドの認知度と売上を向上させます。",
      color: "from-blue-700 to-blue-900",
      features: [
        "AI分析による顧客セグメンテーション",
        "SNS運用の自動化・最適化",
        "コンテンツマーケティング戦略",
        "ROI測定と改善提案"
      ],
      challenges: [
        "SNS運用の効果が分からない",
        "ターゲット顧客が明確でない",
        "コンテンツ制作の効率が悪い",
        "マーケティング予算の最適化ができない"
      ],
      technologies: [
        "Signal. (自社開発AIツール)",
        "Facebook Ads / Google Ads",
        "HubSpot / Mailchimp",
        "Google Analytics / Facebook Pixel"
      ],
      process: [
        "市場調査とターゲット分析",
        "ブランド戦略の策定",
        "コンテンツ制作・配信",
        "効果測定と継続改善"
      ]
    },
    {
      id: 2,
      title: "Web開発",
      subtitle: "モダンな技術スタック・継続改善",
      icon: "💻",
      description: "最新のWeb技術で、ユーザー体験とビジネス成果を両立するサイトを構築します。",
      color: "from-blue-800 to-indigo-800",
      features: [
        "レスポンシブデザイン対応",
        "SEO最適化とパフォーマンス向上",
        "ユーザビリティの向上",
        "継続的な改善・運用支援"
      ],
      challenges: [
        "サイトの更新が面倒",
        "モバイル対応が不十分",
        "SEO対策ができていない",
        "ユーザー体験が悪い"
      ],
      technologies: [
        "Next.js / React / TypeScript",
        "Tailwind CSS / Framer Motion",
        "Vercel / Netlify",
        "Google PageSpeed Insights"
      ],
      process: [
        "要件定義と設計",
        "プロトタイプ制作",
        "開発・テスト",
        "リリース・運用支援"
      ]
    },
    {
      id: 3,
      title: "OEM企画・製造サポート",
      subtitle: "製品開発支援・製造プロセス最適化",
      icon: "🏭",
      description: "企画から製造まで、製品開発の全工程をサポートし、市場競争力のある商品を実現します。",
      color: "from-indigo-700 to-indigo-900",
      features: [
        "市場調査と製品企画",
        "サプライチェーン最適化",
        "品質管理システム構築",
        "コスト削減と効率化"
      ],
      challenges: [
        "製品開発のノウハウがない",
        "製造コストが高い",
        "品質管理が不十分",
        "サプライチェーンが不安定"
      ],
      technologies: [
        "3D CAD / CAM",
        "ERP / MESシステム",
        "IoTセンサー・データ収集",
        "品質管理・分析ツール"
      ],
      process: [
        "市場調査と製品企画",
        "設計・試作・テスト",
        "製造プロセス設計",
        "量産・品質管理"
      ]
    }
  ];

  return (
    <>
      {/* ヒーローセクション */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* 背景パーティクル */}
        <div className="absolute inset-0">
          <div className="particles-container">
            {[
              { left: "10%", top: "20%", delay: "0s", duration: "4s" },
              { left: "20%", top: "80%", delay: "0.5s", duration: "5s" },
              { left: "30%", top: "40%", delay: "1s", duration: "6s" },
              { left: "40%", top: "90%", delay: "1.5s", duration: "4.5s" },
              { left: "50%", top: "10%", delay: "2s", duration: "5.5s" },
              { left: "60%", top: "70%", delay: "2.5s", duration: "4s" },
              { left: "70%", top: "30%", delay: "3s", duration: "6s" },
              { left: "80%", top: "60%", delay: "0.2s", duration: "5s" },
              { left: "90%", top: "50%", delay: "0.8s", duration: "4.5s" },
              { left: "15%", top: "75%", delay: "1.2s", duration: "5.5s" },
              { left: "25%", top: "25%", delay: "1.8s", duration: "4s" },
              { left: "35%", top: "85%", delay: "2.2s", duration: "6s" },
              { left: "45%", top: "15%", delay: "2.8s", duration: "5s" },
              { left: "55%", top: "65%", delay: "0.3s", duration: "4.5s" },
              { left: "65%", top: "35%", delay: "0.9s", duration: "5.5s" },
              { left: "75%", top: "95%", delay: "1.4s", duration: "4s" },
              { left: "85%", top: "45%", delay: "1.9s", duration: "6s" },
              { left: "95%", top: "5%", delay: "2.4s", duration: "5s" },
              { left: "5%", top: "55%", delay: "2.9s", duration: "4.5s" },
              { left: "12%", top: "88%", delay: "0.1s", duration: "5.5s" },
              { left: "22%", top: "12%", delay: "0.6s", duration: "4s" },
              { left: "32%", top: "78%", delay: "1.1s", duration: "6s" },
              { left: "42%", top: "22%", delay: "1.6s", duration: "5s" },
              { left: "52%", top: "68%", delay: "2.1s", duration: "4.5s" },
              { left: "62%", top: "18%", delay: "2.6s", duration: "5.5s" },
              { left: "72%", top: "82%", delay: "0.4s", duration: "4s" },
              { left: "82%", top: "38%", delay: "0.9s", duration: "6s" },
              { left: "92%", top: "72%", delay: "1.4s", duration: "5s" },
              { left: "8%", top: "28%", delay: "1.9s", duration: "4.5s" },
              { left: "18%", top: "62%", delay: "2.4s", duration: "5.5s" },
              { left: "28%", top: "8%", delay: "2.9s", duration: "4s" },
              { left: "38%", top: "92%", delay: "0.2s", duration: "6s" },
              { left: "48%", top: "32%", delay: "0.7s", duration: "5s" },
              { left: "58%", top: "78%", delay: "1.2s", duration: "4.5s" },
              { left: "68%", top: "22%", delay: "1.7s", duration: "5.5s" },
              { left: "78%", top: "68%", delay: "2.2s", duration: "4s" },
              { left: "88%", top: "18%", delay: "2.7s", duration: "6s" },
              { left: "98%", top: "58%", delay: "0.1s", duration: "5s" },
              { left: "3%", top: "42%", delay: "0.6s", duration: "4.5s" },
              { left: "13%", top: "88%", delay: "1.1s", duration: "5.5s" },
              { left: "23%", top: "32%", delay: "1.6s", duration: "4s" },
              { left: "33%", top: "78%", delay: "2.1s", duration: "6s" },
              { left: "43%", top: "28%", delay: "2.6s", duration: "5s" },
              { left: "53%", top: "72%", delay: "0.3s", duration: "4.5s" },
              { left: "63%", top: "22%", delay: "0.8s", duration: "5.5s" },
              { left: "73%", top: "88%", delay: "1.3s", duration: "4s" },
              { left: "83%", top: "38%", delay: "1.8s", duration: "6s" },
              { left: "93%", top: "82%", delay: "2.3s", duration: "5s" },
              { left: "7%", top: "48%", delay: "2.8s", duration: "4.5s" },
              { left: "17%", top: "18%", delay: "0.2s", duration: "5.5s" },
              { left: "27%", top: "58%", delay: "0.7s", duration: "4s" },
              { left: "37%", top: "98%", delay: "1.2s", duration: "6s" },
              { left: "47%", top: "8%", delay: "1.7s", duration: "5s" },
              { left: "57%", top: "48%", delay: "2.2s", duration: "4.5s" },
              { left: "67%", top: "88%", delay: "2.7s", duration: "5.5s" },
              { left: "77%", top: "28%", delay: "0.1s", duration: "4s" },
              { left: "87%", top: "68%", delay: "0.6s", duration: "6s" },
              { left: "97%", top: "8%", delay: "1.1s", duration: "5s" }
            ].map((particle, i) => (
              <div
                key={i}
                className="particle absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              />
            ))}
          </div>
        </div>

        {/* パーティクルアニメーション用のスタイル */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.6;
            }
            25% {
              transform: translateY(-30px) translateX(20px) scale(1.2);
              opacity: 0.9;
            }
            50% {
              transform: translateY(-60px) translateX(-10px) scale(0.8);
              opacity: 0.3;
            }
            75% {
              transform: translateY(-40px) translateX(-25px) scale(1.1);
              opacity: 0.7;
            }
          }
          
          @keyframes cosmic-drift {
            0% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-40px) translateX(30px) rotate(120deg);
            }
            66% {
              transform: translateY(-80px) translateX(-20px) rotate(240deg);
            }
            100% {
              transform: translateY(0px) translateX(0px) rotate(360deg);
            }
          }
          
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.4;
              filter: drop-shadow(0 0 4px rgba(96, 165, 250, 0.4));
            }
            50% {
              opacity: 1;
              filter: drop-shadow(0 0 12px rgba(96, 165, 250, 0.8));
            }
          }
          
          .particle:nth-child(3n) {
            animation: cosmic-drift 12s linear infinite;
          }
          
          .particle:nth-child(3n+1) {
            animation: float 10s ease-in-out infinite;
          }
          
          .particle:nth-child(3n+2) {
            animation: twinkle 6s ease-in-out infinite;
          }
          
          .particle {
            filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.6));
          }
        `}</style>

        

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-sm font-medium text-white shadow-2xl mb-8">
              サービス一覧
            </div>
            <h1 className={`text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              AI × Solutions
            </h1>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              テクノロジーの力で、すべての企業の課題を解決し、
              未来への成長を加速する包括的なソリューションをご提供します
            </p>
          </div>
        </div>
      </section>

       {/* ブランド詳細セクション */}
       <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              ブランド詳細
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              {`私たちの`}<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{` 主要ブランド・サービス`}</span>
            </h2>
          </div>

          {/* Signal. */}
          <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-[#ff8a15] text-white rounded-full text-sm font-medium">
                  AI戦略ツール
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  <div className="text-lg text-gray-300 mb-2">SNS戦略を加速する</div>
                  <span className="text-white">
                    Signal<span className="text-[#ff8a15]">.</span>
                  </span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Signal.は、SNS運用をこれから始めたい方も、伸び悩んでいる方も安心して使える
                  逆算型のAI戦略ツールです。ユーザーごとにカスタマイズされたAIが、保存率やいいね率を分析し、
                  強みを明確化。PDCAを効率よく回しながら、次に打つべき施策を提案します。
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <span className="text-blue-400">🤖</span>
                    <span className="text-sm text-white">AI分析</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <span className="text-blue-500">📊</span>
                    <span className="text-sm text-white">データ駆動</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <span className="text-indigo-400">🎯</span>
                    <span className="text-sm text-white">戦略提案</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://www.sgnalapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#ff8a15] hover:bg-[#e67a0d] text-white font-semibold rounded-lg shadow-2xl hover:shadow-[#ff8a15]/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>詳細を見る</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/0602.jpg"
                  alt="Signalツールデモ"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-[#ff8a15] text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
                  NEW
                </div>
              </div>
            </div>
          </div>

          {/* MOGCIA COFFEE */}
          <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <Image
                  src="/images/2.PNG"
                  alt="オリジナルドリップコーヒー"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>

              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 text-red-800 rounded-full text-sm font-medium">
                  オリジナルブランド
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  MOGCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">COFFEE</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  私たちは「MOGCIA COFFEE」というブランド名で高品質かつ希少な豆を使用したドリップコーヒーを自社展開してきました。
                  SNSを駆使したマーケティングで多くの実験を行い、フォロワー数と購買率は必ずしも比例しないという
                  小売業のリアルを徹底的に分析。そこで見つけた&quot;勝ち筋&quot;を活かし、ブランディングと導線設計を緻密に構築しました。
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-red-900/20 backdrop-blur-sm rounded-lg border border-red-500/30">
                    <div className="text-2xl mb-2">☕</div>
                    <div className="text-sm font-medium text-red-400">高品質豆</div>
                  </div>
                  <div className="text-center p-4 bg-red-800/20 backdrop-blur-sm rounded-lg border border-red-600/30">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-medium text-red-300">SNS戦略</div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://mogcia.official.ec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold rounded-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>ブランドサイト</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WEB開発 */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium">
                  Web制作・開発
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight">
                  モダンな<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                    Webサイト構築
                  </span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  私たちはWebサイト制作を「作って終わり」にせず、そこからの改善こそが本質だと考えています。
                  業種やフェーズによってサイトの目的は様々。初めから大きな投資をするよりも、
                  まずは小さく始めて運用しながら磨いていく。そんな選択肢も一緒に検討できるパートナーでありたいと思っています。
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-500/30">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-sm font-medium text-blue-400">ノーコード</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-900/20 backdrop-blur-sm rounded-lg border border-indigo-500/30">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="text-sm font-medium text-indigo-400">継続改善</div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-lg shadow-lg">
                    <span>ベイスオフィシャルパートナー</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/1998.jpg"
                  alt="Webサイト構築イメージ"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -left-4 bg-gray-900 p-4 rounded-xl shadow-2xl border border-gray-700">
                  <Image 
                    src="/images/111.png" 
                    alt="ベイスオフィシャルパートナー" 
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              私たちができること
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {`未来志向の`}<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{`デジタルソリューション`}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  activeService === service.id
                    ? 'border-blue-500 bg-blue-900/20 shadow-2xl shadow-blue-500/25'
                    : 'border-gray-800 bg-gray-900/50 hover:border-blue-500/50 hover:bg-blue-900/10'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* サービス詳細 */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 左側：サービス概要 */}
                <div className="space-y-6">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${services[activeService].color} text-white rounded-full text-sm font-medium`}>
                    {services[activeService].title}
                  </div>
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {services[activeService].subtitle}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {services[activeService].description}
                  </p>

                  {/* 主な機能 */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">主な機能</h4>
                    <div className="space-y-3">
                      {services[activeService].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 右側：詳細情報 */}
                <div className="space-y-6">
                  {/* 解決できる課題 */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">解決できる課題</h4>
                    <div className="space-y-3">
                      {services[activeService].challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-300">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 使用技術 */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">使用技術・アプローチ</h4>
                    <div className="space-y-3">
                      {services[activeService].technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 導入プロセス */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">導入プロセス</h4>
                    <div className="space-y-3">
                      {services[activeService].process.map((step, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAボタン */}
              <div className="mt-12 text-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-500/30">
                  お問い合わせ・ご相談
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* フッター */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                MOGCIA
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AIを活用した仕組みづくりと、心を動かすプロダクトでビジネスを次のステージへ
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">事業内容</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>AI・デジタルソリューション</li>
                <li>SNSマーケティング</li>
                <li>Webサイト・LP構築</li>
                <li>OEM企画・製造サポート</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">お問い合わせ</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                新しいプロジェクトやご相談がございましたら、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 MOGCIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
