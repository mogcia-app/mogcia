"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PartnersPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partnershipTypes = [
    {
      title: "技術パートナー",
      subtitle: "AI・DX技術で共創",
      icon: "🤖",
      color: "from-blue-600 to-blue-800",
      description: "最新のAI技術やDXソリューションを共同開発し、お客様に革新的な価値を提供します。",
      benefits: [
        "技術ノウハウの共有",
        "共同研究開発",
        "市場開拓の協力",
        "ブランド価値の向上"
      ],
      requirements: [
        "技術力のある企業",
        "イノベーション志向",
        "長期的な協力関係構築",
        "お客様第一の考え方"
      ]
    },
    {
      title: "ビジネスパートナー",
      subtitle: "事業拡大で共創",
      icon: "💼",
      color: "from-green-600 to-green-800",
      description: "お互いの強みを活かして、新規事業の創出や市場拡大を目指します。",
      benefits: [
        "新規事業の共同開発",
        "販路の拡大",
        "リソースの最適活用",
        "リスクの分散"
      ],
      requirements: [
        "安定した事業基盤",
        "成長意欲の高い企業",
        "信頼できる経営体制",
        "地域・業界での実績"
      ]
    },
    {
      title: "地域パートナー",
      subtitle: "地域活性化で共創",
      icon: "🏢",
      color: "from-purple-600 to-purple-800",
      description: "地域の企業や団体と連携し、地域社会の発展に貢献します。",
      benefits: [
        "地域での知名度向上",
        "地域資源の活用",
        "地域課題の解決",
        "地域経済の活性化"
      ],
      requirements: [
        "地域での信頼性",
        "地域課題への理解",
        "長期的な地域貢献",
        "地域ネットワーク"
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
                className="particle absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
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
              filter: drop-shadow(0 0 4px rgba(147, 51, 234, 0.4));
            }
            50% {
              opacity: 1;
              filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.8));
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
            filter: drop-shadow(0 0 8px rgba(147, 51, 234, 0.6));
          }
        `}</style>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-sm font-medium text-white shadow-2xl mb-8">
              パートナーシップ
            </div>
            <h1 className={`text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Partnership
            </h1>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              共に成長し、社会に価値を創造する
              パートナーシップを構築しましょう
            </p>
          </div>
        </div>
      </section>

      {/* パートナーシップの種類 */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm font-medium mb-6">
              パートナーシップの種類
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              {`共創の`}<span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">{` 3つの形`}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, idx) => (
              <div key={idx} className={`group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-purple-500/50 transition-all duration-1000 delay-${400 + idx * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{type.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">{type.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{type.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">パートナーになるメリット</h4>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">求められる条件</h4>
                    <ul className="space-y-1">
                      {type.requirements.map((req, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* パートナーになりたい方へ */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm font-medium mb-6">
              パートナーになりたい方へ
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              {`共に未来を`}<span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">{` 創造しましょう`}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              私たちとパートナーシップを築き、お互いの強みを活かして
              社会に新しい価値を提供しませんか？
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 左側：パートナーシップの流れ */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">パートナーシップの流れ</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "お問い合わせ", description: "パートナーシップについてのご相談" },
                  { step: "2", title: "ヒアリング", description: "お互いの強みとニーズの確認" },
                  { step: "3", title: "提案・検討", description: "具体的な協力内容の提案" },
                  { step: "4", title: "契約締結", description: "パートナーシップ契約の締結" },
                  { step: "5", title: "協力開始", description: "実際の協力活動の開始" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右側：お問い合わせフォーム */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">お問い合わせ</h3>
              <p className="text-gray-400 mb-6">
                パートナーシップについて詳しくお聞かせください。
                お気軽にご相談ください。
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <h4 className="text-white font-semibold mb-2">お問い合わせ方法</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    以下の方法でお気軽にお問い合わせください
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• お電話でのご相談</li>
                    <li>• メールでのご相談</li>
                    <li>• オンラインフォームでのご相談</li>
                  </ul>
                </div>

                <Link 
                  href="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-purple-500/30 text-center block"
                >
                  お問い合わせフォームへ
                </Link>
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
