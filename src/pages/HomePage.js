import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const goToDisplayPage = () => {
        navigate('/display');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <Button variant="contained" color="primary" onClick={goToDisplayPage}>
                Go to Display Page
            </Button>
        </div>
    );
}

export default HomePage;
