import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar'; 
import './NotFound.css'; 

export default function NotFound() {
    return (
        <div>
            <NavBar />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2 className="text-center">404 - Page Not Found</h2>
                        <p className="text-center">The page you are looking for does not exist.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
