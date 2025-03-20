import { NextResponse } from "next/server";

export async function GET() {
    const res  = await fetch("http://localhost:1337/api/news-creates?populate=*");
    const data = await res.json();
  return NextResponse.json(data);
}