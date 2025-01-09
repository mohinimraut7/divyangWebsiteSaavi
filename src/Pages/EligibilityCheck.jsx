import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import InfoCard from '../Components/InfoCard';  // Assuming InfoCard is imported correctly
// import servicedata from '../data/servicedata';  // Import the data
import eligibilitycheck from '../data/eligibilitycheck';

const EligibilityCheck = () => {
  return (
    <>
     
      <Grid container spacing={4}  alignItems="stretch" sx={{display:'flex',justifyContent:'center'}}>
        {eligibilitycheck.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <InfoCard
              image={service.image}
              title={service.title}
              subtitle={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default EligibilityCheck;

