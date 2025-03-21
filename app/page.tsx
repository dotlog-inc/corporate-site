import Image from "next/image";
import Link from "next/link" ;
import { Fragment } from "react";
import ContactCard from "./component/contactCard";
import { motion } from 'framer-motion';
import styles from "./FramerMotion.module.css";
import axios from "axios";
import HeaderCard from "./component/headerCard";


export default async function Home() {
  const res =await fetch(process.env.NEXT_PUBLIC_API_URL2 as string);
  const data = await res.json();
    const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は 0 ベースなので 1 を足す
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };


  return (
    <Fragment>
        <HeaderCard/>
        <main>
          <div className="pt-[8px] px-[48px] pb-[72px] mb-[109px] flex ">
            <div
              className="bg-cover bg-center w-full h-[500px] lg:h-[700px] flex flex-col justify-center items-center rounded-[50px]"
              style={{backgroundImage: 'url(/waterImage.jpg)', }}
            >
                <div className="pt-[95px] px-[24] h-auto lg:mb-[50px]">
                  <Image
                      src="/dotlogImage.png"
                      alt="Sample Image"
                      width={187}
                      height={47}
                      className=""
                  />
                  <div className="text-white text-lg md:text-xl lg:text-xl font-black mt-[15px] mb-[50px] tracking-[0.2rem] text-center font-body">株式会社ドットログ</div>
                </div> 
                <div className="font-black">
                  <div className="text-white text-xl md:text-2xl lg:text-4xl text-center tracking-[0.2rem] font-body">OUR MISSION</div>
                  <div className="text-white text-4xl md:text-5xl lg:text-7xl mt-[10px] tracking-[1.0rem] font-face">今日よりちょっと<br></br>やさしい明日を。</div>
                </div>
            </div>
            <div className="textbox">
              <p className="vertical text-xl">SCROLL</p>
            </div>
          </div>
          <section id="philo" className="flex flex-col items-center">
          <p className="title1 A1B">PHILOSOPHY</p>
          <div className="box">
            <p className="box-p1 text">Dot Log</p>
            <p className="box-p2 text">
              企業名の『Dot Log』とは、あるプログラミング言語においてメッセージを出力するために使用される"console.log()"から由来しており、（）の中に入力されたものがスマートフォンやパソコンに出力（表示）されます。
              <br></br>私たちは、わくわくする世界を創るためのアイデアを思いつく限り（　）の中に入れ、世界にどんどん出力していくというミッションを掲げ、日々取り組んでおります。</p>
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
                  <p className="relation-p3">自然を大切にし、自然を楽しみ、自然と遊ぶ。<br></br>自分らしく、自然体でいきていく。</p>
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
        <p className="title2 A1B">SERVICE</p>
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
                サービスサイトへ
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
                サービスサイトへ
              </a>
              </p>
            </div>
          </div>
          <div className="service1 flex">
            <div className="media1">
            <Image src="/media.jpg" alt="media Image" 
                     width={823} height={393}  className="media-img"/>
            </div>
            <div className="Alzuchi2">
              <h3 className="service1-title">SNSメディア</h3>
              <p className="service1-contents">Instagram・TikTokにて、お悩み解消する情報やお出かけ情報など、人生をより豊かにするための情報を発信しております。</p>
            </div>
          </div>
       </section>

      
      <section id="news" className="flex flex-col items-center">
        <p className="news1">NEWS</p>
        <div className="news-view1">
          <div className="news-view2">
            <div className="news-view3">
              {data.data?.map((item:any) =>{
                //pictureが存在すれば、画像を取得
                const fullImageUrl = process.env.NEXT_PUBLIC_API_URL1 + item.picture[0].url;
                return (
                  <div key={item.id} className="news-box">
                    <div className="news-pic">
                    {fullImageUrl &&(
                      <Image
                        src={fullImageUrl}
                        alt={item.title}
                        width={200}
                        height={150}
                        className="news-img"
                      />
                    )}
                    </div>
                    <h3 className="item-title">{item.title}</h3>
                   <p className="item-publishedAt">{formatDate(item.publishedAt)}</p>
                  </div>
                );
              })}
            </div>
            <div className="news-view4">
              <a href="/" className="news-view4-a">
                <p className="news-view4-p">VIEW MORE ＞</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="flex flex-col items-center">
        <p className="about1">ABOUT</p>
        <div className="about2">
          <div className="about3"></div>
          <div className="about4">
           <div className="about-a"> 
            <div className="about4-1">
              <p className="about4-1-1">会社名</p>
              <p className="about4-1-2">株式会社ドットログ</p>
            </div>
           </div>
           <div className="about-b"> 
            <div className="about4-1">
              <p className="about4-1-1">代表者</p>
              <p className="about4-1-2">代表取締役社長　西田一晴</p>
            </div>
           </div>
           <div className="about-b"> 
            <div className="about4-1">
              <p className="about4-1-1">設立</p>
              <p className="about4-1-2">2022年11月24日</p>
            </div>
           </div>
           <div className="about-b"> 
            <div className="about4-1">
              <p className="about4-1-1">資本金</p>
              <p className="about4-1-2">500,000円</p>
            </div>
           </div>
           <div className="about-b"> 
            <div className="about4-1">
              <p className="about4-1-1">所在地</p>
              <p className="about4-1-2">
                〒541-0051<br></br>
                大阪市中央区備後町3-6-2 大雅ビル10F
              </p>
            </div>
           </div>
           <div className="about-c"> 
            <div className="about4-1">
              <p className="about4-1-1 zigyou">事業内容</p>
              <p className="about4-1-2">
                ・アプリ開発<br></br>
                ・SNSメデイア運用・インフルエンサー事業<br></br>
                ・イベント企画・制作・運営<br></br>
                ・HP・ECサイト作成
              </p>
            </div>
           </div>
          </div>
        </div>
      </section>
          
        <ContactCard/>
          
        </main>
        <footer >
          <div className="bg-black flex flex-col items-center h-[486px]" >
            <div className="mt-[78px] ">
              <Image
                    src="/dotlogImage.png"
                    alt="Sample Image"
                    width={200}
                    height={100}
                    className="object-contain mt-[40px] mb-[30px]"
              />
            </div>
            <div className="font-black mb-[100px] block">
              <Link href="" className="text-white inline-block text-sm md:text-xl px-3 hover:scale-90 hover:text-gray-200 duration-200">トップ</Link>
              <Link href="#philo" className="text-white inline-block text-sm md:text-xl px-3 hover:scale-90 hover:text-gray-200 duration-200">理念</Link>
              <Link href="#service" className="text-white inline-block text-sm md:text-xl px-3 hover:scale-90 hover:text-gray-200 duration-200">事業内容</Link>
              <Link href="#news" className="text-white inline-block text-sm md:text-xl px-3 hover:scale-90 hover:text-gray-200 duration-200">ニュース</Link>
              <Link href="#about" className="text-white inline-block text-sm md:text-xl px-3 hover:scale-90 hover:text-gray-200 duration-200">会社概要</Link>
              <Link href="#contact" className="text-white inline-block text-sm md:text-xl px-3 hover:scale-90 hover:text-gray-200 duration-200">お問合せ</Link>
            </div>
            <div className="text-white font-black">©Dot Log inc.</div>
          </div>
      </footer>
    </Fragment>
  );

}
