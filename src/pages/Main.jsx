import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='center-align'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <LocalHospitalIcon className='medical-icon' />
          <p className='welcome-txt'>Welcome to Medcare</p>
        </div>
        <h1 className='main-heading'>
          Taking care of your health is our top priority.
        </h1>
        <p className='sub-heading'>
          Being healthy is more than just not getting sick. It entails mental, physical, and social well-being. It's not just about treatment; it's about healing.
        </p>
        <button className='book-appointment-btn'>Book An Appointment</button>
      </div>
    </div>
  );
};

export default Main;
