import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import nodemailer from "nodemailer"

export async function GET() {
    const res  = await fetch("process.env.NEXT_PUBLIC_API_URL2");
    const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request:NextApiRequest){

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth:{
            user:process.env.GMAILUSER,
            pass:process.env.GMAILPASSWORD,
        }
    })

    //管理人が受け取るメール
    const toHostMailData = {
        from: request.body.email,
        to: process.env.GMAILUSER,
        subject:`[お問い合わせ]${request.body.name}様より`,
        text:`${request.body.message} Send from ${request.body.email}`,
        html:`
        <p>【名前】</p>
        <p>${request.body.name}</p>
        <p>【メッセージ内容】</p>
        <p>${request.body.message}</p>
        <p>【メールアドレス】</p>
        <p>${request.body.email}</p>
        `
    }

    transporter.sendMail(toHostMailData,function(err,info){
        if(err) console.log(err);
        else console.log(info);
    }
);

    return Response.json("成功しました")
};