import React from 'react';
import { Row } from 'react-bootstrap';

import './SectionTitle.scss';


function SectionTitle(props) {
  return (
    <Row>
      <div className="section-title text-center"> {props.name} </div>
    </Row>
  );
}

export default SectionTitle;
