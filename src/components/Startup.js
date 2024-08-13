import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function Startup() {

  const [pageLoading, setPageLoading] = useState(true);
  const [StartupNews, setStartupNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=startup")
      .then(response => response.json())
      .then(json => {
        setStartupNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Startup News"} newsData={StartupNews} />}
    </>
  );
}
