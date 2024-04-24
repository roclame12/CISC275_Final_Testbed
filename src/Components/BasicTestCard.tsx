import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import BasicImage from '../Image/BasicImage.jpg';

function BasicTest() {
  return (
    <div className="d-flex">
      <Card style={{ flex: '1', marginRight: '15px', position: 'relative' }}>
      <Card.Img variant="top" src={BasicImage} style={{ opacity: 0.5 }} />
        <Card.Body style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Card.Title>Basic Test</Card.Title>
          <Card.Text>
            Concerned about the path of your career? Gaining insight into your career options is quick and simple with our basic career test. 
            It provides individualized recommendations based on your interests and strengths by utilizing AI analysis. 
            Easily learn about potential job choices and gain a better understanding of your future in the workforce. 
            Our basic career exam is your first step to success and is ideal for anyone looking to explore new prospects or needs a little prodding in the right direction.
          </Card.Text>
          <Link to ="/basic-test">
            <Button variant="primary">Take the Basic Test</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicTest;
