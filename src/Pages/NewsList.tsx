import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router";
import  "./index.css";

type news = {
  hits: [title: string, url: string, created_at: string, author: string];
};

  const NewsList = () => {
  const [page, setPage] = useState(1);
  // const pageCount = useRef(0);
  const [data, setData] = useState<any>([]);
  const [newsList, setnewsList] = useState<object[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchNews, setsearchNews] = useState("");
  let navigate = useNavigate();

  const fetchData = async () => {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
    );
    const data1 = (await res.json()) as news;
    setData(data1.hits);

    if (data1.hits.length > 0) {
      setnewsList([...newsList, ...data]);
    } else {
      setHasMore(false);
    }
    // console.log(page, data);
    // pageCount.current++
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      setPage(page + 1);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const scrolltoend = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="stories" >
        <input
          type='text'
          placeholder='Search Here'
          onChange={(event) => {
            setsearchNews(event.target.value);
          }}
          className='searchbar'
        />
      </div>
      <InfiniteScroll
        dataLength={newsList.length}
        next={scrolltoend}
        hasMore={hasMore}
        loader={false}
      >
        {newsList
          .filter((story: any) => {
            if (searchNews === "") {
              return newsList;
            } else if (
              story.title.toLowerCase().includes(searchNews.toLowerCase()) ||
              story.author.toLowerCase().includes(searchNews.toLowerCase())
            ) {
              return story;
            }
          })
          .map((item: any, index: any) => {
            return (
              <div
                key={index}
                className='container'
                onClick={() => {
                  navigate("/details", { state: item });
                }}
              >
                <h2>
                  <u>Title</u> : {item.title}
                </h2>
                <h3>
                  <u>Author</u> :{item.author}
                </h3>
                <h3>
                  <u>Created At</u>: {item.created_at}
                </h3>
                <h4>
                  <u>URL</u>: {item.url}
                </h4>
              </div>
            );
          })}
      </InfiniteScroll>
      {!hasMore && searchNews.length === 0 && <p>You have gone through all the Data</p>}
     
    </>
  );
};
export default NewsList;
