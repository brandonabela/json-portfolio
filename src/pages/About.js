import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

import './About.scss';
import about from '../data/about.json';
import profile from '../data/profile.json';


function About() {
  return (
    <div>
      <PageHeader name="About" />

      <Container className="about">
        <section>
          <Row>
            <Col sm={3}>
              <div className="profilePicture">
                <Image src='./images/profilePicture.png' rounded />
              </div>
            </Col>
            <Col sm={9} className="website-intro">
              <h1 className="profileName">{profile.name}</h1>

              <p>
                {profile.heading.split(/\[|]/).map((split, index) => {
                  if (index % 2 === 1) {
                    const lowerSplit = split.toLowerCase();

                    if (lowerSplit.includes('education')) { return <Link to='/education'> {split} </Link> }
                    else if (lowerSplit.includes('work')) { return <Link to='/work'> {split} </Link> }
                    else if (lowerSplit.includes('skills')) { return <Link to='/skills'> {split} </Link> }
                    else if (lowerSplit.includes('portfolio')) { return <Link to='/portfolio'> {split} </Link> }
                    else if (lowerSplit.includes('contact')) { return <Link to='/contact'> {split} </Link> }
                  }

                  return split
                })}
              </p>
            </Col>
          </Row>
        </section>

        {about.map(section =>
          <section>
            <SectionTitle name={section.title} />

            <p> {section.paragraph} </p>

            {section.bullets.length > 0 &&
              <Row className="bullets">
                <Col md={4} sm={12}>
                  <ul>
                    {section.bullets.filter((_, index) => index % 3 === 0).map((bullet, index) => <li key={index}> {bullet} </li>)}
                  </ul>
                </Col>
                <Col md={4} sm={12}>
                  <ul>
                    {section.bullets.filter((_, index) => index % 3 === 1).map((bullet, index) => <li key={index}> {bullet} </li>)}
                  </ul>
                </Col>
                <Col md={4} sm={12}>
                  <ul>
                    {section.bullets.filter((_, index) => index % 3 === 2).map((bullet, index) => <li key={index}> {bullet} </li>)}
                  </ul>
                </Col>
              </Row>
            }
          </section>
        )}
      </Container>
    </div>
  );
}

export default About;
