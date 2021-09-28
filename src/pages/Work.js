import React from 'react';
import { Badge, Container } from 'react-bootstrap';

import experiences from '../data/experiences.json';
import PageHeader from '../components/PageHeader';


function Work() {
  return (
    <div className="work content">
      <PageHeader name="Work Experience"></PageHeader>

      <section className='section-padding'>
        <Container>
          <ul className="timeline-vertical">
            {experiences.map((experience, index) =>
              <li className={index % 2 === 0 ? " " : "inverted"} key={index}>
                <div className="timeline-item">

                  <div className="item-header">
                    <div className="title-time">
                      <h3 className="title"> {experience.role} </h3>

                      <div className="time"> {experience.start + " - " + experience.end} </div>
                    </div>

                    <div className="location"> {experience.company + ", " + experience.location} </div>
                  </div>

                  {experience.description.length > 0 &&
                    <p className="description"> {experience.description} </p>
                  }

                  {experience.bullets.length > 0 &&
                    <div className="item-spacer" />
                  }

                  {experience.bullets.length > 0 &&
                    <ul className={(Math.max(...experience.bullets.map(x => x.length)) > 40 ? "" : "two-column-bullets")}>
                      {experience.bullets.map((bullet, index) =>
                        <li key={index}> <span> ✔ </span> {bullet} </li>
                      )}
                    </ul>
                  }

                  {experience.technologies.length > 0 &&
                    <div className="item-spacer" />
                  }

                  {experience.technologies.length > 0 && experience.technologies.map((technology, index) =>
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

export default Work;
