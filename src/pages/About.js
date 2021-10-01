import React from 'react';
import { Badge, Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './About.scss';
import SectionTitle from '../components/SectionTitle';
import skills from '../data/skills.json';
import profile from '../data/profile.json';
import projects from '../data/projects.json';
import experiences from '../data/experiences.json';


function About() {
  return (
    <div className="content about">
      <section className='section-padding blue-section profile-intro'>
        <Container>
          <Row>
            <Col md={3} sm={12} className="profile-picture">
              <Image src='./images/ProfilePicture.png' alt="profile-picture" rounded />
            </Col>

            <Col md={9} sm={12} className="website-intro">
              <h4> Hello, my name is </h4>
              <h1> {profile.name} </h1>

              <p>
                {profile.heading.split(/\[|]/).map((split, index) => {
                  if (index % 2 === 1) {
                    const lowerSplit = split.toLowerCase();

                    if (lowerSplit.includes('education')) { return <Link key={index} to='/education'> {split} </Link> }
                    else if (lowerSplit.includes('work')) { return <Link key={index} to='/work'> {split} </Link> }
                    else if (lowerSplit.includes('skills')) { return <Link key={index} to='/skills'> {split} </Link> }
                    else if (lowerSplit.includes('portfolio')) { return <Link key={index} to='/portfolio'> {split} </Link> }
                    else if (lowerSplit.includes('contact')) { return <Link key={index} to='/contact'> {split} </Link> }
                  }

                  return split
                })}
              </p>

              <Link className="btn" role="button" to="/contact"> Contact Me </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='section-padding dark-section'>
        <Container>
          <SectionTitle name="Skills Overview" />

          <p className="content-gutter text-center"> {profile.skills} </p>

          <Row className="justify-content-md-center skills">
            {skills.filter(skill => skill.overview).slice(0, 3).map((skill, s_index) =>
              <Col md={4} key={s_index}>
                <div className="skill-item">
                  {skill.icon &&
                    <div className="skill-icon text-center"> <i className={'bi ' + skill.icon}></i> </div>
                  }

                  <h5 style={{ marginTop: skill.icon ? '-2rem' : '0' }}> {skill.title} </h5>

                  <ul>
                    {skill.technologies.slice(0, 5).map((technology, t_index) =>
                      <li key={t_index}> <span> ✔ </span> {technology} </li>
                    )}
                  </ul>
                </div>
              </Col>
            )}
          </Row>

          <div className="spacer" />
          <Link className="btn" role="button" to="/skills"> View All Skills </Link>
        </Container>
      </section>

      <section className='section-padding light-section'>
        <Container>
          <SectionTitle name="Featured Projects" />

          <p className="content-gutter text-center"> {profile.projects} </p>

          <Row className="justify-content-md-center text-center">
            {projects.filter(project => project.overview).slice(0, 4).map((project, p_index) =>
              <Col md={3} sm={6} key={p_index}>
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

          <div className="spacer" />
          <Link className="btn" role="button" to="/portfolio"> View All Projects </Link>
        </Container>
      </section>

      <section className='section-padding dark-section'>
        <Container>
          <SectionTitle name="Experience" />

          <p className="content-gutter text-center"> {profile.experience} </p>

          <Row className="timeline-horizontal">
            {experiences.slice(0, 4).map((experience, e_index) =>
              <Col md={3} className="timeline-item text-center" key={e_index}>
                <span className="date-short"> {experience.end} </span>
                <span className="date-full"> {experience.start} - {experience.end} </span>

                <div className="details">
                  <h5 className="title"> {experience.role} </h5>
                  <p className="description"> {experience.company} </p>
                </div>
              </Col>
            )}
          </Row>

          <div className="spacer" />
          <Link className="btn" role="button" to="/work"> View All Employers </Link>
        </Container>
      </section>

      <section className="section-padding blue-section text-center contact">
        <Container>
          <Image src="./images/ProfilePicture.png" roundedCircle />

          <h3> Interested in hiring me for your project? </h3>

          <p className="content-gutter"> Looking for an experienced developer to develop or ship your software product? To start an initial chat, drop an email at <a href={"mailto:" + profile.email}> {profile.email} </a> or use the form on <Link to='/contact'> Contact Me </Link>. </p>

          <div className="spacer" />
          <Link className="btn" role="button" to="/contact"> Contact Me </Link>
        </Container>
      </section>
    </div>
  );
}

export default About;
