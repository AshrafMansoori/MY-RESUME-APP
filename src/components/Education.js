import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Education({ education }) {
  return (
    <Card className="mb-5 shadow-sm border-0">
      <Card.Header as="h5" className="bg-white border-bottom-0 pt-4 pb-0 fw-bold">
        Education
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          {education.map((edu) => (
            <ListGroup.Item key={edu.id} className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="mb-0 fw-bold text-dark fs-5">{edu.degree}</h6>
                <span className="badge bg-secondary text-white rounded-pill">{edu.duration}</span>
              </div>
              <div className="text-muted">{edu.institution}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Education;