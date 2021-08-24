import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './Footer.scss';


function Footer() {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <p>© {new Date().getFullYear()} - <a href="https://github.com/brandonabela/json-portfolio">Template</a> developed by <a href="https://github.com/brandonabela">Brandon Abela</a>. All rights reserved.</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
