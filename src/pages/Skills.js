import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

import skills from '../data/skills.json';
import PageHeader from '../components/PageHeader';


function Skills() {
  return (
    <div className="skills content">
      <PageHeader name="Skills"></PageHeader>

      <section className='section-padding'>
        <Container>
          <Row>
            {skills.map((skill, index) =>
              <Col md={4} key={index}>
                <div className="skill-item">
                  {skill.icon &&
                    <div className="skill-icon text-center"> <i className={'bi ' + skill.icon}></i> </div>
                  }

                  <h5 style={{ marginTop: skill.icon ? '-2rem' : '0' }}> {skill.title} </h5>

                  <ul>
                    {skill.technologies.map((technology, t_index) =>
                      <Badge pill key={t_index}> {technology} </Badge>
                    )}
                  </ul>
                </div>

                <div className="spacer" />
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Skills;
