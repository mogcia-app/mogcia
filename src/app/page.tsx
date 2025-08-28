"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* メインビジュアル */}
      <div className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* パーティクルアニメーション */}
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

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center text-white px-4 sm:px-6">
            <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full text-xs sm:text-sm font-medium text-white shadow-2xl hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
                AI × Digital Solutions
              </div>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              MOGCIA
            </h1>
            
            <p className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 font-light max-w-2xl sm:max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {`一歩先を見据え 未来を確かなものに`}
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base">
                サービスを見る
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 hover:border-blue-500 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
        </div>
      </div>

      {/* 事業内容セクション */}
      <section className="section-responsive bg-black">
        <div className="container-responsive">
          <div className="flex items-center justify-start mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-blue-600 to-blue-800 mr-3 sm:mr-4"></div>
            <div className="text-base sm:text-lg text-white uppercase tracking-widest font-medium">{`事業内容`}</div>
          </div>

          <h2 className="heading-responsive text-white mb-6 sm:mb-8 leading-tight">
            {`AIを活用した仕組みづくりと、`}<br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {`心を動かすプロダクトでビジネスを次のステージへ`}
            </span>
          </h2>

          <p className="text-responsive text-white mb-8 sm:mb-12 max-w-4xl leading-relaxed">
            {`私たちが培ってきた独自のノウハウで、ビジネスの課題を共に解決し、未来を形にします。`}
          </p>

          {/* サービスカード */}
          <div className="grid-responsive">
            {[
              { icon: "🤖", title: "AIソリューション", desc: "機械学習とデータ分析で業務効率化", color: "from-blue-600 to-blue-800" },
              { icon: "📱", title: "デジタルマーケティング", desc: "SNS戦略とブランディング支援", color: "from-blue-700 to-blue-900" },
              { icon: "💻", title: "Web開発", desc: "モダンな技術スタックでのサイト構築", color: "from-blue-800 to-indigo-800" }
            ].map((service, idx) => (
              <div key={idx} className="group card-responsive bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-blue-500/50">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl sm:text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-4 sm:mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOGCIAの価値セクション */}
      <section className="section-responsive bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-responsive text-white mb-4 sm:mb-6">{`MOGCIA に込めた想い`}</h2>
            <p className="text-responsive text-white max-w-3xl mx-auto">
              {`MOGCIA の頭文字には、私たちが大切にしている `}
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{`6`}</span>
              {` つの価値が込められています。`}
            </p>
          </div>

          <div className="grid-responsive-6">
            {[
              { letter: "M", title: "Mission", catch: "事業の軸を共に描く", color: "from-blue-600 to-blue-800" },
              { letter: "O", title: "Optimization", catch: "価値を最大化する仕組み", color: "from-blue-700 to-blue-900" },
              { letter: "G", title: "Growth", catch: "企業と共に成長する", color: "from-blue-800 to-indigo-800" },
              { letter: "C", title: "Consulting", catch: "課題を捉え戦略を築く", color: "from-indigo-700 to-indigo-900" },
              { letter: "I", title: "Intelligence", catch: "AIで意思決定支援", color: "from-indigo-800 to-blue-800" },
              { letter: "A", title: "Advancement", catch: "未来へ進化を導く", color: "from-blue-700 to-blue-900" }
            ].map((item, idx) => (
              <div key={idx} className="group text-center">
                <div className={`relative mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  <div className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-10 group-hover:opacity-100 transition-opacity duration-500`}>
                    {item.letter}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}>
                      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.letter}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{item.catch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企業理念セクション */}
      <section className="section-responsive bg-black">
        <div className="container-responsive">
          <div className="grid-responsive-2 items-center">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <video
                  src="/videos/002.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                ></video>
                 <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
            </div>

            <div className="space-responsive">
              <div className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                {`企業理念`}
              </div>
              <h2 className="heading-responsive text-white leading-tight">
                {`テクノロジーで`}<br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {`未来を創造する`}
                </span>
              </h2>
              <p className="text-responsive text-gray-400 leading-relaxed">
                {`私たちは、マーケティングやAI、デジタルの力を駆使して、多様な業界の課題に寄り添い、
                その本質を一緒に探りながら最適な答えを見つけ出していきます。
                解決するだけにとどまらず、お客様と共に戦略を描き、持続的な成長や新しい価値を共に生み出していくことが私たちの使命です。`}
              </p>
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg sm:text-xl">🚀</span>
                </div>
                <span className="text-sm sm:text-base text-gray-300 font-medium">{`イノベーションを追求`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              {`私たちができること`}
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {`未来志向の`}<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{`デジタルソリューション`}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AIを活用した課題解決", desc: "データ分析から意思決定支援まで" },
              { icon: "📱", title: "SNS運用支援", desc: "戦略設計から運用・分析まで" },
              { icon: "💻", title: "Webサイト・LP構築", desc: "成果に直結する導線設計" },
              { icon: "🛍️", title: "商品卸・小売展開", desc: "マルチチャネル戦略の構築" },
              { icon: "🏭", title: "OEM製造サポート", desc: "企画からパッケージまで" },
              { icon: "🚀", title: "スタートアップ成長支援", desc: "持続可能な事業成長の設計" }
            ].map((service, idx) => (
              <div key={idx} className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-blue-500/50">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-6 flex items-center text-blue-500 font-medium group-hover:text-blue-600 transition-colors duration-300">
                  <span>詳細を見る</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal.セクション */}
     {/* Signal. セクション（差し替え） */}
<section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
      {/* テキスト（SPで先に来るよう order） */}
      <div className="text-white space-y-6 order-1 lg:order-none">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/15">
          AI戦略ツール
        </div>

        <h2 className="text-4xl font-bold leading-tight">
          <div className="text-lg text-gray-300 mb-2">SNS戦略を加速する</div>
          <span className="text-white">
            Signal<span className="text-[#ff8a15]">.</span>
          </span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Signal.は、SNS運用をこれから始めたい方も、伸び悩んでいる方も安心して使える
          逆算型のAI戦略ツールです。ユーザーごとにカスタマイズされたAIが、保存率やいいね率を分析し、
          強みを明確化。PDCAを効率よく回しながら、次に打つべき施策を提案します。
        </p>

        {/* タグ群 */}
        <div className="flex flex-wrap gap-3.5">
          {[
            { icon: "🤖", label: "AI分析" },
            { icon: "📊", label: "データ駆動" },
            { icon: "🎯", label: "戦略提案" },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/15"
            >
              <span className="select-none">{t.icon}</span>
              <span className="text-sm">{t.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <a
            href="https://www.sgnalapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#ff8a15] hover:bg-[#e67a0d] text-white font-semibold rounded-lg shadow-2xl hover:shadow-[#ff8a15]/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff8a15] focus-visible:ring-offset-black"
          >
            <span>詳細を見る</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* 画像ブロック */}
      <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
        {/* アスペクト固定（16:10）＆拡大アニメーション */}
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/0602.jpg"
            alt="Signalツールデモ"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* 黒オーバーレイ（濃淡変化） */}
          <div className="absolute inset-0 rounded-2xl bg-black/20 group-hover:bg-black/15 transition-colors duration-300"></div>
          {/* 下面だけ少し濃くするグラデ（テキストが乗る想定にも強い） */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/35 via-black/0 to-transparent pointer-events-none"></div>
        </div>

        <div className="absolute top-4 right-4 z-20">
  <span className="bg-[#ff8a15] text-white px-6 py-3 rounded-full text-lg font-bold shadow-xl">
    NEW
  </span>
</div>
      
      </div>
    </div>
  </div>
</section>

      {/* Enterprise（Coming Soon）セクション */}
<section className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* 左：イメージ＋オーバーレイ＋バッジ */}
      <div className="relative">
        <Image
          src="/images/1990.svg"
          alt="Enterprise AI（社内専用ツール）"
          width={600}
          height={400}
          className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 grayscale-[25%] contrast-110"
        />
        {/* 黒オーバーレイ：少し濃いめ */}
        <div className="absolute inset-0 bg-black/45 rounded-2xl"></div>

        {/* 右上バッジ */}
        <div className="absolute -top-4 -right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl border border-white/10">
          COMING SOON
        </div>

        {/* 左下ウォーターマーク風（任意） */}
        <div className="absolute bottom-3 left-4 text-white/70 text-xs tracking-widest font-semibold">
          ENTERPRISE INTERNAL AI
        </div>
      </div>

      {/* 右：テキスト */}
      <div className="text-white space-y-6">
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
          企業向け・社内専用AIツール
        </div>

        <h2 className="text-4xl font-bold leading-tight">
          <div className="text-lg text-gray-300 mb-2">{`社内ナレッジを、安全に、賢く。`}</div>
          <span className="text-white">
            Enterprise AI<span className="text-[#3370ff]">.</span>
          </span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          {`Signal.`} がSNSに特化しているのに対して、Enterprise AI は
          {` 社内ドキュメント／規程／FAQ／議事録／顧客履歴 `}
          など企業内のナレッジに最適化。きめ細かな権限管理と
          監査ログ、日本語業務文書チューニングを備え、提案書や報告書の下書き、
          契約書の観点チェック、社内FAQの即時回答を安全に実現します。
        </p>

        {/* タグ群 */}
        <div className="flex flex-wrap gap-4">
          {[
            { icon: "🔒", label: "権限・監査対応" },
            { icon: "📚", label: "社内ナレッジ検索" },
            { icon: "📝", label: "文書ドラフト生成" },
            { icon: "🧭", label: "ガバナンス・コンプライアンス" },
          ].map((t) => (
            <div key={t.label} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <span className="select-none">{t.icon}</span>
              <span className="text-sm">{t.label}</span>
            </div>
          ))}
        </div>

        {/* ミニ機能リスト（ロードマップ感） */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <ul className="space-y-2 text-gray-300">
            {["SAML/SSO・SCIM 連携", "部門/個人単位のアクセス制御", "操作ログ・エクスポート"].map((it) => (
              <li key={it} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#3370ff] rounded-full" />
                <span className="text-sm">{it}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-gray-300">
            {["日本語業務特化プロンプト", "契約/規程チェック観点テンプレ", "社内FAQ即時回答"].map((it) => (
              <li key={it} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#3370ff] rounded-full" />
                <span className="text-sm">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* アクション：通知登録 & お問い合わせ */}
        <div className="pt-4 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#3370ff] hover:bg-[#0d1ce68d] text-white font-semibold rounded-lg shadow-2xl hover:shadow-[#ff8a15]/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>お問い合わせ（導入相談）</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* リリース通知：疑似無効ボタン風 */}
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border border-white/20 text-white/60 cursor-not-allowed bg-white/5"
            title="近日公開予定"
          >
            リリース通知を受け取る（準備中）
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* MOGCIA COFFEEセクション */}
     {/* MOGCIA COFFEE セクション（差し替え） */}
<section className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
      {/* テキスト（SPで先に表示） */}
      <div className="order-1 lg:order-none space-y-6">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100/90 to-red-200/90 text-red-800 rounded-full text-sm font-medium">
          オリジナルブランド
        </div>

        <h2 className="text-4xl font-bold text-white leading-tight">
          MOGCIA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            COFFEE
          </span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          私たちは「MOGCIA COFFEE」というブランド名で、高品質かつ希少な豆を使用したドリップコーヒーを自社展開してきました。
          SNSを駆使したマーケティングで多くの実験を行い、フォロワー数と購買率は必ずしも比例しないという小売のリアルを分析。
          そこで見つけた “勝ち筋” を活かし、ブランディングと導線設計を緻密に構築しました。
        </p>

        {/* 特長カード */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="text-center p-4 bg-red-900/20 backdrop-blur-sm rounded-lg border border-red-500/30">
            <div className="text-2xl mb-2">☕</div>
            <div className="text-sm font-medium text-red-300">高品質豆</div>
          </div>
          <div className="text-center p-4 bg-red-800/20 backdrop-blur-sm rounded-lg border border-red-600/30">
            <div className="text-2xl mb-2">📱</div>
            <div className="text-sm font-medium text-red-300">SNS戦略</div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <a
            href="https://mogcia.official.ec/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MOGCIA COFFEE ブランドサイトを開く"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold rounded-lg shadow-2xl hover:shadow-red-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 focus-visible:ring-offset-black"
          >
            <span>ブランドサイト</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
            {/* お知らせラベル */}
    <div
      role="status"
      aria-live="polite"
      className="mt-4 inline-flex items-start sm:items-center gap-2 px-3 py-2 rounded-md border border-red-700/40 bg-red-900/20 text-red-200 text-[12px] sm:text-[12px]"
    >
      <span className="leading-none mt-0.5 sm:mt-0">⚠️</span>
      <span>
        現在はコーヒー豆の供給不足に伴い、
        限定されたお取引先様のみのご提供となっております。
      </span>
    </div>
        </div>
      </div>

      {/* 画像ブロック */}
      <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
        {/* アスペクト固定（4:3）で崩れ防止 */}
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/2.PNG"
            alt="オリジナルドリップコーヒー"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* ベース暗めオーバーレイ */}
          <div className="absolute inset-0 rounded-2xl bg-black/45 group-hover:bg-black/35 transition-colors duration-300"></div>
          {/* 下部グラデで可読性UP */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* 角バッジ（任意） */}
        {/* <div className="absolute -top-4 -right-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
          LIMITED
        </div> */}
      </div>
    </div>
  </div>
</section>

      {/* WEB制作セクション */}
    {/* WEB制作セクション */}
<section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* 左テキスト */}
      <div className="space-y-8">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold shadow-md">
          {`Web制作・開発`}
        </div>

        <h2 className="text-4xl font-extrabold text-white leading-snug">
          {`モダンな`}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
            {`Webサイト構築`}
          </span>
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed">
          {`私たちはWebサイト制作を「作って終わり」にせず、そこからの改善こそが本質だと考えています。
          業種やフェーズによってサイトの目的は様々。初めから大きな投資をするよりも、
          まずは小さく始めて運用しながら磨いていく。そんな選択肢も一緒に検討できるパートナーでありたいと思っています。`}
        </p>

        {/* 特徴カード */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="text-center p-5 bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-500/30 hover:bg-blue-900/40 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-sm font-medium text-blue-400">ノーコード</div>
          </div>
          <div className="text-center p-5 bg-indigo-900/20 backdrop-blur-sm rounded-lg border border-indigo-500/30 hover:bg-indigo-900/40 hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">🔄</div>
            <div className="text-sm font-medium text-indigo-400">継続改善</div>
          </div>
        </div>

        {/* パートナーラベル */}
        <div className="pt-4 flex items-center gap-3">
          <Image 
            src="/images/111.png" 
            alt="ベイスオフィシャルパートナー" 
            width={40}
            height={40}
            className="h-10 w-auto rounded-md"
          />
          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-lg shadow-lg">
            ベイスオフィシャルパートナー
          </span>
        </div>
      </div>

      {/* 右画像 */}
      <div className="relative group">
        <Image
          src="/images/1998.jpg"
          alt="Webサイト構築イメージ"
          width={600}
          height={400}
          className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
        {/* ラベル */}
        <div className="absolute top-4 left-4 bg-blue-600/80 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
          Web Solution
        </div>
      </div>
    </div>
  </div>
</section>

     
        {/* お問い合わせ */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-sm font-medium mb-6">
              お問い合わせ
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              {`一緒に`}<span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">{` 未来を創りませんか？`}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              私たちのサービスについて、お気軽にお問い合わせください。
              お客様のビジネスの課題解決に向けて、最適なソリューションをご提案いたします。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-indigo-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25"
            >
              お問い合わせはこちら
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
                {`AIを活用した仕組みづくりと、心を動かすプロダクトでビジネスを次のステージへ`}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">{`事業内容`}</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>AI・デジタルソリューション</li>
                <li>SNSマーケティング</li>
                <li>Webサイト・LP構築</li>
                <li>OEM企画・製造サポート</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">{`お問い合わせ`}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {`新しいプロジェクトやご相談がございましたら、お気軽にお問い合わせください。`}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-500">
                <p>{`株式会社MOGCIA ｜ 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階 ｜ 設立2023年`}</p>
              </div>
              <div className="text-sm text-gray-500">
                {`© 2023 MOGCIA Inc. All rights reserved.`}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
