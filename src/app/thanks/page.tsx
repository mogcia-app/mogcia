export default function ThanksPage() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#ff8a15]">お問い合わせありがとうございます</h1>
        <p className="text-gray-700 mb-8">
          内容を確認し、担当者より<br />
          1〜2営業日以内にご連絡いたします。
          <br /><br />
          自動返信メールもお送りしておりますので、ご確認ください。
        </p>
        <a 
          href="/" 
          className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
        >
          トップページへ戻る
        </a>
      </div>
    </section>
  );
}
