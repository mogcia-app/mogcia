"use client";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-gray-700 mb-12">
            下記フォームよりお問い合わせください。
            <br />
            担当者より追ってご連絡いたします。
          </p>

          <form 
            className="formrun space-y-6" 
            action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3" 
            method="post"
          >
            {/* お名前 */}
            <div>
              <label className="block mb-1 font-medium">お名前 [必須]</label>
              <input 
                name="お名前" 
                type="text" 
                data-formrun-required 
                className="w-full border rounded p-2"
              />
              <div 
                data-formrun-show-if-error="お名前" 
                className="text-red-600 text-sm mt-1"
              >
                お名前を入力してください
              </div>
            </div>

            {/* 企業名 */}
            <div>
              <label className="block mb-1 font-medium">企業名</label>
              <input 
                name="企業名" 
                type="text" 
                className="w-full border rounded p-2"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block mb-1 font-medium">電話番号</label>
              <input 
                name="電話番号" 
                type="text" 
                className="w-full border rounded p-2"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block mb-1 font-medium">メールアドレス [必須]</label>
              <input 
                name="メールアドレス" 
                type="email" 
                data-formrun-type="email" 
                data-formrun-required 
                className="w-full border rounded p-2"
              />
              <div 
                data-formrun-show-if-error="メールアドレス" 
                className="text-red-600 text-sm mt-1"
              >
                メールアドレスを正しく入力してください
              </div>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label className="block mb-1 font-medium">お問い合わせ内容 [必須]</label>
              <textarea 
                name="お問い合わせ内容" 
                data-formrun-required 
                className="w-full border rounded p-2"
                rows={5}
              ></textarea>
              <div 
                data-formrun-show-if-error="お問い合わせ内容" 
                className="text-red-600 text-sm mt-1"
              >
                お問い合わせ内容を入力してください
              </div>
            </div>

            {/* 同意 */}
            <div>
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  name="個人情報利用同意" 
                  data-formrun-required 
                  className="mr-2"
                />
                個人情報利用同意 [必須]
              </label>
              <div 
                data-formrun-show-if-error="個人情報利用同意" 
                className="text-red-600 text-sm mt-1"
              >
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
            <button 
              type="submit"
              data-formrun-error-text="未入力の項目があります"
              data-formrun-submitting-text="送信中..."
              className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
            >
              送信
            </button>
          </form>
        </div>
      </section>

      <Script 
        src="https://sdk.form.run/js/v2/formrun.js"
        strategy="afterInteractive"
      />
    </>
  );
}
