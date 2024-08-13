import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function Sport() {

  const [pageLoading, setPageLoading] = useState(true);
  const [SportNews, setSportNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=sports")
      .then(response => response.json())
      .then(json => {
        setSportNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Sport News"} newsData={SportNews} />}
    </>
  );
}
