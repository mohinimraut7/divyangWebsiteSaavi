// import React from 'react';
// import { Grid, Typography, Box, IconButton } from '@mui/material';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';
// const OurVision = () => {
//   return (
//     <Grid container spacing={2} sx={{marginBottom:'30px',display:'flex',justifyContent:'space-around'}}>
//       {/* Left Part: Video */}
//       <Grid item xs={12} md={4.5}>
//   <Box sx={{ borderRadius: '10px', overflow: 'hidden', padding: '15px', backgroundColor: 'black' }}>
//     <iframe
//       sx={{ borderRadius: '10px' }} // Add border-radius to iframe directly
//       width="100%"
//       height="315"
//       src="https://www.youtube.com/embed/bNOWkB-6cmc"
//       title="YouTube video"
//       frameBorder="0"
//       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   </Box>
// </Grid>

//       {/* Right Part: Text */}
//       <Grid item xs={12} md={6}>
//         <Box>
//           <Typography variant="h5" sx={{fontWeight:'bold'}} gutterBottom>
//           <IconButton sx={{ color: '#007185'}}>
//         <RemoveRedEyeIcon sx={{fontSize:'40px'}}/>
//       </IconButton> आमचे दृष्टिकोन
//           </Typography>


//           <Typography variant="body1" paragraph>
//           आमचा दृष्टिकोन म्हणजे प्रत्येक नागरिकाचे जीवन अधिक सुलभ व सशक्त बनवणे.
//           दिव्यांग व्यक्तींना आर्थिक स्थैर्य व स्वावलंबनासाठी सहाय्य करणे.
//           व्यवसाय सुरू करण्यासाठी साधने आणि प्रोत्साहन देऊन त्यांना स्वावलंबी बनवणे.
//           त्यांच्या आरोग्यासाठी आवश्यक उपचार आणि आर्थिक मदतीची सुविधा पुरवणे.
//           दिव्यांग खेळाडूंना प्रोत्साहन देऊन त्यांचे यश सुनिश्चित करणे.
//           </Typography>

         
//           <Typography variant="h5" gutterBottom sx={{mt:4,fontWeight:'bold'}}>
//           <IconButton sx={{ color: '#007185'}}>
//         <ConfirmationNumberTwoToneIcon sx={{fontSize:'40px'}}/>
//       </IconButton> आमचे ध्येय
//           </Typography>

//           <Typography variant="body1" paragraph>
//           आमचे ध्येय म्हणजे नागरिकांना शासकीय योजना व लाभांसाठी सोप्या व प्रभावी पद्धतीने सेवा उपलब्ध करून देणे.
// शासकीय योजनांची माहिती शोधणे व त्या प्राप्त करण्यासाठी लागणारा वेळ व प्रयत्न कमी करणे.
// दिव्यांग व्यक्तींच्या सर्वांगीण विकासासाठी शैक्षणिक, व्यवसायिक व आरोग्य सेवांसाठी सहाय्य पुरवणे.
// त्यांना स्वावलंबी बनवून त्यांच्या कौशल्यांचा विकास करणे आणि समाजात सन्मानाने जीवन जगण्यासाठी प्रोत्साहन देणे.
// सर्व नागरिकांना शासकीय योजनांचा लाभ सहजपणे मिळावा यासाठी तंत्रज्ञानाचा उपयोग करणे.
//           </Typography>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default OurVision;
// ------------------------------------------
import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';

const OurVision = () => {
  return (
    <Grid container spacing={4} sx={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
      {/* Left Part: Video */}
      <Grid item xs={12} md={5.5}>
        <Box
          sx={{
            borderRadius: '15px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/bNOWkB-6cmc"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{ borderRadius: '10px' }}
          ></iframe>
        </Box>
      </Grid>

      {/* Right Part: Text */}
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: 'justify' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2c3e50', mb: 2 }}>
            <IconButton sx={{ color: '#007185', marginRight: '10px' }}>
              <RemoveRedEyeIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            आमचे दृष्टिकोन
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: '#34495e', fontSize: '1.1rem', lineHeight: '1.7' }}>
            आमचा दृष्टिकोन म्हणजे प्रत्येक नागरिकाचे जीवन अधिक सुलभ व सशक्त बनवणे. दिव्यांग व्यक्तींना आर्थिक स्थैर्य व स्वावलंबनासाठी सहाय्य करणे.
            व्यवसाय सुरू करण्यासाठी साधने आणि प्रोत्साहन देऊन त्यांना स्वावलंबी बनवणे. त्यांच्या आरोग्यासाठी आवश्यक उपचार आणि आर्थिक मदतीची सुविधा पुरवणे.
            दिव्यांग खेळाडूंना प्रोत्साहन देऊन त्यांचे यश सुनिश्चित करणे.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4, fontWeight: 'bold', color: '#2c3e50', mb: 2 }}>
            <IconButton sx={{ color: '#007185', marginRight: '10px' }}>
              <ConfirmationNumberTwoToneIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            आमचे ध्येय
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: '#34495e', fontSize: '1.1rem', lineHeight: '1.7' }}>
            आमचे ध्येय म्हणजे नागरिकांना शासकीय योजना व लाभांसाठी सोप्या व प्रभावी पद्धतीने सेवा उपलब्ध करून देणे.
            शासकीय योजनांची माहिती शोधणे व त्या प्राप्त करण्यासाठी लागणारा वेळ व प्रयत्न कमी करणे.
            दिव्यांग व्यक्तींच्या सर्वांगीण विकासासाठी शैक्षणिक, व्यवसायिक व आरोग्य सेवांसाठी सहाय्य पुरवणे.
            त्यांना स्वावलंबी बनवून त्यांच्या कौशल्यांचा विकास करणे आणि समाजात सन्मानाने जीवन जगण्यासाठी प्रोत्साहन देणे.
            सर्व नागरिकांना शासकीय योजनांचा लाभ सहजपणे मिळावा यासाठी तंत्रज्ञानाचा उपयोग करणे.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OurVision;
