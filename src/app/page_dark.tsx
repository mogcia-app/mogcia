"use client";

import { useState, useEffect } from 'react';

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
        <video
          src="/videos/1999.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-30"
        ></video>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-sm font-medium text-white shadow-2xl">
                AI × Digital Solutions
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-red-100 to-pink-100 bg-clip-text text-transparent">
              MOGCIA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              {`一歩先を見据え 未来を確かなものに`}
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
                サービスを見る
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-red-500/10 transition-all duration-300">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 事業内容セクション */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-red-500 to-pink-500 mr-4"></div>
            <div className="text-lg text-gray-400 uppercase tracking-widest font-medium">{`事業内容`}</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {`AIを活用した仕組みづくりと、`}<br />
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              {`心を動かすプロダクトでビジネスを次のステージへ`}
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-4xl leading-relaxed">
            {`私たちが培ってきた独自のノウハウで、ビジネスの課題を共に解決し、未来を形にします。`}
          </p>

          {/* サービスカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AIソリューション", desc: "機械学習とデータ分析で業務効率化", color: "from-red-500 to-pink-500" },
              { icon: "📱", title: "デジタルマーケティング", desc: "SNS戦略とブランディング支援", color: "from-pink-500 to-purple-500" },
              { icon: "💻", title: "Web開発", desc: "モダンな技術スタックでのサイト構築", color: "from-purple-500 to-red-500" }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-red-500/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOGCIAの価値セクション */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{`MOGCIA に込めた想い`}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {`MOGCIA の頭文字には、私たちが大切にしている `}
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">{`6`}</span>
              {` つの価値が込められています。`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {[
              { letter: "M", title: "Mission", catch: "事業の軸を共に描く", color: "from-red-500 to-pink-500" },
              { letter: "O", title: "Optimization", catch: "価値を最大化する仕組み", color: "from-pink-500 to-purple-500" },
              { letter: "G", title: "Growth", catch: "企業と共に成長する", color: "from-purple-500 to-blue-500" },
              { letter: "C", title: "Consulting", catch: "課題を捉え戦略を築く", color: "from-blue-500 to-cyan-500" },
              { letter: "I", title: "Intelligence", catch: "AIで意思決定支援", color: "from-cyan-500 to-green-500" },
              { letter: "A", title: "Advancement", catch: "未来へ進化を導く", color: "from-green-500 to-red-500" }
            ].map((item, idx) => (
              <div key={idx} className="group text-center">
                <div className={`relative mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  <div className={`text-8xl md:text-9xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-10 group-hover:opacity-100 transition-opacity duration-500`}>
                    {item.letter}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}>
                      <span className="text-2xl font-bold text-white">{item.letter}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.catch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企業理念セクション */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 rounded-full text-sm font-medium">
                {`企業理念`}
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                {`テクノロジーで`}<br />
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  {`未来を創造する`}
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {`私たちは、マーケティングやAI、デジタルの力を駆使して、多様な業界の課題に寄り添い、
                その本質を一緒に探りながら最適な答えを見つけ出していきます。
                解決するだけにとどまらず、お客様と共に戦略を描き、持続的な成長や新しい価値を共に生み出していくことが私たちの使命です。`}
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <span className="text-gray-300 font-medium">{`イノベーションを追求`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 rounded-full text-sm font-medium mb-6">
              {`私たちができること`}
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              {`未来志向の`}<span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">{`デジタルソリューション`}</span>
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
              <div key={idx} className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-red-500/50">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="mt-6 flex items-center text-red-500 font-medium group-hover:text-pink-500 transition-colors duration-300">
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
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/0602.jpg"
                alt="Signalツールデモ"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
                NEW
              </div>
            </div>

            <div className="text-white space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                {`AI戦略ツール`}
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                {`SNS戦略を加速する`}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  {`Signal.`}
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {`Signal.は、SNS運用をこれから始めたい方も、伸び悩んでいる方も安心して使える
                逆算型のAI戦略ツールです。ユーザーごとにカスタマイズされたAIが、保存率やいいね率を分析し、
                強みを明確化。PDCAを効率よく回しながら、次に打つべき施策を提案します。`}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-red-400">🤖</span>
                  <span className="text-sm">AI分析</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-pink-400">📊</span>
                  <span className="text-sm">データ駆動</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-purple-400">🎯</span>
                  <span className="text-sm">戦略提案</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.sgnalapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>詳細を見る</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOGCIA COFFEEセクション */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="/images/2.PNG"
                alt="オリジナルドリップコーヒー"
                className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-medium">
                {`オリジナルブランド`}
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                {`MOGCIA`}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  {`COFFEE`}
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {`私たちは「MOGCIA COFFEE」というブランド名で高品質かつ希少な豆を使用したドリップコーヒーを自社展開してきました。
                SNSを駆使したマーケティングで多くの実験を行い、フォロワー数と購買率は必ずしも比例しないという
                小売業のリアルを徹底的に分析。そこで見つけた"勝ち筋"を活かし、ブランディングと導線設計を緻密に構築しました。`}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-amber-900/20 backdrop-blur-sm rounded-lg border border-amber-500/30">
                  <div className="text-2xl mb-2">☕</div>
                  <div className="text-sm font-medium text-amber-400">高品質豆</div>
                </div>
                <div className="text-center p-4 bg-orange-900/20 backdrop-blur-sm rounded-lg border border-orange-500/30">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm font-medium text-orange-400">SNS戦略</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://mogcia.official.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
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
      </section>

      {/* WEB制作セクション */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium">
                {`Web制作・開発`}
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                {`モダンな`}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  {`Webサイト構築`}
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {`私たちはWebサイト制作を「作って終わり」にせず、そこからの改善こそが本質だと考えています。
                業種やフェーズによってサイトの目的は様々。初めから大きな投資をするよりも、
                まずは小さく始めて運用しながら磨いていく。そんな選択肢も一緒に検討できるパートナーでありたいと思っています。`}
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
              <img
                src="/images/1998.jpg"
                alt="Webサイト構築イメージ"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-gray-900 p-4 rounded-xl shadow-2xl border border-gray-700">
                <img 
                  src="/images/111.png" 
                  alt="ベイスオフィシャルパートナー" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表メッセージセクション */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 rounded-full text-sm font-medium mb-8">
            {`代表メッセージ`}
          </div>
          <h2 className="text-4xl font-bold text-white mb-12 leading-tight">
            {`テクノロジーで`}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              {`未来を創造する`}
            </span>
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {`私はこれまで、ITや通信分野を中心に多くの法人・個人のお客様と関わりながら、課題解決に取り組んできました。
              業務フローの改善やデジタル戦略の提案を行う中で、AIをうまく活かし、企業の課題解決に深く寄与できないかと考えるようになりました。`}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {`特に多くの企業が抱える小売や現場レベルでの課題に興味を持ち、自身もあえて小売業に飛び込むことで、そのリアルを肌で感じ、
              どうすればもっと効率化やブランド構築に役立てるのかを追求してきました。`}
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
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
                {`© 2025 MOGCIA Inc. All rights reserved.`}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
