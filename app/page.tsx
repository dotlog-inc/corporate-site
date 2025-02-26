import Image from "next/image";
import Link from "next/link" ;
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
        <header className="sticky top-0 flex mx-6">
          <h1 className="text-sky-500 font-[1000] inline-block text-2xl my-4">Dot Log inc.</h1>
          <div className="inline-block font-black text-sky-500 ml-auto">
            <Link href="" className="text-base inline-block px-3 py-4">TOP</Link>
            <Link href="" className="text-base inline-block px-3 py-4">PHILOSOPHY</Link>
            <Link href="" className="text-base inline-block px-3 py-4">SERVICE</Link>
            <Link href="" className="text-base inline-block px-3 py-4">NEWS</Link>
            <Link href="" className="text-base inline-block px-3 py-4">ABOUT</Link>
            <Link href="" className="text-base inline-block px-3 py-4">CONTACT</Link>
          </div>
        </header>
        <main>
          <div>
            <div
              className="bg-cover bg-center h-[500px] flex flex-col items-center  mx-8 my-8 rounded-3xl pt-[96px] px-[48px] pb-[72px]"
              style={{backgroundImage: 'url(/waterImage.jpg)', }}
            >
                <Image
                    src="/dotlogImage.png"
                    alt="Sample Image"
                    width={185}
                    height={47}
                    className=""
                />
                <h1 className="text-white text-xl.">株式会社ドットログ</h1>
                <div className="font-black">
                  <div className="text-white text-2xl">OUR MISSION</div>
                  <div className="text-white text-5xl">今日よりちょっと<br></br>やさしい明日を。</div>
                </div>
            </div>
          </div>
          <section id="philo" className="flex flex-col items-center">
          <h1>PHILOSOPHY</h1>
          <div className="box">
           <h2>Dot Log</h2>
            <p>企業名の『Dot Log』とは、あるプログラミング言語においてメッセージを出力するために使用される"console.log()"から由来しており、（）の中に入力されたものがスマートフォンやパソコンに出力（表示）されます。<br></br>
              私たちは、わくわくする世界を創るためのアイデアを思いつく限り（　）の中に入れ、世界にどんどん出力していくというミッションを掲げ、日々取り組んでおります。</p>
          </div>
        <div className="philos">
          <div className="philo-1 title"> 
              <h3>VISION</h3>
              <p>迷ったら、わくわくするほうへ。</p>
          </div>
          <div className="philo-2 title"> 
            <h3>MISSION</h3>
            <p>今日よりちょっと優しい明日を</p>
          </div> 

          <div className="philo-3 title">
            <h3>VALUE</h3>
              {/* 四つの図入れる */}
              <div className="flex">
                <ul>
                  <li className="four-chart box2"><p className="text">縁</p><p className="text-base">relationship</p><p className="text-sm"> すべての「人、モノ、コト」とのご縁を大切にし、常に助け合いの精神で取り組む。</p></li>
                  <li className="four-chart box2"><p className="text">冒険</p><p className="text-base">adventure</p><p className="text-sm"> 我々は常にわくわくする方を選び、挑戦を忘れない”アド”ベンチャー企業です。</p></li>
                  <li className="four-chart box2"><p className="text">自然</p><p className="text-base">nature</p><p className="text-sm"> 自然を大切にし、自然を楽しみ、自然と遊ぶ。
                  自分らしく、自然体でいきていく。</p></li>
                  <li className="four-chart box2"><p className="text">貢献</p><p className="text-base">contribution</p><p className="text-sm"> 常に誰かのために行動し、社会に貢献し続けます。</p></li>
                </ul>
              </div>
          </div>
        </div>
      </section>


        <section id="service" className="container">
        <h1>SERVICE</h1>
          <div>
            <h2>Alzuchi</h2>
              <p>
                心理カウンセラー監修のAIを活用したメンタルヘル<br>
                </br>スケアアプリ「AIzuchi」AIとの会話を通じて自分を<br>
                </br>もっと知る事ができ、頭の中を整理することができる<br>
                </br>全く新しいジャーナリングアプリ             
              </p>
          </div>
          <div>
            <h2>企業ブランディング</h2>
              <p>
                Z世代ならでは視点から企業の「ブランディング」の<br>
                </br>側面を整理し、提供するサービスや会社自体に、より<br>
                </br>誇りを持っていただけるようサポートいたします。<br>
                </br>サブスク型ホームページ制作サービス<br>
                </br>「Grab」
              </p>
          </div>
          <div>
            <h2>SNSメディア</h2>
              <p>
                Instagram・TikTokにて、お悩み解消する情報やお出<br>
                </br>かけ情報など、人生をより豊かにするための情報を発<br>
                </br>信しております。
              </p>
          </div>
       </section>
          
        </main>
        <footer >
          <div className="bg-black flex flex-col items-center h-[486px]" >
            <div className="mt-[78px]">
              <Image
                    src="/dotlogImage.png"
                    alt="Sample Image"
                    width={200}
                    height={100}
                    className="object-contain mt-[40px] mb-[30px]"
              />
            </div>
            <div className="font-black mb-[100px]">
              <Link href="" className="text-white inline-block text-xl px-3">トップ</Link>
              <Link href="" className="text-white inline-block text-xl px-3">理念</Link>
              <Link href="" className="text-white inline-block text-xl px-3">事業内容</Link>
              <Link href="" className="text-white inline-block text-xl px-3">ニュース</Link>
              <Link href="" className="text-white inline-block text-xl px-3">会社概要</Link>
              <Link href="" className="text-white inline-block text-xl px-3">お問合せ</Link>
            </div>
            <div className="text-white font-black">©Dot Log inc.</div>
          </div>
    </footer>
  </Fragment>
  )    
}
