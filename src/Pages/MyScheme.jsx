// import React from 'react';
// import { Grid, Typography, Box } from '@mui/material';

// const MyScheme = () => {
//   return (
//     <Grid container spacing={2}  sx={{display:'flex',justifyContent:'center',mt:5}}>
//       {/* Left Part: Description Text */}
//       <Grid item xs={12} md={5.5}>
//         <Box sx={{}}>
//         <Typography variant="h5" sx={{fontWeight:'bold',mb:2}} gutterBottom>
//           60 वर्षांवरील दिव्यांग व्यक्तींना सहाय्य: आर्थिक स्थैर्यासाठी नियमित आर्थिक मदत.
//           </Typography>
//              <Typography variant="body1" paragraph>
//              60 वर्षांवरील दिव्यांग व्यक्तींना सहाय्य: आर्थिक स्थैर्यासाठी नियमित आर्थिक मदत.
//              दिव्यांग व्यक्तींसाठी व्यवसाय सहाय्य: स्वावलंबनासाठी व्यवसाय सुरू करण्यासाठी आधार व प्रोत्साहन.
//              घरघंटी, शिलाई मशीन, संगणक इत्यादी साधने उपलब्ध करून देऊन उद्योजकता वाढीसाठी सहाय्य
//              त्यांच्या संगोपनासाठी व कुटुंबांना आर्थिक आधारासाठी मदत.
//              अपंगत्वानुसार सहाय्य: दिव्यांग व्यक्तींना त्यांच्या अपंगत्वाच्या प्रमाणानुसार आर्थिक सहाय्य व आधार.
//              दिव्यांग खेळाडूंसाठी प्रोत्साहन: विविध स्तरावरील खेळांमध्ये सहभागासाठी आर्थिक प्रोत्साहन व सहाय्य.
//              दिव्यांग व्यक्तींसाठी आरोग्य सहाय्य: उपचार, शस्त्रक्रिया व आजारांच्या खर्चासाठी आर्थिक मदत व सुविधा.
//                     </Typography>
         
         
//         </Box>
//       </Grid>

//       {/* Right Part: Image */}
//       <Grid item xs={12} md={5.5}>
//         <img
//           src="https://cdn.myscheme.in/images/about/about-text.svg"
//           alt="myScheme"
//           style={{ width: '100%', borderRadius: '10px' }}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default MyScheme;


// -------------------------

import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const MyScheme = () => {
  return (
    <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      {/* Left Part: Description Text */}
      <Grid item xs={12} md={5.5}>
        <Box sx={{ textAlign: 'justify' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }} gutterBottom>
            60 वर्षांवरील दिव्यांग व्यक्तींना सहाय्य: आर्थिक स्थैर्यासाठी नियमित आर्थिक मदत.
          </Typography>

          <Typography variant="body1" paragraph sx={{ color: '#34495e', fontSize: '1.1rem', lineHeight: '1.7' }}>
            60 वर्षांवरील दिव्यांग व्यक्तींना सहाय्य: आर्थिक स्थैर्यासाठी नियमित आर्थिक मदत.
            दिव्यांग व्यक्तींसाठी व्यवसाय सहाय्य: स्वावलंबनासाठी व्यवसाय सुरू करण्यासाठी आधार व प्रोत्साहन.
            घरघंटी, शिलाई मशीन, संगणक इत्यादी साधने उपलब्ध करून देऊन उद्योजकता वाढीसाठी सहाय्य.
            त्यांच्या संगोपनासाठी व कुटुंबांना आर्थिक आधारासाठी मदत.
            अपंगत्वानुसार सहाय्य: दिव्यांग व्यक्तींना त्यांच्या अपंगत्वाच्या प्रमाणानुसार आर्थिक सहाय्य व आधार.
            दिव्यांग खेळाडूंसाठी प्रोत्साहन: विविध स्तरावरील खेळांमध्ये सहभागासाठी आर्थिक प्रोत्साहन व सहाय्य.
            दिव्यांग व्यक्तींसाठी आरोग्य सहाय्य: उपचार, शस्त्रक्रिया व आजारांच्या खर्चासाठी आर्थिक मदत व सुविधा.
          </Typography>
        </Box>
      </Grid>

      {/* Right Part: Image */}
      <Grid item xs={12} md={5.5}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://cdn.myscheme.in/images/about/about-text.svg"
            alt="myScheme"
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyScheme;
