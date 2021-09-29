import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import profile from '../data/profile.json';
import PageHeader from '../components/PageHeader';


function NotFound() {
  return (
    <div className="notFound content">
      <PageHeader name="Page Not Found"></PageHeader>

      <section className='section-padding'>
        <Container>
          <p className="content-gutter text-center"> {profile.notFound} </p>

          <div className="spacer" />
          <Link className="btn" role="button" to="/"> Return Home </Link>
        </Container>
      </section>
    </div>
  );
}

export default NotFound;
