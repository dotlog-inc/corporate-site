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
                <h1 className="text-white text-xl">株式会社ドットログ</h1>
                <div className="font-black">
                  <div className="text-white text-2xl">OUR MISSION</div>
                  <div className="text-white text-5xl">今日よりちょっと<br></br>やさしい明日を。</div>
                </div>
            </div>
          </div>
          <section id="philo" className="flex flex-col items-center">
          <p className="title1">PHILOSOPHY</p>
          <div className="box">
            <p className="box-p1 text">Dot Log</p>
            <p className="box-p2 text">
              企業名の『Dot Log』とは、あるプログラミング言語においてメッセージを出力するために使用される"console.log()"から由来しており、（）の中に入力されたものがスマートフォンやパソコンに出力（表示）されます。
              私たちは、わくわくする世界を創るためのアイデアを思いつく限り（　）の中に入れ、世界にどんどん出力していくというミッションを掲げ、日々取り組んでおります。</p>
          </div>
        <div className="philos">
          <div className="philo-ap flex">
           <div className="philo-1"> 
              <p className="philo-1-p">VISION</p>
              <h2 className="philo-1-h2">迷ったら、わくわくするほうへ。</h2>
            </div>
          </div>
          <div className="philo-ap flex">
          <div className="philo-1"> 
            <p className="philo-1-p">MISSION</p>
            <h2 className="philo-1-h2">今日よりちょっと優しい明日を</h2>
          </div> 
          </div>

          <div className="philo-2">
          <div className="philo-3">
            <p className="philo-3-p">VALUE</p>
            <div className="value flex">
                <div className="relationship">
                  <p className="relation-p1">縁</p>
                  <p className="relation-p2">relationship</p>
                  <p className="relation-p3">すべての「人、モノ、コト」とのご縁を大切にし、常に助け合いの精神で取り組む。</p>
                </div>
                <div className="relationship">
                  <p className="relation-p1">冒険</p>
                  <p className="relation-p2">adventure</p>
                  <p className="relation-p3">我々は常にわくわくする方を選び、挑戦を忘れない”アド”ベンチャー企業です。</p>
                </div>
                <div className="relationship">
                  <p className="relation-p1">自然</p>
                  <p className="relation-p2">nature</p>
                  <p className="relation-p3">自然を大切にし、自然を楽しみ、自然と遊ぶ。
                  自分らしく、自然体でいきていく。</p>
                </div>
                <div className="relationship">
                  <p className="relation-p1">貢献</p>
                  <p className="relation-p2">contribution</p>
                  <p className="relation-p3">常に誰かのために行動し、社会に貢献し続けます。</p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>


      <section id="service" className="flex flex-col items-center">
        <p className="title2">SERVICE</p>
          <div className="service1 flex">
            <div className="Alzuchi1">
              <Image src="/Alzuchi.png" alt="Alzuchi Image" 
                     width={320} height={100} className="Alzuchi-img"/>
            </div>
            <div className="Alzuchi2">
              <h3 className="service1-title">Alzuchi</h3>
              <p className="service1-contents">心理カウンセラー監修のAIを活用したメンタルヘルスケアアプリ「AIzuchi」AIとの会話を通じて自分をもっと知る事ができ、頭の中を整理することができる全く新しいジャーナリングアプリ</p>
              <p className="service1-botton2 btn-press">
              <a href="https://aizuchi-lp.studio.site/" rel="noopener" target="_blank" className="service1-botton1">
                サービスサイトへ ＞
              </a>
              </p>
            </div>
          </div>
          <div className="service2 flex">
            <div className="Grab1">
              <Image src="/Grab.png" alt="Grab Image" 
                     width={320} height={100} className="Grab-img"/>
            </div>
            <div className="Grab2">
              <h3 className="service2-title">企業ブランディング</h3>
              <p className="service2-contents1">Z世代ならでは視点から企業の「ブランディング」の側面を整理し、提供するサービスや会社自体に、より誇りを持っていただけるようサポートいたします。</p>
              <p className="service2-contents2">サブスク型ホームページ製作サービス</p>
              <p className="service2-contents3">「Grab」</p>
              <p className="service2-botton2 btn-press">
              <a href="" rel="noopener" target="_blank" className="service2-botton1">
                サービスサイトへ ＞
              </a>
              </p>
            </div>
          </div>
          <div className="service1 flex">
            <div className="media1">
            <Image src="/media.jpg" alt="media Image" 
                     width={320} height={100}  className="media-img"/>
            </div>
            <div className="Alzuchi2">
              <h3 className="service1-title">SNSメディア</h3>
              <p className="service1-contents">Instagram・TikTokにて、お悩み解消する情報やお出かけ情報など、人生をより豊かにするための情報を発信しております。</p>
            </div>
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
  );

}

