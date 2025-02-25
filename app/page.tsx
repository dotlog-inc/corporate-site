import Image from "next/image";

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
      </header>
      <main>
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
