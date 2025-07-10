"use client";

export default function Home() {
  return (
    <>
      {/* メインビジュアル */}
     <div className="relative h-[600px] overflow-hidden">
  <video
    src="/videos/1999.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  ></video>

  <div className="absolute inset-0 flex items-center justify-center z-10">
  <div className="text-center text-gray-900">
    <h1 className="text-[35px] font-bold mb-4">MOGCIA</h1>
    <p className="text-base mb-6">{`一歩先を見据え 未来を確かなものに`}</p>
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
                <div className="text-[120px] font-extrabold text-gray-200 absolute top-0">{item.letter}</div>
                <h3 className="text-xl font-semibold text-gray-800 relative z-10 mb-14">{item.title}</h3>
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

      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex items-center justify-start mb-6">
      <div className="h-px w-10 bg-gray-900 mr-3"></div>
      <div className="text-[20px] text-black uppercase tracking-widest">
        {`私たちができること`}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* 左側：画像 */}
      <div>
        <img
          src="/images/00.svg"
          alt="サービスイメージ"
          className="w-full rounded-lg shadow"
        />
      </div>

      {/* 右側：カードを2カラム */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { text: "AIを活用した課題解決" },
          { text: "SNS運用支援" },
          { text: "Webサイト・LP構築" },
          { text: "商品卸・小売展開" },
          { text: "OEM製造サポート" },
          { text: "スタートアップ成長支援" }
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-10 space-y-4 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:shadow-lg transition"
          >
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 space-y-16">
    <div>
      <h3 className="text-2xl font-bold mb-4">{`AIを活用した課題解決`}</h3>
      <p className="text-gray-700 leading-relaxed">
        {`これまで属人的になりがちだった業務や判断を、AIの力で標準化・自動化。
        データ分析からインサイトを抽出し、課題を可視化することで
        企業の意思決定を強力にサポートします。
        単なるツール導入に終わらせず、組織全体の戦略に沿って
        長期的な価値を生み出す仕組みを構築します。`}
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-4">{`SNS運用支援`}</h3>
      <p className="text-gray-700 leading-relaxed">
        {`SNSは単なる情報発信の場ではなく、ブランドと顧客がつながる重要な接点です。
        私たちは戦略設計からコンテンツ企画・運用・効果分析まで一気通貫で支援し、
        「ただ投稿するだけ」から「ファンを育てる運用」へと導きます。`}
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-4">{`Webサイト・LP構築`}</h3>
      <p className="text-gray-700 leading-relaxed">
        {`魅力を的確に伝えるデザインと、成果に直結する導線設計。
        ユーザーの行動データを活用しながら改善を繰り返し、
        ビジネスゴールに貢献するサイトを作り上げます。`}
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-4">{`商品卸・小売展開`}</h3>
      <p className="text-gray-700 leading-relaxed">
        {`既存の販路だけに頼らず、EC・卸・などマルチチャネルを構築。
        最適な販売戦略を描き、安定した供給と拡大を支えます。`}
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-4">{`OEM製造サポート`}</h3>
      <p className="text-gray-700 leading-relaxed">
        {`企画段階からパッケージデザインまで、
        ワンストップでOEMを支援します。
        コスト・品質・スピードのバランスを取りながら
        理想の商品化をお手伝いします。`}
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold mb-4">{`スタートアップ成長支援`}</h3>
      <p className="text-gray-700 leading-relaxed">
        {`立ち上げ期特有の不安やリソース不足を共に乗り越え、
        適切なタイミングでスケールする戦略を設計。
        目先の売上だけでなく、持続可能な事業成長を一緒に描きます。`}
      </p>
    </div>
  </div>
</section>

<section className="py-20 bg-white border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* 左側：イメージ */}
    <div>
      <img
        src="/images/0602.jpg"
        alt="Signalツールデモ"
        className="w-full rounded-lg shadow"
      />
    </div>

    {/* 右側：テキスト */}
   <div>
  <h2 className="text-3xl font-bold mb-6">{`SNS戦略を加速する Signal.`}</h2>
  <p className="text-gray-700 leading-relaxed mb-6">
    {`Signal.は、SNS運用をこれから始めたい方も、伸び悩んでいる方も安心して使える
    逆算型のAI戦略ツールです。`}
    <br /><br />
    {`ユーザーごとにカスタマイズされたAIが、保存率やいいね率を分析し、`}
    <br />
    {`強みを明確化。`}
    <br />
    {`PDCAを効率よく回しながら、次に打つべき施策を提案します。`}
    <br /><br />
    {`さらにAIだけに任せるのではなく、経験豊富な私たち人間のサポートも組み合わせた
    W体制で運用を支援。SNS運用の時間や人的コストを削減しつつ、
    あなたのブランドに確かなファンを築いていきます。`}
  </p>
  <p className="text-gray-500 text-sm">
    {`※HPよりお問い合わせください`}
    <br />
    {`ブランドサイト：`}
    <a
      href="https://signal-ten-livid.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-[#ff8a15]"
    >
      {`https://signal-ten-livid.vercel.app/`}
    </a>
  </p>
</div>

  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* 左側：コーヒーの画像 */}
    <div>
      <img
        src="/images/2.PNG"
        alt="オリジナルドリップコーヒー"
        className="w-full md:max-w-md rounded-lg shadow"
      />
    </div>

    {/* 右側：テキスト */}
    <div>
      <h2 className="text-3xl font-bold mb-6">{`MOGCIA COFFEE`}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        {`私たちは「MOGCIA COFFEE」というブランド名で`}
        <br />
        {`高品質かつ希少な豆を使用したドリップコーヒーを自社展開してきました`}
        <br /><br />
        {`SNSを駆使したマーケティングで多くの実験を行い`}
        <br />
        {`フォロワー数と購買率は必ずしも比例しないという`}
        <br />
        {`小売業のリアルを徹底的に分析。`}
        <br /><br />
        {`そこで見つけた"勝ち筋"を活かし`}
        <br />
        {`ブランディングと導線設計を緻密に構築しました。`}
        <br /><br />
        {`現在はコーヒー豆の価格高騰や品質維持の観点から、`}
        {`限られた企業様への卸販売のみを行っており、`}
        {`OEMや新規のお取引は一時停止しております。`}
        <br />
        {`※再開時期は未定です。`}
      </p>

      <p className="text-gray-500 text-sm mt-4">
        {`ブランドサイト：`}
        <a
          href="https://mogcia.official.ec"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#ff1515]"
        >
          {`https://mogcia.official.ec/`}
        </a>
      </p>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* 左側：Webイメージ */}
    <div>
      <img
        src="/images/1998.jpg"
        alt="Webサイト構築イメージ"
        className="w-full md:max-w-md rounded-lg shadow"
      />
      <img 
        src="/images/111.png" 
        alt="ベイスオフィシャルパートナー" 
        className="h-90 w-auto"
      />
    </div>
    
    {/* 右側：テキスト */}
    <div>
      <h2 className="text-3xl font-bold mb-6">{`WEB制作`}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        {`私たちはWebサイト制作を「作って終わり」にせず、
        そこからの改善こそが本質だと考えています。
        業種やフェーズによってサイトの目的は様々。
        初めから大きな投資をするよりも、
        まずは小さく始めて運用しながら磨いていく。
        そんな選択肢も一緒に検討できるパートナーでありたいと思っています。`}
        <br /><br />
        {`特にスタートアップ企業様や、
        まだ形が見えていない段階のお客様には、
        ベイスやShopifyなどのノーコードを活用し、
        柔軟に改善できる体制を整えます。
        そして実際の運用データや事業の成長に合わせ、
        段階的に最適なサイトへ育てていくことを大切にしています。`}
        <br /><br />
        {`従来のWEB制作会社とは違い、
        私たちはお客様と同じチームの一員として
        リリース後も伴走し続けるスタイルです。

        そのためプロジェクト数を意図的に絞っており、
        現在は既存のお取引先様や
        ご紹介いただいた企業様を中心に対応しております。`}
        <br /><br />
        {`ベイスのオフィシャルパートナーとして`}
        <br />
        {`サイト運営や販売戦略も安心してお任せください。`}
      </p>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-3xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">{`代表メッセージ`}</h2>
    <p className="text-gray-700 leading-relaxed mb-8">
      {`私はこれまで、ITや通信分野を中心に
      多くの法人・個人のお客様と`}
      <br />
      {`関わりながら、課題解決に取り組んできました。`}
      <br /><br />
      {`業務フローの改善やデジタル戦略の提案を行う中で、`}
      <br />
      {`AIをうまく活かし、企業の課題解決に深く寄与できないかと考えるようになりました。`}
      <br /><br />
      {`特に多くの企業が抱える小売や現場レベルでの課題に興味を持ち、`}
      <br />
      {`自身もあえて小売業に飛び込むことで、そのリアルを肌で感じ、`}
      <br />
      {`どうすればもっと効率化やブランド構築に役立てるのかを追求してきました。`}
      <br /><br />
      {`そうした経験から、ITを活用した業務改善や、
      SNSを駆使したマーケティング施策、`}
      <br />
      {`データ分析を通じてAIを日々の経営判断に取り入れる支援など、`}
      <br />
      {`多角的なサービスを提供する今の形へと繋がっています。`}
      <br /><br />
      {`これからも、変化を恐れず、柔軟に挑戦を続けながら、
      ビジネスを支える確かな仕組みづくりと、
      日々のちょっとした楽しみや豊かさも`}
      <br />
      {`提供していける存在でありたいと願っています。`}
    </p>
    <div className="text-gray-500 text-sm">{`代表取締役　北村健太郎`}</div>
  </div>
</section>

<footer className="border-t border-[#000000] bg-white text-black py-12">
  <div className="max-w-6xl mx-auto px-4 space-y-4 text-center md:text-left">
    <div className="text-sm leading-relaxed">
      <p>{`株式会社MOGCIA ｜ 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル７階 ｜ 設立2023年`}</p>
      <p>{`事業内容：AI・デジタルソリューション、SNSマーケティング、OEM企画 等`}</p>
    </div>
    <div className="text-sm mt-4">
      {`© 2025 MOGCIA Inc. All rights reserved.`}
    </div>
  </div>
</footer>


    </>
  );
}
