import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from '../Image/Image.jpg'; // Importing the image for the card

function DetailedTest() {
  return (
    <div className="d-flex">
      {/* Card Component */}
      <Card style={{ flex: '1', marginRight: '15px', position: 'relative' }}>
        {/* Image for the Card */}
        <Card.Img variant="top" src={Image} style={{ opacity: 0.5 }} />
        {/* Card Body */}
        <Card.Body style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          {/* Card Title */}
          <Card.Title>Detailed Test</Card.Title>
          {/* Card Text */}
          <Card.Text>
            Looking to dive deep into your career options? Our detailed career test offers an in-depth analysis
            goes beyond the surface by using AI analysis, providing you with comprehensive insights tailored to
            your unique strengths, interests, and aspirations. Discover potential career paths you may not have
            considered and gain valuable clarity on your professional journey. Whether you're exploring new
            opportunities or seeking guidance on your current path, our detailed career test is your roadmap to
            success.
          </Card.Text>
          {/* Link to Detailed Test Page */}
          <Link to="/detailed-test">
            {/* Button to Take the Detailed Test */}
            <Button variant="primary">Take the Detailed Test</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailedTest;
