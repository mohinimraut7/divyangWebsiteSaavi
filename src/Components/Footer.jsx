
import React from "react";
import { NavLink } from 'react-router-dom';
// import mapimg from '../assets/download.avif';
// import mapimg from '../assets/vasaivirarmap.jpg';
import mapimg from '../assets/mapimg5.png';
import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";


const curveAnimation = {
  "0%": { transform: "translateY(-100%)" },
  "100%": { transform: "translateY(0)" }
};


const fadeIn = {
  "0%": { opacity: 0, transform: "translateY(10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
};

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
      {/* Animated Curve Design */}
      <Box
        sx={{
          position: "absolute",
          top: "-30px",
          left: 0,
          right: 0,
          height: "60px",
          backgroundColor: "#fff",
          borderRadius: "50% 50% 0 0",
          animation: "1s ease-out",
          "@keyframes": curveAnimation,
        }}
      />

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
                animation: "1.5s ease-in-out " + fadeIn,
                mb: 1,
              }}
            >
              QUICK LINKS
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, animation: "2s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://communitysupport.nikshay.in/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Pradhan Mantri TB Mukt Bharat Abhiyan
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.2s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://onlinevvcmc.in/VVCMCOnlinePGProp/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Pay Your Property Tax
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.4s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://onlinevvcmc.in/VVCMCOnlinePGWater/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Pay Your Water Tax
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.6s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://onlinevvcmc.in/CRM/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Register your complaint
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.8s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://rtsvvmc.in/vvcmcrts/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Online Services
              </NavLink>
            </Typography>
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
                animation: "1.5s ease-in-out " + fadeIn,
                mb: 1,
              }}
            >
              QUICK LINKS
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, animation: "2s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://www.india.gov.in/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Government of India
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.2s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://mahasec.maharashtra.gov.in/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; State Election Commission
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.4s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://swachhbharatmission.gov.in/"
                component="a"
                target="_blank"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Swachh Bharat Abhiyan
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.6s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://vvcmc.in/sitemap/"
                component="a"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Sitemap
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.8s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="https://vvcmc.in/screen-reader/"
                component="a"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; SCREEN READER
              </NavLink>
            </Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid #FFEA99",
                display: "inline-block",
                pb: 0.5,
                animation: "1.5s ease-in-out " + fadeIn,
                mb: 1,
              }}
            >
              MOBILE LINKS
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, animation: "2s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="/electrical"
                component="a"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Electrical
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.2s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="/mechanical"
                component="a"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Mechanical
              </NavLink>
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.4s ease-in-out " + fadeIn, mb: 1 }}>
              <NavLink
                to="/hospital"
                component="a"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; Hospital
              </NavLink>
            </Typography>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                borderBottom: "2px solid #FFEA99",
                display: "inline-block",
                pb: 0.5,
                animation: "1.5s ease-in-out",
                "@keyframes": fadeIn,
              }}
            >
              ADDRESS
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, animation: "2s ease-in-out", "@keyframes": fadeIn }}>
              Vasai Virar City Municipal Corporation (V.V.C.M.C Head Office)
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.2s ease-in-out", "@keyframes": fadeIn }}>
              Virat Nagar, Near Mhada Colony Virar West. 401303
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.4s ease-in-out", "@keyframes": fadeIn }}>
              Toll free number: 1800-222-222
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.6s ease-in-out", "@keyframes": fadeIn }}>
              (022) 2977 0365
            </Typography>
            <Typography variant="body2" sx={{ animation: "2.8s ease-in-out", "@keyframes": fadeIn }}>
              email: vvcmc@vvcmc.in
            </Typography>
           
          </Grid>
        </Grid>

        {/* Social Media Links */}
        <Box sx={{display:'flex',justifyContent:'space-between',textAlign:'right'}}>
        <Box sx={{ display: "flex", justifyContent: "center",    }}>
          <IconButton href="https://www.facebook.com/VVCMC/" target="_blank" color="inherit" sx={{ mr: 2 }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com/VVCMC" target="_blank" color="inherit" sx={{ mr: 2 }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://www.instagram.com/vvcmc/" target="_blank" color="inherit" sx={{ mr: 2 }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://www.youtube.com/channel/UCXn4wOhd9-OwUzco53e15rw" target="_blank" color="inherit">
            <YouTube />
          </IconButton>
          </Box>
         
          <Box sx={{ mt: 3, animation: "3s ease-in-out", "@keyframes": fadeIn }}>
            <NavLink to="https://www.google.com/maps" target="_blank" style={{ textDecoration: 'none',}}>
              <img src={mapimg} alt="Map" style={{ width: "40%" }} />
              </NavLink>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
