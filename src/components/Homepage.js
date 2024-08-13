import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row, Spinner, Container } from 'react-bootstrap';
import './Homepage.css';
import NavBar from './NavBar';
import NewsCard from './NewsCard';

export default function Homepage() {
    const [pageLoading, setPageLoading] = useState(true);
    const [featuredNews, setFeaturedNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        fetch("https://inshortsapi.vercel.app/news?category=all")
            .then(response => response.json())
            .then(json => {
                setFeaturedNews(json.data.slice(0, 3));
                setLatestNews(json.data.slice(3, 6));
                setPageLoading(false);
            });
    }, []);

    return (
        <>
            <NavBar />
            {pageLoading ? (
                <div className='spinner-container'>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <>
                    <Container>
                        <Row className="mt-4">
                            <Col>
                                <h3 id="high" className="text-center">Highlights</h3>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Carousel>
                                    {featuredNews.map((news, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100 img-fluid" // Make the image responsive
                                                src={news.imageUrl}
                                                alt={`Slide ${index}`}
                                            />
                                            <Carousel.Caption>
                                                <h4>{news.title}</h4>
                                                <p>{news.content}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                    <NewsCard newsTitle={"Latest News"} newsData={latestNews} />
                </>
            )}
        </>
    );
}
