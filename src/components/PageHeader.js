import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './PageHeader.scss';


function PageHeader(props) {
  return (
    <div className="page-heading">
      <Container>
        <Row>
          <h2> {props.name} </h2>
        </Row>
      </Container>
    </div>
  );
}

export default PageHeader;
