"use client";

export default function Home() {
  return (
    <>
      {/* メインビジュアル */}
      <div className="relative h-[600px] overflow-hidden">
        <video
          src="/videos/06.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-white/20 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-[70px] font-bold mb-4">MOGCIA</h1>
            <p className="text-lg mb-6">{`一歩先を見据え 未来を確かなものに`}</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-start mb-2">
            <div className="h-px w-10 bg-gray-900 mr-3"></div>
            <div className="text-[20px] text-black uppercase tracking-widest">{`事業内容`}</div>
          </div>

          <h2 className="text-3xl text-left font-bold mt-10 mb-2 leading-relaxed">
            {`AIを活用した仕組みづくりと、`}<br />{`心を動かすプロダクトでビジネスを次のステージへ`}
          </h2>

          <p className="text-gray-700 text-left mt-10 mb-2 max-w-3xl leading-relaxed">
            {`私たちが培ってきた独自のノウハウで、ビジネスの課題を共に解決し、未来を形にします。`}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{`MOGCIA に込めた想い`}</h2>
          <p className="text-center text-gray-500 mt-8 max-w-2xl mx-auto">
            {`MOGCIA の頭文字には、私たちが大切にしている `}
            <span className="text-[#000000] text-[30px] font-semibold">{`6`}</span>
            {` つの価値が込められています。`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 text-center mt-12">
            {[
              { letter: "M", title: "Mission", catch: "事業の軸を共に描く" },
              { letter: "O", title: "Optimization", catch: "価値を最大化する仕組み" },
              { letter: "G", title: "Growth", catch: "企業と共に成長する" },
              { letter: "C", title: "Consulting", catch: "課題を捉え戦略を築く" },
              { letter: "I", title: "Intelligence", catch: "AIで意思決定支援" },
              { letter: "A", title: "Advancement", catch: "未来へ進化を導く" },
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center p-4">
                <div className="text-[80px] font-extrabold text-gray-200 absolute top-0">{item.letter}</div>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 mt-14">{item.title}</h3>
                <p className="text-gray-500 text-[12px] mt-2 relative z-10 whitespace-nowrap">{item.catch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full overflow-hidden rounded-lg shadow h-full">
            <video
              src="/videos/002.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>

          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold mb-6">{`企業理念`}</h2>
            <p className="text-gray-700 leading-relaxed">
              {`私たちは、マーケティングやAI、デジタルの力を駆使して、多様な業界の課題に寄り添い、
              その本質を一緒に探りながら最適な答えを見つけ出していきます。
              解決するだけにとどまらず、お客様と共に戦略を描き、持続的な成長や新しい価値を共に生み出していくことが私たちの使命です。
              変化の速い時代だからこそ、柔軟な発想と挑戦する姿勢を大切に、未来へ続くパートナーシップを築きながら、次のステージを共に目指します。`}
            </p>
          </div>
        </div>
      </section>

      {/* 以下同様に続く（文字列をすべて `{}` に入れて変換済み） */}
      {/* フルバージョンは長すぎるので別で続けて貼れるよ */}

    </>
  );
}
