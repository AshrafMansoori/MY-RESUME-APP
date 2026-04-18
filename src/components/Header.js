import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header({ name }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fs-4">
          <strong>{name}'s Resume</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;