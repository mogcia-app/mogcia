// /app/contact/page.tsx
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
            <div>
              <label className="block mb-1 font-medium">お名前</label>
              <input 
                name="お名前" 
                type="text" 
                className="w-full border rounded p-2" 
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">メールアドレス [必須]</label>
              <input 
                name="メールアドレス" 
                type="text" 
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

            <div>
              <label className="block mb-1 font-medium">お問い合わせ [必須]</label>
              <textarea 
                name="お問い合わせ" 
                data-formrun-required 
                className="w-full border rounded p-2" 
                rows={5}
              ></textarea>
              <div 
                data-formrun-show-if-error="お問い合わせ" 
                className="text-red-600 text-sm mt-1"
              >
                お問い合わせ内容を入力してください
              </div>
            </div>

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

            <button 
              type="submit"
              data-formrun-error-text="未入力の項目があります"
              data-formrun-submitting-text="送信中..."
              className="bg-[#ff8a15] text-white px-6 py-3 rounded hover:bg-orange-600 transition"
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
