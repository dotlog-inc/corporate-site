import Link from "next/link";
import HeaderCard from "../component/headerCard";
import { AnimatedDiv, AniMatediV, Animatediv} from "../component/AnimatedDiv";
import Image from "next/image";

export default  async function AllNews() {
  const res =await fetch(process.env.NEXT_PUBLIC_API_URL3 as string);
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
    <>
    <HeaderCard/>
    <section id="news11" className="flex flex-col items-center">
        <p className="news11">NEWS</p>
        <div className="news-view1">
        <div className="news-view2">
        <AnimatedDiv className="news-view3">
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
                    <h3 className="item-title">
                     <a href="/news/[id].tsx">{item.title}</a> 
                    </h3>
                   <p className="item-publishedAt">{formatDate(item.publishedAt)}</p>
                  </div>
                );
              })}
            </AnimatedDiv>
            <AnimatedDiv className="news-view4">
              <Link href="/#news" className="news-view4-a">
                <p className="news-view4-p element">BACK ＞</p>
              </Link>
            </AnimatedDiv>
            </div>
            </div>

     </section>
     </>
  );
}