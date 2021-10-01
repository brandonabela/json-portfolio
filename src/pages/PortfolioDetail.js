import React from 'react';
import { Badge, Button, Carousel, Col, Container, Row } from 'react-bootstrap';

import './PortfolioDetail.scss';
import projects from '../data/projects.json';
import PageHeader from '../components/PageHeader';


function PortfolioDetail({ match }) {
  const path = match.params.id;
  const projectName = path.replace(/-/g, ' ');

  const project = projects.filter(project => project.name.toLowerCase() === projectName)[0];

  return (
    <div className="portfolio-item content">
      <PageHeader name={project.name + " (" + project.start + " - " + project.end + ")"}></PageHeader>

      <section className='section-padding light-section'>
        <Container>
          <h4> Project Background </h4>

          {project.description.length > 0 && project.description.map((description, d_index) =>
            <div key={d_index}>
              <p> {description} </p>

              <div className="spacer" />
            </div>
          )}

          {project.buttons.length > 0 && project.buttons.map((button, b_index) =>
            <Button key={b_index} href={button.link}> {button.text} </Button>
          )}

          {project.buttons.length > 0 &&
            <div className="spacer" />
          }

          <h4> Technologies Used </h4>

          <ul>
            {project.technologies.map((technology, t_index) =>
              <Badge pill key={t_index}> {technology} </Badge>
            )}
          </ul>

          <div className="spacer" />

          <h4> Media </h4>

          <Row>
            {project.videos.length > 0 && project.videos.map((video, v_index) =>
              <Col md={6} sm={12} key={v_index}>
                <iframe
                  width="100%" height="315" src={"https://www.youtube.com/embed/" + video.split("=")[1]}
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
            )}
          </Row>

          {project.videos.length > 0 &&
            <div className="spacer" />
          }

          {project.images > 0 &&
            <div className="media-gutter">
              <Carousel>
                {[...new Array(project.images)].map((_, i_index) =>
                  <Carousel.Item key={i_index}>
                    <img
                      className="d-block w-100"
                      src={"./images/projects/" + project.imageHeading + String(i_index + 1).padStart(2, '0') + ".png"}
                      alt={project.imageHeading + String(i_index + 1).padStart(2, '0')}
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
          }

          {project.images > 0 &&
            <div className="spacer" />
          }
        </Container>
      </section>
    </div >
  );
}

export default PortfolioDetail;
