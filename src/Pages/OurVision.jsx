import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';

const OurVision = () => {
  return (
    <Grid container spacing={4} sx={{ marginBottom: '5px', display: 'flex', justifyContent: 'center', width: '100%' }}>
      {/* About Us Section */}
      <Grid item xs={12} sx={{ width: '100%', marginTop: '5px' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', color: 'green', mb: 2, mt: 2, fontFamily: "'Tiro Devanagari Marathi', sans-serif" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: "'Tiro Devanagari Marathi', sans-serif" }}
          >
            महाराष्ट्र शासनाचा पोर्टल दिव्यांग व्यक्तींना सरकारी योजनांच्या आर्थिक सहाय्याचा लाभ सहजपणे मिळवून देण्यासाठी समर्पित आहे. आमचा उद्देश दिव्यांग नागरिकांना स्वावलंबी जीवनासाठी आवश्यक माहिती आणि संसाधने उपलब्ध करणे आहे, जेणेकरून ते समान संधी आणि विकासाचा लाभ घेऊ शकतील.
          </Typography>
        </Box>
      </Grid>

          <Grid item xs={12} md={5.5}>
     <Box
    sx={{
      display: 'flex',
      flexDirection: 'column', 
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: 3,
      animation: `slideInFromLeft 2s ease-in-out`,
      "@keyframes slideInFromLeft": {
        "0%": { transform: "translateX(-100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      gap: '20px',
    }}
  >
    <Box
      sx={{
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <img
        width="100%"
        height="315"
        src="https://sarkaripariksha.com/daily-news-images/1681984707-news.jpeg"
        alt="First Image"
      />
    </Box>

     </Box>
     <Typography
            variant="h4"
            gutterBottom
            sx={{
              mt: 4,
              fontWeight: 'bold',
              color: 'green ',
              mb: 2,
              fontFamily: "'Tiro Devanagari Marathi', sans-serif",
            }}
          >
            <IconButton sx={{ color: 'green', marginRight: '10px' }}>
              <ConfirmationNumberTwoToneIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            आमचे ध्येय
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: 'black', fontSize: '1.3rem', lineHeight: '1.7', fontFamily: "'Tiro Devanagari Marathi', sans-serif" }}
          >
            आमचे ध्येय म्हणजे नागरिकांना शासकीय योजना व लाभांसाठी सोप्या व प्रभावी पद्धतीने सेवा उपलब्ध करून देणे.
            शासकीय योजनांची माहिती शोधणे व त्या प्राप्त करण्यासाठी लागणारा वेळ व प्रयत्न कमी करणे.
            दिव्यांग व्यक्तींच्या सर्वांगीण विकासासाठी शैक्षणिक, व्यवसायिक व आरोग्य सेवांसाठी सहाय्य पुरवणे.
            त्यांना स्वावलंबी बनवून त्यांच्या कौशल्यांचा विकास करणे आणि समाजात सन्मानाने जीवन जगण्यासाठी प्रोत्साहन देणे.
            सर्व नागरिकांना शासकीय योजनांचा लाभ सहजपणे मिळावा यासाठी तंत्रज्ञानाचा उपयोग करणे.
          </Typography>

</Grid>


      <Grid item xs={12} md={6}>
        <Box
          sx={{
            textAlign: 'justify',
            animation: `slideInFromRight 2s ease-in-out`,
            "@keyframes slideInFromRight": {
              "0%": { transform: "translateX(100%)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: 'green',
              mb: 2,
              fontFamily: "'Tiro Devanagari Marathi', sans-serif",
            }}
          >
            <IconButton sx={{ color: 'green', marginRight: '10px' }}>
              <RemoveRedEyeIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            आमचे दृष्टिकोन
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ color: 'black', fontSize: '1.3rem', lineHeight: '1.7', fontFamily: "'Tiro Devanagari Marathi', sans-serif" }}
          >
            आमचा दृष्टिकोन म्हणजे प्रत्येक नागरिकाचे जीवन अधिक सुलभ व सशक्त बनवणे. दिव्यांग व्यक्तींना आर्थिक स्थैर्य व स्वावलंबनासाठी सहाय्य करणे.
            व्यवसाय सुरू करण्यासाठी साधने आणि प्रोत्साहन देऊन त्यांना स्वावलंबी बनवणे. त्यांच्या आरोग्यासाठी आवश्यक उपचार आणि आर्थिक मदतीची सुविधा पुरवणे.
            दिव्यांग खेळाडूंना प्रोत्साहन देऊन त्यांचे यश सुनिश्चित करणे.
          </Typography>
              <Box
      sx={{
        mt:'20px',
        '&:hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
          transition: 'all 0.3s ease',
        },
      }}
    >
      <img
        width="100%"
        height="315"
        src="https://cms.patrika.com/wp-content/uploads/2022/02/23/23rotary_divyang_sahayata_shivir.jpg"
        alt="Second Image"
      />
    </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OurVision;

