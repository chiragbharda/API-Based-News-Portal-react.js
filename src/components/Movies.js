import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function Movies() {

  const [pageLoading, setPageLoading] = useState(true);
  const [moviesNews, setmoviesNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=entertainment")
      .then(response => response.json())
      .then(json => {
        setmoviesNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Movies News"} newsData={moviesNews} />}
    </>
  );
}
