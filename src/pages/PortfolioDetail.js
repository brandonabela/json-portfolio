import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';


function PortfolioDetail({ match }) {
  return (
    <div>
      <PageHeader name={"Portfolio Detail Page - ID" + match.params.id}></PageHeader>

      <Container>
      </Container>
    </div>
  );
}

export default PortfolioDetail;
