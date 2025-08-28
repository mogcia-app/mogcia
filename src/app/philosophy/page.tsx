"use client";

import { useState, useEffect } from 'react';

export default function PhilosophyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              企業理念
            </div>
            <h1 className={`text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              AI × Philosophy
            </h1>
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              テクノロジーの力で、すべての企業の未来を創造する
              <br />
              私たちの使命と価値観をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* ミッションセクション */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              私たちの使命
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {`テクノロジーで`}<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {`未来を創造する`}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              AIとデジタルテクノロジーの力を駆使して、企業が抱える課題を解決し、
              新しい価値を創造することで、社会全体の進歩と発展に貢献します。
              私たちは、テクノロジーの可能性を最大限に引き出し、
              人間の創造性とAIの知性を融合させた、革新的なソリューションを提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AI駆動", desc: "機械学習とデータ分析による意思決定支援", color: "from-blue-600 to-blue-800" },
              { icon: "🚀", title: "イノベーション", desc: "既存の枠組みを超えた革新的なアプローチ", color: "from-blue-700 to-blue-900" },
              { icon: "🌍", title: "社会貢献", desc: "テクノロジーを通じた社会課題の解決", color: "from-blue-800 to-indigo-800" }
            ].map((item, idx) => (
              <div key={idx} className={`group p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-blue-500/50 transition-all duration-1000 delay-${400 + idx * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ビジョンセクション */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              目指す未来
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {`AI×デジタルで、`}<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {`すべての企業の成長を加速する`}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              2035年までに、AIとデジタルテクノロジーを活用して、
              1000社以上の企業のデジタル変革を支援し、
              日本経済の成長エンジンとなることを目指しています。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">デジタル変革の加速</h3>
                    <p className="text-gray-400">AIを活用した業務効率化と意思決定支援</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">持続可能な成長</h3>
                    <p className="text-gray-400">長期的な視点での企業価値の向上</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">パートナーシップ</h3>
                    <p className="text-gray-400">企業と共に成長する長期的な関係構築</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">2030年目標</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">支援企業数</span>
                    <span className="text-2xl font-bold text-blue-400">1000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AI導入率</span>
                    <span className="text-2xl font-bold text-blue-400">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">業務効率化</span>
                    <span className="text-2xl font-bold text-blue-400">3倍</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">顧客満足度</span>
                    <span className="text-2xl font-bold text-blue-400">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* バリューセクション */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              私たちの価値観
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {`MOGCIA に込められた`}<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{` 6つの価値`}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              MOGCIA の頭文字には、私たちが大切にしている 
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{` 6`}</span>
              つの価値が込められています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {[
              { letter: "M", title: "Mission", catch: "事業の軸を共に描く", desc: "企業の使命とビジョンを理解し、共に未来を描いていくパートナーとして、長期的な成長戦略を構築します。", color: "from-blue-600 to-blue-800" },
              { letter: "O", title: "Optimization", catch: "価値を最大化する仕組み", desc: "AIとデータ分析を活用して、業務プロセスを最適化し、企業の価値を最大化する仕組みを構築します。", color: "from-blue-700 to-blue-900" },
              { letter: "G", title: "Growth", catch: "企業と共に成長する", desc: "クライアント企業の成長に寄り添い、共に学び、共に進化していく長期的なパートナーシップを大切にします。", color: "from-blue-800 to-indigo-800" },
              { letter: "C", title: "Consulting", catch: "課題を捉え戦略を築く", desc: "深い洞察力と豊富な経験を活かし、企業が抱える課題を正確に把握し、最適な戦略を提案します。", color: "from-indigo-700 to-indigo-900" },
              { letter: "I", title: "Intelligence", catch: "AIで意思決定支援", desc: "最新のAI技術を駆使して、データに基づく科学的な意思決定を支援し、企業の競争優位を創出します。", color: "from-indigo-800 to-blue-800" },
              { letter: "A", title: "Advancement", catch: "未来へ進化を導く", desc: "常に最先端のテクノロジーを追求し、企業のデジタル変革をリードし、未来への進化を導きます。", color: "from-blue-700 to-blue-900" }
            ].map((item, idx) => (
              <div key={idx} className={`group text-center transition-all duration-1000 delay-${300 + idx * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                  <span className="text-3xl font-black text-white">{item.letter}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-400 mb-3 font-medium">{item.catch}</p>
                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ストーリーセクション */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6">
              創業ストーリー
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {`テクノロジーで`}<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{` 未来を創造する`}</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-2xl font-bold text-white mb-6">創業の想い</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  創業のきっかけは、IT業界で働く中で感じた「もっと企業の課題に寄り添える存在になりたい」という想いでした。
                  自分自身が経験した問題や、お客様から聞いた課題の両方を深く理解し、AIとデジタルテクノロジーの力で
                  本当に価値のあるソリューションを提供したいと考えました。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  創業時に最も大切にしていたのは「投げ出さないこと」と「やり切ること」です。
                  そして、お客様と同じ目線で考え、正直に向き合うことで、長期的な信頼関係を築いていきたいと思っています。
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  常に誰かの役に立ち、社会の効率化と働き方改革に貢献できる会社であり続けたい。
                  それが私たちの目指す未来です。
                </p>
              </div>
              
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">イノベーションを追求</h4>
                      <p className="text-gray-400">常に新しい技術と可能性を探求</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">課題解決への情熱</h4>
                      <p className="text-gray-400">企業の成長を支える使命感</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">パートナーシップ</h4>
                      <p className="text-gray-400">長期的な信頼関係の構築</p>
                    </div>
                  </div>
                </div>
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
