import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function Profile({ personal, summary }) {
  return (
    <Card className="mb-5 border-0 dark-profile-card">
      <Card.Body className="p-4 p-md-5">
        <Row className="align-items-center text-center text-md-start">
          
          {/* Photo Section */}
          <Col md={3} className="mb-4 mb-md-0 d-flex justify-content-center">
            <div className="profile-img-wrapper">
              <Image 
                src={personal.photo} 
                alt={personal.name} 
                roundedCircle 
                className="profile-img shadow-lg"
              />
            </div>
          </Col>

          {/* Details Section */}
          <Col md={5} className="text-white">
            <h1 className="fw-bold mb-1 display-5">{personal.name}</h1>
            <h4 className="text-info fw-light mb-3">{personal.title}</h4>
            <p className="mb-0 text-light opacity-75 lh-base">{summary}</p>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="text-md-end mt-4 mt-md-0 d-flex flex-column justify-content-center border-md-start border-secondary ps-md-4">
            <p className="mb-2 text-light">
              <span className="me-2">📧</span> {personal.email}
            </p>
            <p className="mb-2 text-light">
              <span className="me-2">📱</span> {personal.phone}
            </p>
            <p className="mb-0 text-light">
              <span className="me-2">📍</span> {personal.location}
            </p>
          </Col>
          
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Profile;