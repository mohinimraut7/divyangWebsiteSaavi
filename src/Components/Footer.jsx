import React from "react";
import { NavLink } from 'react-router-dom';
import mapimg from '../assets/mapimg5.png';
import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#007185",
        color: "#fff",
        mt: 1,
        pt: 5,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid #FFEA99",
                display: "inline-block",
                pb: 0.5,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              QUICK LINKS
            </Typography>
            {[
              { text: "Pradhan Mantri TB Mukt Bharat Abhiyan", link: "https://communitysupport.nikshay.in/" },
              { text: "Pay Your Property Tax", link: "https://onlinevvcmc.in/VVCMCOnlinePGProp/" },
              { text: "Pay Your Water Tax", link: "https://onlinevvcmc.in/VVCMCOnlinePGWater/" },
              { text: "Register your complaint", link: "https://onlinevvcmc.in/CRM/" },
              { text: "Online Services", link: "https://rtsvvmc.in/vvcmcrts/" },
            ].map((item, index) => (
              <Typography
                variant="body2"
                key={index}
                sx={{
                  mb: 1,
                  "&:hover": { color: "#FFEA99", textDecoration: "underline" },
                }}
              >
                <NavLink to={item.link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                  &gt; {item.text}
                </NavLink>
              </Typography>
            ))}
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid #FFEA99",
                display: "inline-block",
                pb: 0.5,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              QUICK LINKS
            </Typography>
            {[
              { text: "Government of India", link: "https://www.india.gov.in/" },
              { text: "State Election Commission", link: "https://mahasec.maharashtra.gov.in/" },
              { text: "Swachh Bharat Abhiyan", link: "https://swachhbharatmission.gov.in/" },
              { text: "Sitemap", link: "https://vvcmc.in/sitemap/" },
              { text: "SCREEN READER", link: "https://vvcmc.in/screen-reader/" },
            ].map((item, index) => (
              <Typography
                variant="body2"
                key={index}
                sx={{
                  mb: 1,
                  "&:hover": { color: "#FFEA99", textDecoration: "underline" },
                }}
              >
                <NavLink to={item.link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
                  &gt; {item.text}
                </NavLink>
              </Typography>
            ))}
          </Grid>

          {/* Column 3 */}
          {/* <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid #FFEA99",
                display: "inline-block",
                pb: 0.5,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              MOBILE LINKS
            </Typography>
            {[
              { text: "Electrical", link: "/electrical" },
              { text: "Mechanical", link: "/mechanical" },
              { text: "Hospital", link: "/hospital" },
            ].map((item, index) => (
              <Typography
                variant="body2"
                key={index}
                sx={{
                  mb: 1,
                  "&:hover": { color: "#FFEA99", textDecoration: "underline" },
                }}
              >
                <NavLink to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                  &gt; {item.text}
                </NavLink>
              </Typography>
            ))}
          </Grid> */}

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid #FFEA99",
                display: "inline-block",
                pb: 0.5,
                mb: 2,
                fontWeight: "bold",
              }}
            >
              ADDRESS
            </Typography>
            <Box
              sx={{
                border: "2px solid #FFEA99",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Typography variant="body2">
                Vasai Virar City Municipal Corporation (V.V.C.M.C Head Office)
              </Typography>
              <Typography variant="body2">Virat Nagar, Near Mhada Colony Virar West. 401303</Typography>
              <Typography variant="body2">Toll free number: 1800-222-222</Typography>
              <Typography variant="body2">(022) 2977 0365</Typography>
              <Typography variant="body2">email: vvcmc@vvcmc.in</Typography>
            </Box>
          </Grid>

          {/* Map Image */}
          <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "center" }}>
  <Typography
    variant="h6"
    gutterBottom
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "10px",
      borderBottom: "2px solid #FFEA99", 
      display: "inline-block", 
      paddingBottom: "5px",
    }}
  >
    Map of VVCMC
  </Typography>
  <NavLink to="https://www.google.com/maps" target="_blank">
    <img
      src={mapimg}
      alt="Map"
      style={{
        width: "80%",
        height: "auto",
        borderRadius: "5px",
        marginLeft: "50px",
      }}
    />
  </NavLink>
</Grid>

        </Grid>

        

        {/* Social Media Links */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {[Facebook, Twitter, Instagram, YouTube].map((Icon, index) => (
              <IconButton
                key={index}
                href="#"
                target="_blank"
                color="inherit"
                sx={{
                  mr: 1,
                  "&:hover": { color: "#FFEA99", transform: "scale(1.1)" },
                }}
              >
                <Icon/>
              </IconButton>
            ))}
          </Box>
         
      </Container>
    </Box>
  );
};

export default Footer;
