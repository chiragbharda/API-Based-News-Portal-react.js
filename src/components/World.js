import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function World() {

  const [pageLoading, setPageLoading] = useState(true);
  const [worldNews, setworldNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=world")
      .then(response => response.json())
      .then(json => {
        setworldNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"World News"} newsData={worldNews} />}
    </>
  );
}
