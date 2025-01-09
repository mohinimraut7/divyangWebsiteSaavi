

import React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { useLocation } from "react-router-dom";


function InfoCard({ title, subtitle, image }) {
  const location = useLocation();

 
  const cardHeight = 
  location.pathname === "/schemes" ? 280 : 
  location.pathname === "/about" ? 300 : 
  location.pathname === "/" ? 280 : 
  280;

  return (
    <Card
      sx={{
        // maxWidth: 345,
        borderRadius: "5px",
        boxShadow: 3,
        margin: 2,
        display: "flex", 
        flexDirection: "column",
        height: cardHeight,
        justifyContent: "space-between", 
        "&:hover": {
          transform: "scale(1.01)", 
          backgroundColor: "#f2f2f2", 
       
          transition: "opacity 0.3s ease"
        },
       
      }}
    >
      {image && (
        <CardMedia
          component="img"
          sx={{
            width: '60px', 
            height: '60px', 
            borderRadius: "30px", 
            margin: "auto",
            mt:1 
            // display:'flex',
            // justifyContent:'center',
            // alignItems:'center'

          }}
          image={image}
          alt="Profile Image"
        />
      )}
      <CardContent sx={{ flex: 1 }}> {/* Allow CardContent to grow and fill space */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            textAlign: "center",
            color: "#2c3e50", 
            // marginBottom: "10px",
          }}
        >
          {title}
        </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#7f8c8d", 
              // marginBottom: "20px",
              mt:1
            }}
          >
            {subtitle}
          </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
