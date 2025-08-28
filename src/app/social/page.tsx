"use client";

import { useState, useEffect } from 'react';

export default function SocialPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const initiatives = [
    {
      id: 0,
      title: "SDGsへの取り組み",
      subtitle: "小さな一歩から始める",
      description: "日々の業務を通じてSDGsの考え方を取り入れ、できることから始めています。",
      icon: "🌱",
      color: "from-green-600 to-green-800",
      actions: [
        "ペーパーレス化の推進",
        "リモートワークの活用",
        "地域の小さな企業との連携",
        "社内での環境意識の向上"
      ]
    },
    {
      id: 1,
      title: "ダイバーシティ＆インクルージョン",
      subtitle: "多様性を活かす組織づくり",
      description: "性別、年齢、国籍、経験など、多様な背景を持つ人材が活躍できる環境を目指しています。",
      icon: "🌈",
      color: "from-purple-600 to-purple-800",
      policies: [
        "柔軟な働き方の推進",
        "多様な価値観の尊重",
        "公平な評価制度の構築",
        "コミュニケーションの活性化"
      ],
      benefits: [
        "創造性とイノベーションの向上",
        "従業員満足度の向上",
        "優秀な人材の確保",
        "企業ブランドの向上"
      ]
    },
    {
      id: 2,
      title: "DX推進",
      subtitle: "デジタル変革で業務効率化",
      description: "アナログな業務プロセスをデジタル化し、効率的で持続可能な働き方を実現します。",
      icon: "💻",
      color: "from-blue-600 to-blue-800",
      whyDX: [
        "業務効率の大幅な向上",
        "人的ミスの削減",
        "データ活用による意思決定の迅速化",
        "リモートワーク環境の整備"
      ],
      solutions: [
        "業務プロセスの見直し",
        "適切なツールの選定・導入",
        "従業員のデジタルリテラシー向上",
        "継続的な改善サイクルの構築"
      ]
    },
    {
      id: 3,
      title: "AIとSDGs・ダイバーシティ",
      subtitle: "テクノロジーで社会課題解決",
      description: "AI技術を活用して、SDGsの目標達成とダイバーシティ推進に貢献します。",
      icon: "🤖",
      color: "from-indigo-600 to-indigo-800",
      applications: [
        "AIによる業務効率化ツール",
        "データ分析による意思決定支援",
        "自動化による人的作業の軽減",
        "インクルーシブなAIシステム設計"
      ],
      impact: [
        "社会課題の早期発見・解決",
        "持続可能なビジネスモデルの構築",
        "多様な人材の活躍支援",
        "地域社会への貢献"
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
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 rounded-full text-sm font-medium text-white shadow-2xl mb-8">
              社会への取り組み
            </div>
            <h1 className={`text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Social Impact
            </h1>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              テクノロジーの力で、持続可能な社会の実現と
              すべての人々の幸福な暮らしに貢献します
            </p>
          </div>
        </div>
      </section>

      {/* 取り組み一覧セクション */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-medium mb-6">
              私たちの取り組み
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {`持続可能な未来の実現に向けた`}<span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">{`アプローチ`}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {initiatives.map((initiative) => (
              <button
                key={initiative.id}
                onClick={() => setActiveTab(initiative.id)}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  activeTab === initiative.id
                    ? 'border-green-500 bg-green-900/20 shadow-2xl shadow-green-500/25'
                    : 'border-gray-800 bg-gray-900/50 hover:border-green-500/50 hover:bg-green-900/10'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  <span className="text-3xl">{initiative.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{initiative.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {initiative.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* 取り組み詳細 */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* 左側：取り組み概要 */}
                <div className="space-y-6">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${initiatives[activeTab].color} text-white rounded-full text-sm font-medium`}>
                    {initiatives[activeTab].title}
                  </div>
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {initiatives[activeTab].subtitle}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {initiatives[activeTab].description}
                  </p>

                  {/* 具体的な取り組み */}
                  {activeTab === 0 && (
                    <div className="space-y-6">
                      {/* 具体的な行動 */}
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-4">具体的な行動</h4>
                        <div className="space-y-3">
                          {(initiatives[activeTab]?.actions || []).map((action, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                              <span className="text-gray-300">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-4">推進政策</h4>
                        <div className="space-y-3">
                          {(initiatives[activeTab]?.policies || []).map((policy, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-300">{policy}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-4">なぜDXが必要か</h4>
                        <div className="space-y-3">
                          {(initiatives[activeTab]?.whyDX || []).map((reason, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-300">{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 3 && (
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                        <h4 className="text-xl font-semibold text-white mb-4">AI活用事例</h4>
                        <div className="space-y-3">
                          {(initiatives[activeTab]?.applications || []).map((app, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              <span className="text-gray-300">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 右側：詳細情報 */}
                <div className="space-y-6 flex flex-col justify-end h-full -mt-10">
                  {/* 効果・影響 */}
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {activeTab === 1 ? "期待される効果" : 
                       activeTab === 2 ? "提供ソリューション" : 
                       activeTab === 3 ? "社会への影響" : "期待される効果"}
                    </h4>
                    <div className="space-y-3">
                      {(activeTab === 1 ? (initiatives[activeTab]?.benefits || []) : 
                        activeTab === 2 ? (initiatives[activeTab]?.solutions || []) : 
                        activeTab === 3 ? (initiatives[activeTab]?.impact || []) : [
                          '業務効率の向上',
                          '環境負荷の軽減',
                          '地域とのつながり強化',
                          '社内意識の向上',
                        ]).map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activeTab === 1 ? 'bg-purple-500' : 
                            activeTab === 2 ? 'bg-blue-500' : 
                            activeTab === 3 ? 'bg-indigo-500' : 'bg-green-500'
                          }`}></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAボタン */}
              <div className="mt-12 text-center">
                <a 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-green-500/30"
                >
                  取り組みについて詳しく聞く
                </a>
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
