import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';

import './Skills.scss';
import skills from '../data/skills.json';


function Skills() {
  return (
    <div className="skills content">
      <PageHeader name="Skills"></PageHeader>

      <section className='section-padding'>
        <Container>
          <Row>
            {skills.map((skill, index) =>
              <Col sm={4} key={index}>
                <div className="skill-item">
                  {skill.icon &&
                    <div className="skill-icon text-center"> <i className={'bi ' + skill.icon}></i> </div>
                  }

                  <h5 style={{ marginTop: skill.icon ? '-2rem' : '0' }}> {skill.title} </h5>

                  <ul>
                    {skill.skills.map((skill, s_index) =>
                      <Badge pill key={s_index}> {skill} </Badge>
                    )}
                  </ul>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div >
  );
}

export default Skills;
