import Image from "next/image";

export default function Home() {
  return (
      <>
        <header className="sticky top-0 flex">
          <h1 className="text-blue-300 inline-block text-2xl mx-6 my-4">Dot Log inc.</h1>
          <ul className="inline-block text-blue-300 ml-auto">
            <li className="text-base inline-block px-3">TOP</li>
            <li className="text-base inline-block px-3">PHILOSOPHY</li>
            <li className="text-base inline-block px-3">SERVICE</li>
            <li className="text-base inline-block px-3">NEWS</li>
            <li className="text-base inline-block px-3">ABOUT</li>
            <li className="text-base inline-block px-3">CONTACT</li>
          </ul>
        </header>
        <main>
          <div>
            <div
              className="bg-cover bg-center h-[500px] flex flex-col items-center  mx-8 my-8 rounded-3xl"
              style={{backgroundImage: 'url(/waterImage.jpg)', }}
            >
                <Image
                    src="/dotlogImage.png"
                    alt="Sample Image"
                    width={185}
                    height={47}
                />
                <h1 className="text-white text-2xl.">株式会社ドットログ</h1>
                <div className="text-white">OUR MISSION</div>
                <div className="text-white">今日よりちょっとやさしい明日を。</div>
            </div>
          </div>
        </main>
        <footer >
          <div className="bg-black flex flex-col items-center" >
            <Image
                src="/dotlogImage.png"
                alt="Sample Image"
                width={200}
                height={100}
                
            />
            <ul>
              <li className="text-white inline-block text-xl px-3">トップ</li>
              <li className="text-white inline-block text-xl px-3">理念</li>
              <li className="text-white inline-block text-xl px-3">事業内容</li>
              <li className="text-white inline-block text-xl px-3">ニュース</li>
              <li className="text-white inline-block text-xl px-3">会社概要</li>
              <li className="text-white inline-block text-xl px-3">お問い合わせ</li>
            </ul>
            <div className="text-white">©Dot Log inc.</div>
          </div>
        </footer>
      </>
  );
}
