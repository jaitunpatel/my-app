import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, Button, Paper } from '@mui/material';
import useStyles from './styles';

// Landing Page Component
const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main">
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          borderRadius: '15px',
          width: '80%',
          maxWidth: '760px', // Max width to ensure responsiveness
          textAlign: 'left', // Center text alignment
        }}
      >
        <Typography
          className={classes.heading}
          component="h1"
          style={{
            color: 'black',
            letterSpacing: '0.1px',
            fontWeight: '600',
            fontSize: '50px', // Adjust font size to fit better
          }}
        >
          Customize your order with our unique sliders!
        </Typography>
        <Link to="/filters" style={{ textDecoration: 'none' }}>
          <Button
            className={classes.button}
            variant="contained"
            sx={{
              backgroundColor: '#428235',
              color: 'white',
              fontWeight: '600',
              borderRadius: '25px',
              padding: '10px 30px',
              transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for color and scale
              '&:hover': {
                backgroundColor: '#365f2e', // Darker green on hover
                transform: 'scale(1.05)', // Scale up on hover
              },
            }}
            size="large"
          >
            Begin
          </Button>
        </Link>
      </Paper>
    </Container>
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
