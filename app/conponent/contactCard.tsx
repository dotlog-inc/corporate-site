import React from 'react'

const ContactCard = () => {
  return (
    <div className="bg-gray-200 px-[48px] pb-[96px]">
        <div className="bg-white px-[48px]">
            <div className="p-[96px] flex flex-col justify-center">
                <h4 className="text-center">弊社へのお問い合わせは<br></br>こちらのフォームより承っております。</h4>
                <p className="text-center">ご返信に3営業日ほどお時間をいただいております。3営業日を過ぎても返信がない場合は、お手数ですが再度お問い合わせをお願いいたします。</p>
                <form action="" className="flex flex-col justify-center">
                    <div>
                        <p>お名前</p>
                        <input type="text" className="bg-gray-200" />
                    </div>
                    <div>
                        <p>メールアドレス</p>
                        <input type="text" className="bg-gray-200" />
                    </div>
                    <div>
                        <p>電話番号</p>
                        <input type="text" className="bg-gray-200" />
                    </div>
                    <div>
                        <p>お問い合わせ内容</p>
                        <textarea name="" id="" className="bg-gray-200"></textarea>
                    </div>
                    <label htmlFor="">
                        <input type="text" />
                        <span>プライバシーポリシーに同意して送信する</span>
                    </label>
                    <button className="text-white bg-black rounded-lg ">この内容で送信する</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactCard