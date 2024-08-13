import { Card, Col, Row, Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Newscard.css'; 

export default function NewsCard({ newsTitle, newsData }) {
	const shareNews = (url, platform) => {
		let shareUrl = "";
		const title = encodeURIComponent(url.title); 
		const readMoreUrl = encodeURIComponent(url.readMoreUrl);

		switch (platform) {
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${readMoreUrl}&quote=${title}`;
				break;
			case "twitter":
				shareUrl = `https://twitter.com/intent/tweet?url=${readMoreUrl}&text=${title}`;
				break;
			case "linkedin":
				shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${readMoreUrl}&title=${title}`;
				break;
			default:
				break;
		}

		window.open(shareUrl, "_blank");
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<h3 id="high" className="text-center news-heading">{newsTitle}</h3>
					</Col>
				</Row>
				<Row xs={1} md={3} className="g-4">
					{newsData.map((value) => (
						<Col key={value.id} className="container-fluid mt-4">
							<Card className="news-card h-100" onClick={() => window.open(value.readMoreUrl)}>
								<Card.Img variant="top" src={value.imageUrl} height="250px" />
								<Card.Body>
									<Card.Title>{value.title}</Card.Title>
									<Card.Text>{value.content}</Card.Text>
								</Card.Body>
								
								<div className="social-icons">
									<FaFacebook 
										className="social-icon" 
										onClick={(e) => { e.stopPropagation(); shareNews(value, "facebook"); }} 
									/>
									<FaTwitter 
										className="social-icon" 
										onClick={(e) => { e.stopPropagation(); shareNews(value, "twitter"); }} 
									/>
									<FaLinkedin 
										className="social-icon" 
										onClick={(e) => { e.stopPropagation(); shareNews(value, "linkedin"); }} 
									/>
								</div>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}
