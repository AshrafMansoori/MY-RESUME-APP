import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Experience({ experience }) {
  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Header as="h5" className="bg-white border-bottom-0 pt-4 pb-0 fw-bold">
        Professional Experience
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          {experience.map((job) => (
            <ListGroup.Item key={job.id} className="p-4 border-bottom">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h5 className="mb-0 fw-bold text-dark">{job.role}</h5>
                <span className="badge bg-primary text-white rounded-pill">{job.duration}</span>
              </div>
              <div className="text-secondary fw-semibold mb-2">{job.company}</div>
              <p className="mb-0 text-muted">{job.description}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Experience;