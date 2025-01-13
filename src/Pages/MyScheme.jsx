import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const MyScheme = () => {
  return (
    <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', mt:'3px' }}>

       <Grid item xs={12} md={5.5}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            animation: `slideInFromRight 2s ease-in-out`,
            "@keyframes slideInFromRight": {
              "0%": { transform: "translateX(100%)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <img
            src="https://images.tv9hindi.com/wp-content/uploads/2021/09/physically-disabled-scheme.jpg"
            alt="myScheme"
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={5.5}>
        <Box
          sx={{
            textAlign: 'justify',
            animation: `slideInFromLeft 2s ease-in-out`,
            "@keyframes slideInFromLeft": {
              "0%": { transform: "translateX(-100%)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <Typography 
          variant="h4"
           sx={{ fontWeight: 'bold',
            color: 'green',
            mb: 2,
            fontFamily: "'Tiro Devanagari Marathi', sans-serif", }} gutterBottom>
               <IconButton sx={{ color: 'green', marginRight: '10px' }}>
                   <Diversity3Icon sx={{ fontSize: '40px' }} />
               </IconButton>
              समाजातील समावेश आणि विकास
           </Typography>

          <Typography variant="body1" paragraph sx={{  color: 'black', fontSize: '1.3rem', lineHeight: '1.7', mb: 2, fontFamily: "'Tiro Devanagari Marathi', sans-serif" }}>
          आम्ही दिव्यांग व्यक्तींना त्यांच्या जीवनात प्रगती करण्यासाठी एक प्लॅटफॉर्म तयार केला आहे. त्यांना स्वावलंबी बनविणे आणि समाजातील अन्य नागरिकांसोबत समान संधी मिळवून देणे हे आमचे मुख्य उद्दिष्ट आहे. आम्ही त्यांना शैक्षणिक, व्यवसायिक, आणि आरोग्य सेवा क्षेत्रांमध्ये आवश्यक साहाय्य प्रदान करतो, तसेच त्यांना खेळ, कला आणि इतर क्षेत्रांमध्ये प्रोत्साहन देऊन त्यांचे यश सुनिश्चित करतो.
          </Typography>
        </Box>
      </Grid>

     
    </Grid>
  );
};

export default MyScheme;
