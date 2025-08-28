"use client";

import { useState, useEffect } from 'react';

export default function CompanyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companyInfo = {
    name: "株式会社MOGCIA",
    englishName: "MOGCIA Inc.",
    founded: "2023年11月",
    phone: "092-517-9804",
    email: "info@mogcia.jp",
    address: "福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階"
  };

  const companyValues = [
    {
      title: "Mission",
      subtitle: "ミッション",
      description: "テクノロジーで未来を創造する",
      icon: "🚀",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Vision",
      subtitle: "ビジョン",
      description: "AI×デジタルで、すべての企業の成長を加速する",
      icon: "🎯",
      color: "from-green-600 to-green-800"
    },
    {
      title: "Values",
      subtitle: "バリュー",
      description: "MOGCIAの6つの価値観",
      icon: "💎",
      color: "from-purple-600 to-purple-800"
    }
  ];

  const mogciaValues = [
    { letter: "M", word: "Mission", description: "使命を果たす" },
    { letter: "O", word: "Originality", description: "独創性を追求" },
    { letter: "G", word: "Growth", description: "共に成長する" },
    { letter: "C", word: "Challenge", description: "挑戦し続ける" },
    { letter: "I", word: "Innovation", description: "革新を創造" },
    { letter: "A", word: "Achievement", description: "成果を実現" }
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
              { left: "68%", top: "28%", delay: "1.7s", duration: "5.5s" },
              { left: "78%", top: "88%", delay: "2.2s", duration: "4s" },
              { left: "88%", top: "42%", delay: "2.7s", duration: "6s" },
              { left: "98%", top: "68%", delay: "0.1s", duration: "5s" },
              { left: "3%", top: "15%", delay: "0.6s", duration: "4.5s" },
              { left: "13%", top: "65%", delay: "1.1s", duration: "5.5s" },
              { left: "23%", top: "35%", delay: "1.6s", duration: "4s" },
              { left: "33%", top: "95%", delay: "2.1s", duration: "6s" },
              { left: "43%", top: "25%", delay: "2.6s", duration: "5s" },
              { left: "53%", top: "75%", delay: "0.3s", duration: "4.5s" },
              { left: "63%", top: "45%", delay: "0.8s", duration: "5.5s" },
              { left: "73%", top: "85%", delay: "1.3s", duration: "4s" },
              { left: "83%", top: "55%", delay: "1.8s", duration: "6s" },
              { left: "93%", top: "15%", delay: "2.3s", duration: "5s" },
              { left: "7%", top: "95%", delay: "2.8s", duration: "4.5s" },
              { left: "17%", top: "5%", delay: "0.4s", duration: "5.5s" },
              { left: "27%", top: "55%", delay: "0.9s", duration: "4s" },
              { left: "37%", top: "25%", delay: "1.4s", duration: "6s" },
              { left: "47%", top: "85%", delay: "1.9s", duration: "5s" },
              { left: "57%", top: "35%", delay: "2.4s", duration: "4.5s" },
              { left: "67%", top: "75%", delay: "2.9s", duration: "5.5s" },
              { left: "77%", top: "15%", delay: "0.2s", duration: "4s" },
              { left: "87%", top: "65%", delay: "0.7s", duration: "6s" },
              { left: "97%", top: "45%", delay: "1.2s", duration: "5s" }
            ].map((particle, idx) => (
              <div
                key={idx}
                className="particle absolute w-2 h-2 bg-indigo-500/60 rounded-full"
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-sm font-medium mb-6">
              会社概要
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {`About`}<span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">{` Us`}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AIとデジタル技術で、お客様のビジネスの未来を創造する
            </p>
          </div>
        </div>
      </section>

    

      {/* ミッション・ビジョン・バリュー */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-sm font-medium mb-6">
              企業理念
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              {`私たちの`}<span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">{` 目指す未来`}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {companyValues.map((value, idx) => (
              <div key={idx} className={`group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-indigo-500/50 transition-all duration-1000 delay-${400 + idx * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-indigo-400 text-sm font-medium mb-4">{value.subtitle}</p>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* MOGCIAの6つの価値観 */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-8">MOGCIAの6つの価値観</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {mogciaValues.map((value, idx) => (
                <div key={idx} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-3 mx-auto">
                    {value.letter}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{value.word}</h4>
                  <p className="text-xs text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* 会社基本情報 */}
  <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-sm font-medium mb-6">
              基本情報
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">
              {`会社の`}<span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">{` 基本情報`}</span>
            </h2>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* 左側：会社名・基本情報 */}
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">{companyInfo.name}</h3>
                  <p className="text-indigo-400 text-lg">{companyInfo.englishName}</p>
                </div>
                
                <div className="space-y-4 text-[14px]">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <span className="text-gray-400">設立</span>
                    <span className="text-white font-semibold">{companyInfo.founded}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <span className="text-gray-400">電話番号</span>
                    <span className="text-white font-semibold">{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <span className="text-gray-400">メールアドレス</span>
                    <span className="text-white font-semibold">{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <span className="text-gray-400">所在地</span>
                    <span className="text-white font-semibold">{companyInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* 右側：事業内容・強み */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">事業内容</h4>
                  <div className="space-y-3">
                    {[
                      "AI・DXソリューションの企画・開発",
                      "デジタルマーケティング支援",
                      "Webサイト・システム開発",
                      "OEM企画・製造サポート"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600/10 to-indigo-800/10 rounded-2xl p-6 border border-indigo-500/20">
                  <h4 className="text-lg font-semibold text-white mb-3">私たちの強み</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    最新のAI技術とDXソリューションで、お客様の業務効率化と
                    デジタル変革をサポートします。小さな会社だからこそ、
                    お客様一人ひとりに寄り添った柔軟なサービスを提供できます。
                  </p>
                </div>
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

      <style jsx>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.1) rotate(180deg);
            opacity: 1;
          }
        }
        
        .particle:nth-child(3n) {
          animation: float 8s ease-in-out infinite;
        }
        
        .particle:nth-child(3n+1) {
          animation: float 10s ease-in-out infinite;
        }
        
        .particle:nth-child(3n+2) {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
