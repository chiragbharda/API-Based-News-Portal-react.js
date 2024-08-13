import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Spinner } from 'react-bootstrap';
import NewsCard from './NewsCard';
export default function Automobile() {

  const [pageLoading, setPageLoading] = useState(true);
  const [AutomobileNews, setAutomobileNews] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=automobile")
      .then(response => response.json())
      .then(json => {
        setAutomobileNews(json.data);
        setPageLoading(false)
      });
  }, []);

  return (
    <>
      <NavBar />
      {pageLoading ? <div className='spinner-container'> <Spinner animation="border" variant="dark" /> </div> :
        <NewsCard newsTitle={"Automobile News"} newsData={AutomobileNews} />}
    </>
  );
}
