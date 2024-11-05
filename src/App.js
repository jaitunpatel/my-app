import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, Button, Paper } from '@mui/material';
import useStyles from './styles';
import landing from './images/landing.png';

// Landing Page Component
const LandingPage = () => {
  const classes = useStyles();

  return (
    <div style={{ height: '100vh', overflow: 'hidden', margin: 0 }}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Logo</div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span>Placeholder 1</span> 
          <span>Placeholder 2</span>
          <span>Placeholder 3</span>
        </div>
      </div>
  
      <div
        style={{
          backgroundColor: '#e6e8dd',
          height: 'calc(100vh - 50px)',
          overflowY: 'hidden',
          margin: 0,
          padding: 0,
          display: 'flex',
        }}
      >
        <div style={{
          width: '50%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <Typography
            className={classes.heading}
            component="h1"
            style={{
              color: 'black',
              letterSpacing: '0.1px',
              fontWeight: '600',
              fontSize: '50px',
              lineHeight: '1.2',
            }}
          >
            Delight in Every Bite – Your Perfect Meal, Just Moments Away!
          </Typography>
          <Link to="/filters" style={{ textDecoration: 'none' }}>
            <Button
              className={classes.button}
              variant="contained"
              sx={{
                backgroundColor: '#538373',
                color: 'white',
                fontWeight: '600',
                borderRadius: '25px',
                padding: '10px 30px',
                marginTop: '20px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#2A695C',
                  transform: 'scale(1.05)',
                },
              }}
              size="large"
            >
              Begin
            </Button>
          </Link>
        </div>
  
        <div style={{
        width: '50%',
        backgroundImage: `url(${landing})`,
        backgroundSize: '70%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        </div>
      </div>
    </div>
  );
};

// Filters Page Component
const FiltersPage = () => {
  return (
    <Container>
      <Typography variant="h4">Filters Page</Typography>
      {/* Add filter options here */}
    </Container>
  );
};

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filters" element={<FiltersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
