import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// メールフォームのデータ型を定義
interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function GET() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL2 as string);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return NextResponse.json(
      { error: "データの取得に失敗しました" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // リクエストボディの解析
    const body = (await request.json()) as FormData;

    // OAuth2クライアントの設定
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID as string,
      process.env.GMAIL_CLIENT_SECRET as string,
      process.env.GMAIL_REDIRECT_URI as string
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN as string,
    });

    // アクセストークンの取得
    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth2Client.getAccessToken(
        (err: Error | null, token: string | null | undefined) => {
          if (err) {
            console.error("トークン取得エラー:", err);
            reject(err);
          }
          resolve(token as string);
        }
      );
    });

    // トランスポーターの設定
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAILUSER as string,
        clientId: process.env.GMAIL_CLIENT_ID as string,
        clientSecret: process.env.GMAIL_CLIENT_SECRET as string,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN as string,
        accessToken: accessToken,
      },
    });

    // 管理者宛メール
    const toHostMailData = {
      from: process.env.GMAILUSER as string,
      to: process.env.GMAILUSER as string,
      subject: `[お問い合わせ]${body.name}様より`,
      text: `${body.message} Send from ${body.email}`,
      html: `
      <p>【名前】</p>
      <p>${body.name}</p>
      <p>【メッセージ内容】</p>
      <p>${body.message}</p>
      <p>【メールアドレス】</p>
      <p>${body.email}</p>
      `,
    };

    // ユーザー宛確認メール
    const toUserMailData = {
      from: process.env.GMAILUSER as string,
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
      `,
    };

    try {
      // メール送信
      const hostInfo = await transporter.sendMail(toHostMailData);
      console.log("管理者へのメール送信成功:", hostInfo);

      const userInfo = await transporter.sendMail(toUserMailData);
      console.log("ユーザーへのメール送信成功:", userInfo);

      return NextResponse.json(
        { message: "送信に成功しました" },
        { status: 200 }
      );
    } catch (error) {
      console.error("メール送信エラー:", error);
      return NextResponse.json(
        {
          message: `送信に失敗しました: ${
            error instanceof Error ? error.message : "不明なエラー"
          }`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("リクエスト処理エラー:", error);
    return NextResponse.json(
      {
        message: `リクエスト処理に失敗しました: ${
          error instanceof Error ? error.message : "不明なエラー"
        }`,
      },
      { status: 500 }
    );
  }
}
