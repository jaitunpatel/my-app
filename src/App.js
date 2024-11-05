import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Typography, Button, Slider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
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
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginLeft: '40px' }}>Logo</div>
        <div style={{ display: 'flex', gap: '15px', marginRight: '40px' }}>
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
              fontWeight: 'bold',
              fontSize: '60px',
              lineHeight: '1.2',
              marginLeft: '40px'
            }}
          >
            Delight in Every Bite – Your Perfect Meal, Just Moments Away!
          </Typography>
          <Typography
            className={classes.heading}
            component="h1"
            style={{
              color: 'black',
              letterSpacing: '0.1px',
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '1.2',
              marginTop: '50px',
              marginLeft: '40px',
            }}
          >
            Customize your order with our unique sliders!
          </Typography>
          <Link to="/restrictions" style={{ textDecoration: 'none' }}>
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
                marginLeft: '40px',
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

const RestricionsPage = () => {
  const classes = useStyles();

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      overflow: 'hidden', 
      margin: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
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
            marginLeft: '40px',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            '&:hover': {
              backgroundColor: '#2A695C',
              transform: 'scale(1.05)',
            },
          }}
          size="large"
        >
          Next
        </Button>
      </Link>
    </div>
  );
};

// Filters Page Component
const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#538373', // color of the slider
  height: 15,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 32,
    width: 32,
    backgroundColor: '#fff', // color of the circle on slider
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#538373',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

const RangeSlider = ({ title, value, onChange, min, max, step, format }) => (
  <Box sx={{ width: '100%', maxWidth: '1200px', marginTop: 4 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <CustomSlider
      value={value}
      onChange={onChange}
      valueLabelDisplay="auto"
      aria-labelledby={`${title.toLowerCase()}-slider`}
      getAriaValueText={format}
      valueLabelFormat={format}
      min={min}
      max={max}
      step={step}
    />
    <Typography variant="body1" sx={{ marginTop: 1, textAlign: 'center' }}>
      {format(min)} - {format(value)}
    </Typography>
  </Box>
);


const FiltersPage = () => {
  const classes = useStyles();
  const [priceRange, setPriceRange] = useState(50);
  const [calorieRange, setCalorieRange] = useState(500);
  const [portionSize, setPortionSize] = useState(10);

  const handlePriceChange = (event, newValue) => setPriceRange(newValue);
  const handleCalorieChange = (event, newValue) => setCalorieRange(newValue);
  const handlePortionChange = (event, newValue) => setPortionSize(newValue);

  const formatPrice = (value) => `$${value}`;
  const formatCalories = (value) => `${value} cal`;
  const formatPortion = (value) => `${value} oz`;

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      overflow: 'hidden', 
      margin: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box
        sx={{
          backgroundColor: '#e6e8dd',
          flexGrow: 1,
          width: '100%',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          boxSizing: 'border-box'
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: 'black',
            letterSpacing: '0.1px',
            fontWeight: 'bold',
            fontSize: '60px',
            lineHeight: 1.2,
            marginBottom: 4,
            textAlign: 'center',
            width: '100%',
          }}
        >
          Set Your Preferences
        </Typography>
  
        <RangeSlider
          title="Price Range"
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={100}
          step={1}
          format={formatPrice}
        />

        <RangeSlider
          title="Calorie Range"
          value={calorieRange}
          onChange={handleCalorieChange}
          min={0}
          max={1000}
          step={50}
          format={formatCalories}
        />

        <RangeSlider
          title="Portion Size"
          value={portionSize}
          onChange={handlePortionChange}
          min={0}
          max={20}
          step={0.5}
          format={formatPortion}
        />

          {/* <Link to="/filters" style={{ textDecoration: 'none' }}> */}
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
                marginLeft: '40px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#2A695C',
                  transform: 'scale(1.05)',
                },
              }}
              size="large"
            >
              Show available menus
            </Button>
          {/* </Link> */}
      </Box>
    </div>
  );
};

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/restrictions" element={<RestricionsPage />} />
        <Route path="/filters" element={<FiltersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
