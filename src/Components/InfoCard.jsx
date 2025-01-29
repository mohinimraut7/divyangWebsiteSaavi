
import React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function InfoCard({ title, subtitle, image, downloadLink }) {
  const handleDownload = (event) => {
    event.preventDefault(); // Prevent NavLink redirection
    event.stopPropagation(); 
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = downloadLink.split("/").pop();
    link.click();
  };
  const location = useLocation();
  const cardHeight = 
  location.pathname === "/schemes" ? 450 : 
  location.pathname === "/about" ? 450 : 
  location.pathname === "/" ? 450 : 
  280;
  return (
    <NavLink
      to="/terms-and-conditions" 
      style={{ textDecoration: "none" }} 
    >
      <Card
        sx={{
          borderRadius: "5px",
          boxShadow: 3,
          // margin: 2,
          display: "flex",
          flexDirection: "column",
          height: cardHeight,
          width:'100%',
          justifyContent: "space-between",
          "&:hover": {
            transform: "scale(1.01)",
            backgroundColor: "#f2f2f2",
            transition: "opacity 0.3s ease",
          },
        }}
      >
        {image && (
          <CardMedia
            component="img"
            sx={{
              width: "90px",
              height: "90px",
              borderRadius: "45px",
              margin: "auto",
              mt:1
            }}
            image={image}
            alt="Profile Image"
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "22.5px",
              textAlign: "center",
              color: "#061E37",
              mt:1.5
            }}
          >
            {title}
          </Typography>
          <Typography
          textAlign="justify"
           
            sx={{
            fontWeight:600,
              fontSize:'16.9px',
              color: "#656565",

              mt: 2,
              
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>

        <Box sx={{ textAlign: "center", paddingBottom: "10px" }}>
          <Typography
            variant="body2"
            
            sx={{ color: "#1976D2", cursor: "pointer",fontWeight:'bold' }}
            onClick={handleDownload} 
          >
            डाउनलोड हमीपत्र 
          </Typography>
        </Box>
      </Card>
    </NavLink>
  );
}

export default InfoCard;

