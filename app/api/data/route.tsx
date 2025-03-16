import axios from "axios";


export async function getStaticProps(){
  const NewsData = await ( 
    await axios.get("http:localhost:1337/api/news-creates")
).data.data;
return {
  props: {
    news: NewsData,
  },
};
} 