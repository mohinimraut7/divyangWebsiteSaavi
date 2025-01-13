import React from 'react';
import { Grid, Typography, Box, Card, CardContent, IconButton } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

const TermsAndConditions = () => {
  // List of common terms (updated to include the additional term)
  const commonTerms = [
    "अर्जासोबत जोडण्यात आलेले सर्व छायांकित कागदपत्रे सक्षम अधिका-यांनी प्रमाणित केलेले असावे अथवा स्वयंघोषीत केलेले असावे.",
    "दाखल केलेल्या अर्जाच्या अनुषंगाने अर्थसहाय्य मंजूर करणे अथवा नाकारण्याचा अधिकार मा. आयुक्त , वसई विरार शहर महानगरपालिका यांना राहील.",
    "दिव्यांग व्यक्तीस इतर शासकीय योजनेचा लाभ मिळत असल्यास या योजनेबाबत लाभ देण्याचे ठरविले जाईल.",
    "या योजने बाबत आपणा मार्फत देण्यात आलेली माहिती चुकीची / खोटी असल्याचे निदर्शनास आल्यास या योजनेचे आपले अनुदान बंद करण्यात येईल.",
  ];

  // Additional specific term
  const additionalTerm = {
    headline: " दिव्यांग व्यक्तींसाठी व्याधीग्रस्त आजार व शस्त्रक्रिया अनुषंगाने 25% आर्थिक सहाय्य.",
    content: "दिव्यांग व्यक्तींना व्याधीग्रस्त आजार शस्त्रक्रिया त्याअनुषंगाने आजारानुसार खर्चाच्या 25% देण्यात येणारे अर्थसहाय्यचा धनादेश हॉस्पिटलच्या नावे देण्यात येईल.",
  };

  return (
    <Grid container spacing={4} sx={{ padding: '20px', justifyContent: 'center', width: '100%' }}>
      {/* Page Title */}
      <Grid item xs={12}>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: 'green',
              mb: 2,
              fontFamily: "'Tiro Devanagari Marathi', sans-serif",
            }}
          >
            <IconButton sx={{ color: 'green', marginRight: '10px' }}>
              <DescriptionIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            अटी व शर्ती
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              color: 'black',
              lineHeight: '1.6',
              fontFamily: "'Tiro Devanagari Marathi', sans-serif",
            }}
          >
            खालील सर्व अटी व शर्ती विचारात घ्या. या योजना लाभ घेताना नियमांचे पालन करणे आवश्यक आहे.
          </Typography>
        </Box>
      </Grid>

      {/* Cards for Common Terms */}
      {commonTerms.map((term, index) => (
        <Grid item xs={12} md={5.5} key={index}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: '15px',
              overflow: 'hidden',
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              animation: `fadeIn 1.5s ease-in-out ${index * 0.3}s`,
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'green',
                  mb: 1,
                  fontFamily: "'Tiro Devanagari Marathi', sans-serif",
                }}
              >
                {`अट क्र.${index + 1}`}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  fontFamily: "'Tiro Devanagari Marathi', sans-serif",
                }}
              >
                {term}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Additional Term Card */}
      <Grid item xs={12} md={5.5}>
        <Card
          sx={{
            boxShadow: 3,
            borderRadius: '15px',
            overflow: 'hidden',
            padding: '10px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
            animation: `fadeIn 1.5s ease-in-out`,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: 'green',
                mb: 1,
                fontFamily: "'Tiro Devanagari Marathi', sans-serif",
              }}
            >
              {additionalTerm.headline}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: '1.6',
                fontFamily: "'Tiro Devanagari Marathi', sans-serif",
              }}
            >
              {additionalTerm.content}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TermsAndConditions;