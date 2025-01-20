
import React from "react";
import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function InfoCard({ title, subtitle, image, downloadLink }) {
  const handleDownload = (event) => {
   event.stopPropagation();
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = downloadLink.split("/").pop();
    link.click();
  };
  const location = useLocation();
  const cardHeight = 
  location.pathname === "/schemes" ? 305 : 
  location.pathname === "/about" ? 300 : 
  location.pathname === "/" ? 300 : 
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
          margin: 2,
          display: "flex",
          flexDirection: "column",
          height: cardHeight,
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
              width: "60px",
              height: "60px",
              borderRadius: "30px",
              margin: "auto",
              mt: 1,
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
              fontSize: "18px",
              textAlign: "center",
              color: "#2c3e50",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#7f8c8d",
              mt: 1,
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>

        <Box sx={{ textAlign: "center", paddingBottom: "10px" }}>
          <Typography
            variant="body2"
            sx={{ color: "#2980b9", cursor: "pointer" }}
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

