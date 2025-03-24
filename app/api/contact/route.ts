import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function GET() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL2 as string);
    const data = await res.json();
    return NextResponse.json(data);
};
export async function POST(request:NextRequest) {
    // Parse the request body
    const body = await request.json();
    // Set up the email transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD,
        }
    });
    // Email to the host/admin
    const toHostMailData = {
        from: process.env.GMAILUSER,
        to: process.env.GMAILUSER,
        subject: `[お問い合わせ]${body.name}様より`,
        text: `${body.message} Send from ${body.email}`,
        html: `
        <p>【名前】</p>
        <p>${body.name}</p>
        <p>【メッセージ内容】</p>
        <p>${body.message}</p>
        <p>【メールアドレス】</p>
        <p>${body.email}</p>
        `
    };
    // Confirmation email to the form submitter
    const toUserMailData = {
        from: process.env.GMAILUSER,
        to: body.email,
        subject: `[自動送信]お問い合わせありがとうございます`,
        text: `${body.name}様\n\nお問い合わせありがとうございます。\n以下の内容でお問い合わせを受け付けました。\n\n【お問い合わせ内容】\n${body.message}\n\n後ほど担当者よりご連絡いたします。`,
        html: `
        <p>${body.name}様</p>
        <p>お問い合わせありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>
        <p>【お問い合わせ内容】</p>
        <p>${body.message}</p>
        <p>後ほど担当者よりご連絡いたします。</p>
        `
    };
    try {
        // Send email to host
        await transporter.sendMail(toHostMailData);
        // Send confirmation email to user
        await transporter.sendMail(toUserMailData);
        return NextResponse.json({ message: "送信に成功しました" }, { status: 200 });
    } catch (error) {
        console.error("Email sending failed:", error);
        return NextResponse.json({ message: "送信に失敗しました" }, { status: 500 });
    }
};