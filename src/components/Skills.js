import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

function Skills({ skills }) {
  return (
    <Card className="mb-4 shadow-sm border-0">
      <Card.Header as="h5" className="bg-white border-bottom-0 pt-4 pb-0 fw-bold">
        Technical Skills
      </Card.Header>
      <Card.Body>
        {skills.map((skill, index) => (
          <Badge bg="light" text="dark" className="me-2 mb-2 p-2 fs-6 border" key={index}>
            {skill}
          </Badge>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Skills;