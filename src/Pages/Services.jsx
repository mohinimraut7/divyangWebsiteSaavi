import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import InfoCard from '../Components/InfoCard';  
import servicedata from '../data/servicedata'; 
import { NavLink } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';
const Services = () => {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4" color="primary" fontWeight="bold">
            वसई विरार महानगरपालिके तर्फे राबवण्यात येणाऱ्या विविध योजना
        </Typography>
        <Divider style={{ width: '25%', margin: '10px auto', borderBottom: '4px solid #4caf50' }} />
      </div>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {servicedata.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <InfoCard
              image={service.image}
              title={service.title}
              subtitle={service.description}
              downloadLink={service.selfdeclarion}
            />
            <NavLink/> 
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;
