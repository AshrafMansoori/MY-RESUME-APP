import React from 'react';
// 1. IMPORT ROW AND COL FROM BOOTSTRAP
import { Container, Row, Col } from 'react-bootstrap'; 

import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { profileData } from './data/profileData';
import './App.css'; 

function App() {
  return (
    <div className="app-background min-vh-100 pb-5">
      <Header name={profileData.personal.name} />
      
      <Container className="pt-4">
        
        {/* TOP ROW: Profile gets its own full-width row */}
        <Row className="mb-2">
          <Col xs={12}>
            <Profile personal={profileData.personal} summary={profileData.summary} />
          </Col>
        </Row>

        {/* BOTTOM ROW: The 2-Column Grid for the rest of the boxes */}
        {/* g-4 adds a nice even gap between the floating boxes */}
        <Row className="g-4">
          
          {/* LEFT COLUMN */}
          <Col md={5} lg={4}>
            <Skills skills={profileData.skills} />
            <Education education={profileData.education} />
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={7} lg={8}>
            <Experience experience={profileData.experience} />
          </Col>

        </Row>
        
      </Container>
    </div>
  );
}

export default App;