import React from 'react'

const ContactCard = () => {
  return (
    <div className="bg-gradient-to-br from-sky-200 to-red-200 px-[48px] py-[96px]">
        <div className="px-[48px]">
            <div className="bg-white rounded-xl p-[96px] flex flex-col justify-center">
                <h4 className="text-center mb-[24px] text-lg font-bold">弊社へのお問い合わせは<br></br>こちらのフォームより承っております。</h4>
                <p className="text-center mb-[48px] text-sm font-bold">ご返信に3営業日ほどお時間をいただいております。3営業日を過ぎても返信がない場合は、お手数ですが再度お問い合わせをお願いいたします。</p>
                <form action="" className="flex flex-col justify-center">
                    <div className="mb-6">
                        <p className="font-black">お名前</p>
                        <input type="text" placeholder="Your Name" className="bg-stone-100 h-[50px] w-full rounded-xl border border-stone-300 p-[12px]" />
                    </div>
                    <div className="mb-6">
                        <p className="font-black">メールアドレス</p>
                        <input type="email" placeholder="Email Addres" className="bg-stone-100 h-[50px] w-full rounded-xl border border-stone-300 p-[12px]" />
                    </div>
                    <div className="mb-6">
                        <p className="font-black">電話番号</p>
                        <input type="tel" placeholder="000-0000-0000" pattern="[\d\-]*" className="bg-stone-100 h-[50px] w-full rounded-xl border border-stone-300 p-[12px]" />
                    </div>
                    <div className="mb-12">
                        <p className="font-black">お問い合わせ内容</p>
                        <textarea name="" id="" placeholder="Put message here" className="bg-stone-100 h-[160px] w-full rounded-xl border border-stone-300 p-[10px]"></textarea>
                    </div>
                    <label  htmlFor="">
                        <input type="checkbox" required />
                        <span>プライバシーポリシーに同意して送信する</span>
                    </label>
                    <button className="text-white bg-black rounded-lg font-black h-[50px] drop-shadow-2xl duration-200 hover:drop-shadow-none">この内容で送信する</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactCard