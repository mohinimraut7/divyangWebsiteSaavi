import React from "react";
import { Modal, Box, Typography, Button, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ApplicantPreview = ({ open, onClose, formikValues }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="applicant-preview-title"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "800px",
          bgcolor: "background.paper",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          overflowY: "auto", // Enable scrolling for large content
          p: 4,
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "grey.500",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          id="applicant-preview-title"
          variant="h5"
          component="h2"
          sx={{
            mb: 4,
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Applicant Preview
        </Typography>

        {/* Data Display */}
        <Box
          sx={{
            p: 2,
            bgcolor: "#f9f9f9",
            borderRadius: "8px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <Grid container spacing={2}>
            {Object.entries(formikValues).map(([key, value]) => (
              <Grid
                container
                item
                xs={12}
                key={key}
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  pb: 2,
                  mb: 2,
                  alignItems: "center",
                }}
              >
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      textTransform: "capitalize",
                    }}
                  >
                    {key.replace(/_/g, " ")}:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      wordBreak: "break-word",
                    }}
                  >
                    {typeof value === "object" && value !== null
                      ? value.name || "No file uploaded"
                      : value || "N/A"}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Close Button at the Bottom */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{
              px: 4,
              py: 1,
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicantPreview;
