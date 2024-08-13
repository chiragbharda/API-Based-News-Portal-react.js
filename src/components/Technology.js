import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import NavBar from './NavBar';
import NewsCard from './NewsCard';

export default function Technology() {
  const [pageLoading, setPageLoading] = useState(true);
  const [technologyNews, setTechnologyNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=technology")
      .then(response => response.json())
      .then(json => {
        setTechnologyNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Technology News"} newsData={technologyNews} />}
    </>
  );
}
