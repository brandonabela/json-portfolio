import React from 'react';

function PortfolioDetail({ match }) {
    return (
        <div>
            <h2>Portfolio Detail Page - ID {match.params.id}</h2>
        </div>
    );
}

export default PortfolioDetail;
