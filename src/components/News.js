import React, { useEffect, useState }from "react";
import Loading from "./Loading.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
const News = (props) => {
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
  //const[state,useState]=useState(0);
  //const[state,useState]=useState(0);
  const updateNews= async(page)=> {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=16&page=${page}`;
    setPage(page);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json(data);
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  useEffect(()=>{
    document.title = `News Monkey- ${props.category}`;
    props.setProgress(10);
    updateNews(1);
  },[])
  const nextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=16&page=${
        page + 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json(data);
    setArticles(articles.concat(parsedData.articles));
    setPage(page+1);
    setLoading(false);
  };
    return (
      <>
        <div className="h11">
          <h1 className="News" style={{ color: props.style.color }}>
            News Monkey- Top {props.category} Headlines
            <br />
          </h1>
        </div>
        <div className="load">{loading && <Loading />}</div>
        <InfiniteScroll
          dataLength={articles.length}
          next={nextPage}
          hasMore={articles.length < totalResults}
          loader={<Loading />}
        >
          <div
            className="News"
            style={{ backgroundColor: props.style.backgroundColor }}
          >
            {articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 100) +
                        (element.description? "..." : "")
                      : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://library.ceu.edu/wp-content/uploads/news-2444778_960_720.jpg"
                  }
                  newsUrl={element.url}
                  style={{
                    color: props.style.color,
                    backgroundColor: props.style.backgroundColor,
                  }}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps={
  category: "general"
}

News.propTypes={
  category: PropTypes.string,
}

export default News;
