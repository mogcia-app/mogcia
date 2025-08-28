"use client";
import Script from "next/script";
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* ヘッダーセクション */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-sm font-medium text-white shadow-2xl mb-8">
              お問い合わせ
            </div>
            <h1 className={`text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Get In Touch
            </h1>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            下記フォームよりお問い合わせください。
            <br />
            担当者より追ってご連絡いたします。
          </p>
          </div>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form 
              className="formrun space-y-8" 
            action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3" 
            method="post"
          >
            {/* お名前 */}
              <div className="group">
                <label className="block mb-3 font-semibold text-white text-lg">
                  お名前 <span className="text-red-400">*</span>
                </label>
              <input 
                name="お名前" 
                type="text" 
                data-formrun-required 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-600"
                  placeholder="山田太郎"
              />
              <div 
                data-formrun-show-if-error="お名前" 
                  className="text-red-400 text-sm mt-2 flex items-center"
              >
                  <span className="mr-2">⚠️</span>
                お名前を入力してください
              </div>
            </div>

            {/* 企業名 */}
              <div className="group">
                <label className="block mb-3 font-semibold text-white text-lg">
                  企業名
                </label>
              <input 
                name="企業名" 
                type="text" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-600"
                  placeholder="株式会社サンプル"
              />
            </div>

            {/* 電話番号 */}
              <div className="group">
                <label className="block mb-3 font-semibold text-white text-lg">
                  電話番号
                </label>
              <input 
                name="電話番号" 
                type="text" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-600"
                  placeholder="03-1234-5678"
              />
            </div>

            {/* メールアドレス */}
              <div className="group">
                <label className="block mb-3 font-semibold text-white text-lg">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
              <input 
                name="メールアドレス" 
                type="email" 
                data-formrun-type="email" 
                data-formrun-required 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-600"
                  placeholder="example@email.com"
              />
              <div 
                data-formrun-show-if-error="メールアドレス" 
                  className="text-red-400 text-sm mt-2 flex items-center"
              >
                  <span className="mr-2">⚠️</span>
                メールアドレスを正しく入力してください
              </div>
            </div>

            {/* お問い合わせ内容 */}
              <div className="group">
                <label className="block mb-3 font-semibold text-white text-lg">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
              <textarea 
                name="お問い合わせ内容" 
                data-formrun-required 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-600 resize-none"
                  rows={6}
                  placeholder="ご相談内容やご質問を詳しくお聞かせください"
              ></textarea>
              <div 
                data-formrun-show-if-error="お問い合わせ内容" 
                  className="text-red-400 text-sm mt-2 flex items-center"
              >
                  <span className="mr-2">⚠️</span>
                お問い合わせ内容を入力してください
              </div>
            </div>

            {/* 同意 */}
              <div className="group">
                <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  name="個人情報利用同意" 
                  data-formrun-required 
                    className="mr-3 w-5 h-5 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500 focus:ring-2"
                />
                  <span className="text-white text-lg">
                    個人情報利用同意 <span className="text-red-400">*</span>
                  </span>
              </label>
              <div 
                data-formrun-show-if-error="個人情報利用同意" 
                  className="text-red-400 text-sm mt-2 flex items-center"
              >
                  <span className="mr-2">⚠️</span>
                同意してください
              </div>
            </div>

            {/* ボット対策 */}
            <div className="_formrun_gotcha" style={{
              position: "absolute",
              height: "1px",
              width: "1px",
              overflow: "hidden"
            }}>
              <label htmlFor="_formrun_gotcha">
                If you are a human, ignore this field
              </label>
              <input 
                type="text" 
                name="_formrun_gotcha" 
                id="_formrun_gotcha" 
                tabIndex={-1} 
              />
            </div>

            {/* 送信ボタン */}
              <div className="pt-6">
            <button 
              type="submit"
              data-formrun-error-text="未入力の項目があります"
              data-formrun-submitting-text="送信中..."
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-blue-500/30"
            >
                  送信する
            </button>
              </div>
          </form>
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

      <Script 
        src="https://sdk.form.run/js/v2/formrun.js"
        strategy="afterInteractive"
      />
    </>
  );
}
