import { Button } from '@material-ui/core';
import React from 'react';

function Home() {
    return (
        <div>
            <h2>Home Page</h2>

            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
        </div>
    );
}

export default Home;
