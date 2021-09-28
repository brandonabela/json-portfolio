import React from 'react';
import { Row } from 'react-bootstrap';

import './SectionTitle.scss';


function SectionTitle(props) {
  return (
    <Row>
      <h3 className="section-title text-center"> {props.name} </h3>
    </Row>
  );
}

export default SectionTitle;
