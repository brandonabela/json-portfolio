import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './Footer.scss';
import profile from '../data/profile.json';


function Footer() {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <p>Copyright © {new Date().getFullYear()} by {profile.name}. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
