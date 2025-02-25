import Image from "next/image";
import Link from "next/link" ;

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-blue-200 inline-block">Dot Log inc.</h1>
        <ul>
          <li className="text-lg inline-block">TOP</li>
          <li className="text-lg inline-block">PHILOSOPHY</li>
          <li className="text-lg inline-block">SERVICE</li>
          <li className="text-lg inline-block">NEWS</li>
          <li className="text-lg inline-block">ABOUT</li>
          <li className="text-lg inline-block">CONTACT</li>
        </ul>
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
        <div>
          <h1>SERVICE</h1>
        </div>
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

      </footer>
    </>
  );
}
