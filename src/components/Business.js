import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import NavBar from './NavBar';
import NewsCard from './NewsCard';

export default function Business() {
  const [pageLoading, setPageLoading] = useState(true);
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=business")
      .then(response => response.json())
      .then(json => {
        setBusinessNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Business News"} newsData={businessNews} />}
    </>
  );
}
