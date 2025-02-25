import Image from "next/image";
import Link from "next/link" ;

export default function Home() {
  return (
    <>
      <header>

      <h1 className="text-blue-200 inline-block text-2xl">Dot Log inc.</h1>
        <ul className="inline-block">
          <li className="text-base inline-block px-12">TOP</li>
          <li className="text-base inline-block px-12">PHILOSOPHY</li>
          <li className="text-base inline-block px-12">SERVICE</li>
          <li className="text-base inline-block px-12">NEWS</li>
          <li className="text-base inline-block px-12">ABOUT</li>
          <li className="text-base inline-block px-12">CONTACT</li>
        </ul>
        <div>
          <div
            className="bg-cover bg-center h-[500px] flex flex-col items-center "
            style={{backgroundImage: 'url(/waterImage.jpg)', }}
          >
            <Image
                src="/dotlogImage.png"
                alt="Sample Image"
                width={185}
                height={47}
            />
            <h1 className="text-white text-2xl">株式会社ドットログ</h1>
          </div>
        </div>
      </header>
      <main>
        <section id="philo" className="container">
          <h1>PHILOSOPHY</h1>
          <div className="box">
           <h2>Dot Log</h2>
            <p>企業名の『Dot Log』とは、あるプログラミング言語においてメッセージを出力する
              ために使用される"console.log()"から由来しており、（）の中に入力されたものがスマー
              トフォンやパソコンに出力（表示）されます
              私たちは、わくわくする世界を創るためのアイデアを思いつく限り（　）の中に入
              れ、世界にどんどん出力していくというミッションを掲げ、日々取り組んでおりま
              す。</p>
          </div>
          <div> 
            <h2>VISION</h2>
              <p>迷ったら、わくわくするほうへ</p>
          </div>

          <div> 
            <h2>MISSION</h2>
             <p>今日よりちょっと優しい明日を</p>
           </div> 

          <div>
            <h2>VALUE</h2>
              {/* 四つの図入れる */}
          </div>
      </section>


        <section id="service" className="container">
        <h1>SERVICE</h1>
          <div>
            <h3>Alzuchi</h3>
              <p>
                心理カウンセラー監修のAIを活用したメンタルヘル<br>
                </br>スケアアプリ「AIzuchi」AIとの会話を通じて自分を<br>
                </br>もっと知る事ができ、頭の中を整理することができる<br>
                </br>全く新しいジャーナリングアプリ             
              </p>
          </div>
          <div>
            <h3>企業ブランディング</h3>
              <p>
                Z世代ならでは視点から企業の「ブランディング」の<br>
                </br>側面を整理し、提供するサービスや会社自体に、より<br>
                </br>誇りを持っていただけるようサポートいたします。<br>
                </br>サブスク型ホームページ制作サービス<br>
                </br>「Grab」
              </p>
          </div>
          <div>
            <h3>SNSメディア</h3>
              <p>
                Instagram・TikTokにて、お悩み解消する情報やお出<br>
                </br>かけ情報など、人生をより豊かにするための情報を発<br>
                </br>信しております。
              </p>
          </div>
       </section>
      </main>
      <footer>
        <div className="bg-black" >
          <Image
              src="/dotlogImage.png"
              alt="Sample Image"
              width={200}
              height={100}
              
          />
          <ul>
            <li className="text-white inline-block">トップ</li>
            <li className="text-white inline-block">理念</li>
            <li className="text-white inline-block">事業内容</li>
            <li className="text-white inline-block">ニュース</li>
            <li className="text-white inline-block">会社概要</li>
            <li className="text-white inline-block">お問い合わせ</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
