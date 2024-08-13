import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function Politics() {

  const [pageLoading, setPageLoading] = useState(true);
  const [PoliticsNews, setPoliticsNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=politics")
      .then(response => response.json())
      .then(json => {
        setPoliticsNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Politics News"} newsData={PoliticsNews} />}
    </>
  );
}
