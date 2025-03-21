"use client"

import React, { useRef } from 'react'
import { FormEvent } from "react";

const ContactCard = () => {
    const nameRef=useRef<HTMLInputElement>(null);
    const emailRef=useRef<HTMLInputElement>(null);
    const messageRef=useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //console.log(nameRef.current?.value);

        let data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        }

        await fetch("api/contact",{
            method:"POST",
            headers:{
                Accept:"application/json, text/plain",
                "Content-Type": "application/json",    
            },
            body: JSON.stringify(data),
        }).then((res)=>{
            if(res.status === 200) console.log("メール送信成功")
        }); 
    };

  return (
    <div id="contact" className="bg-gradient-to-br from-sky-200 to-red-200 md:px-[48px] px-[24px] pb-[96px] h-[1500px]">
        <div className="flex justify-center mb-[200px]">
            <section className="contact1">contact</section>
        </div>
        <div className="md:px-[48px] px-[0px] color1">
            <div className="font-face bg-white rounded-xl md:p-[96px] p-[48px] flex flex-col justify-center drop-shadow-2xl">
                <h4 className="text-center mb-[24px] text-lg md:text-[28px] leading-[1.5] tracking-widest font-bold">弊社へのお問い合わせは<br></br>こちらのフォームより承っております。</h4>
                <p className="text-center mb-[48px] text-sm md:text-base font-bold">ご返信に3営業日ほどお時間をいただいております。<br></br>3営業日を過ぎても返信がない場合は、お手数ですが再度お問い合わせをお願いいたします。</p>
                <form action="" className="flex flex-col justify-center" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                    <div className="mb-6">
                        <p className="font-black inline-block">お名前</p>
                        <p className="text-red-500 font-black inline-block ml-[5px]">*</p>
                        <input type="text" placeholder="Your Name" className="bg-stone-100 h-[50px] w-full rounded-xl border border-stone-300 p-[12px]" required ref={nameRef}/>
                    </div>
                    <div className="mb-6">
                        <p className="font-black inline-block">メールアドレス</p>
                        <p className="text-red-500 font-black inline-block ml-[5px]">*</p>
                        <input type="email" placeholder="Email Addres" className="bg-stone-100 h-[50px] w-full rounded-xl border border-stone-300 p-[12px]" required ref={emailRef}/>
                    </div>
                    <div className="mb-6">
                        <p className="font-black inline-block">電話番号</p>
                        <p className="text-red-500 font-black inline-block ml-[5px]">*</p>
                        <input type="tel" placeholder="000-0000-0000" pattern="[\d\-]*" className="bg-stone-100 h-[50px] w-full rounded-xl border border-stone-300 p-[12px]" required/>
                    </div>
                    <div className="mb-12">
                        <p className="font-black inline-block">お問い合わせ内容</p>
                        <p className="text-red-500 font-black inline-block ml-[5px]">*</p>
                        <textarea name="" id="" placeholder="Put message here" className="bg-stone-100 h-[160px] w-full rounded-xl border border-stone-300 p-[10px]" required ref={messageRef}></textarea>
                    </div>
                    <label  htmlFor="checkbox" className="flex justify-center">
                        <input id="checkbok" type="checkbox" required />
                        <span>プライバシーポリシーに同意して送信する</span>
                    </label>
                    <button type="submit" className="text-white bg-black rounded-lg font-black h-[50px] drop-shadow-2xl duration-200 hover:drop-shadow-none w-[180px] sm:w-[200px]">この内容で送信する</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactCard