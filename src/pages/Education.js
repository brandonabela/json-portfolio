import React from 'react';
import { Badge, Container } from 'react-bootstrap';

import educations from '../data/educations.json';
import PageHeader from '../components/PageHeader';


function Education() {
  return (
    <div className="education content">
      <PageHeader name="Education"></PageHeader>

      <section className='section-padding'>
        <Container>
          <ul className="timeline-vertical">
            {educations.map((education, index) =>
              <li className={index % 2 === 0 ? " " : "inverted"} key={index}>
                <div className="timeline-item">

                  <div className="item-header">
                    <div className="title-time">
                      <h3 className="title"> {education.course} </h3>

                      <div className="time"> {education.start + " - " + education.end} </div>
                    </div>

                    <div className="location"> {education.institute + ", " + education.location} </div>
                  </div>

                  {education.description.length > 0 &&
                    <p className="description"> {education.description} </p>
                  }

                  {education.bullets.length > 0 &&
                    <div className="item-spacer" />
                  }

                  {education.bullets.length > 0 &&
                    <ul className={(Math.max(...education.bullets.map(x => x.length)) > 40 ? "" : "two-column-bullets")}>
                      {education.bullets.map((bullet, index) =>
                        <li key={index}> <span> ✔ </span> {bullet} </li>
                      )}
                    </ul>
                  }

                  {education.technologies.length > 0 &&
                    <div className="item-spacer" />
                  }

                  {education.technologies.length > 0 && education.technologies.map((technology, index) =>
                    <Badge pill key={index}> {technology} </Badge>
                  )}
                </div>

              </li>
            )}
          </ul>
        </Container>
      </section>
    </div>
  );
}

export default Education;
