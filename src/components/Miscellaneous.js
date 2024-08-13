import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function Miscellaneous() {

  const [pageLoading, setPageLoading] = useState(true);
  const [MiscellaneousNews, setMiscellaneousNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=miscellaneous")
      .then(response => response.json())
      .then(json => {
        setMiscellaneousNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Miscellaneous News"} newsData={MiscellaneousNews} />}
    </>
  );
}
