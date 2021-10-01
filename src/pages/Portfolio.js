import React, { useState } from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Portfolio.scss';
import skills from '../data/skills.json';
import projects from '../data/projects.json';
import PageHeader from '../components/PageHeader';


function Portfolio() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="portfolio content">
      <PageHeader name="Portfolio"></PageHeader>

      <section className='section-padding'>
        <Container>
          <Row className="justify-content-md-center text-center">
            <Col>
              <ul className="filter">
                {['All', ...skills.map(skill => skill.title)].map((s_filter, index) =>
                  <li key={index}>
                    <Button
                      className={filter === s_filter ? "active" : "inactive"}
                      onClick={() => setFilter(s_filter)}
                    >
                      {s_filter}
                    </Button>
                  </li>
                )}
              </ul>
            </Col>
          </Row>

          <div className="spacer" />

          <Row className="justify-content-md-center text-center">
            {[filter === "All" ? projects : projects.filter(p =>
              p.technologies.some(s =>
                skills.filter(s => s.title === filter)[0].technologies.includes(s)
              )
            )].flat().map((project, p_index) =>
              <Col lg={3} md={4} sm={6} key={p_index}>
                <Card>
                  <div className="card-img">
                    <Card.Img
                      variant="top"
                      alt={project.name.toLowerCase().replaceAll(' ', '_')}
                      src={"./images/projects/" + project.imageHeading + "01.png"}
                    />

                    <Link className="card-img-overlay btn" role="button" to={"/portfolio/" + project.name.toLowerCase().replace(/\s+/g, '-')}>
                      <Button role="button">
                        Read More
                      </Button>
                    </Link>
                  </div>

                  <Card.Body>
                    <Card.Title>
                      <Link to={"/portfolio/" + project.name.toLowerCase().replace(/\s+/g, '-')}>
                        {project.name}
                      </Link>
                    </Card.Title>

                    <Card.Text>
                      {project.technologies.map((technology, t_index) =>
                        <Badge pill key={t_index}> {technology} </Badge>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Portfolio;
