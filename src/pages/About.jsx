import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Button, Typography, Box, Grid } from '@mui/material';
import doctorImg from '../assets/doc1.jpg'; 
import icon from '../assets/sound.png'
import verifyIcon from '../assets/verified.png'

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '2rem',
        backgroundColor: '#5ddbdb18',
        paddingTop:'84px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative', 
      }}
    >
      {/* Left Section */}
       <Box sx={{ flex: 1,marginLeft: '6%'}}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className='icon-style' src={icon} alt="icon" style={{ marginRight: '8px' }} />
          <span className='aboutus-txt'>ABOUT US</span>
        </div>
        <h1 className='main-heading-about'>
          Welcome To Medcare Central Hospital
        </h1>
        <p className='sub-heading' style={{ marginBottom: '1.5rem', color: 'rgba(77, 76, 76, 0.877)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          Sed dignissim metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
        </p>
        <Box >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" className='about-points' sx={{ display: 'flex', alignItems: 'center', }}>
                <img src={verifyIcon} className='verify-icon' />
                15+ Years of excellence
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" className='about-points' sx={{ display: 'flex', alignItems: 'center',}}>
                <img src={verifyIcon} className='verify-icon' />
                24/7 Hour Medical Service
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" className='about-points' sx={{ display: 'flex', alignItems: 'center', }}>
                <img src={verifyIcon} className='verify-icon' />
                A Multispecialty hospital
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" className='about-points' sx={{ display: 'flex', alignItems: 'center', }}>
                <img src={verifyIcon} className='verify-icon' />
                A team of professionals
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <button 
          variant="contained" 
         className='book-appointment-btn'
        >
          Book An Appointment
        </button>
      </Box>
      
      {/* Right Section with Image and Overlapping Boxes */}
      <Box
        sx={{
          flex: 1,
          position: 'relative', // Allow positioning of boxes
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Overlapping Background Shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: '3%',
            width: '200px',
            height: '250px',
            backgroundColor: '#A7D3E0', // Light blue color for the first shape
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '45%',
            left: '24%',
            width: '200px',
            height: '250px',
            backgroundColor: '#B3E5FC', // Another shade for the second shape
            zIndex: 1,
          }}
        />
        <img
          src={doctorImg} // Ensure the image path is correct
          alt="Doctor"
          style={{ width: '100%', borderRadius: '8px', zIndex: 2,clipPath: 'inset(0% 10% 0% 30%)' }} // Bring image above shapes
        />
      </Box>
    </Box>
  );
};

export default About;
