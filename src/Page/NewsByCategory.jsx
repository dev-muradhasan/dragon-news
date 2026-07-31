import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/homelayout/NewsCard";


const NewsByCategory = () => {
    const [categoryNews, setCategoryNews] = useState([])
    const {id} = useParams();
    const data = useLoaderData();

    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(data);
            return
        }else if(id == '1'){
            const filteredNesw = data.filter(
              (news) => news.others.is_today_pick,
            );
            setCategoryNews(filteredNesw)
        } else{
            const filteredNesw = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNesw)
        }
    },[data,id])

    return (
      <div>
        <h2 className="font-semibold text-xl text-accent-content">
          Total <span className="text-secondary">{categoryNews.length}</span>{" "}
          news found
        </h2>
        <div className="grid grid-cols-1 mt-3 gap-7">
            {
                categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
      </div>
    );
};

export default NewsByCategory;