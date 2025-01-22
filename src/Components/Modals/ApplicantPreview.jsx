import React from "react";
import { Modal, Box, Typography, Button, IconButton, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ApplicantPreview = ({ open, onClose, formikValues }) => {
  // Grouping formikValues into pairs of two fields per row, skipping "N/A" values
  const groupedEntries = Object.entries(formikValues)
    .filter(([_, value]) => value && value !== "N/A") // Filter out "N/A" values
    .reduce((acc, curr, index) => {
      if (index % 2 === 0) acc.push([curr]);
      else acc[acc.length - 1].push(curr);
      return acc;
    }, []);

  // Function to render the preview of files (PDF or Image)
  const renderFilePreview = (value) => {
    if (typeof value === "object" && value !== null) {
      const fileType = value.type || ""; // Assuming 'type' contains MIME type
      const fileName = value.name || "Unknown File"; // File name
      const fileURL = URL.createObjectURL(value); // Create a temporary URL for preview

      if (fileType.startsWith("image/")) {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={fileURL}
              alt={fileName}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "underline",
                wordBreak: "break-word",
                fontSize: "0.875rem",
              }}
            >
              {fileName}
            </Typography>
          </Box>
        );
      } else if (fileType === "application/pdf") {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "underline",
                wordBreak: "break-word",
                fontSize: "0.875rem",
              }}
            >
              {fileName}
            </Typography>
            <a
              href={fileURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "primary.main",
                textDecoration: "underline",
                fontSize: "0.875rem",
                fontWeight: "bold",
              }}
            >
              View PDF
            </a>
          </Box>
        );
      }
      return (
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "0.875rem" }}
        >
          {fileName}
        </Typography>
      );
    }
    return value || "";
  };

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
          width: "96%",
          bgcolor: "background.paper",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
          borderRadius: "12px",
          maxHeight: "90vh",
          overflowY: "auto",
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
            color: "grey.600",
            bgcolor: "grey.100",
            '&:hover': { bgcolor: "grey.300" },
            borderRadius: "50%",
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
            fontWeight: "600",
            color: "primary.main",
          }}
        >
          Applicant Preview
        </Typography>

        {/* Data Display */}
        <Box
          sx={{
            p: 2,
            borderRadius: "8px",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
            bgcolor: "#f9f9f9",
          }}
        >
          <Grid container spacing={2}>
            {groupedEntries.map((row, rowIndex) => (
              <Grid
                container
                item
                xs={12}
                spacing={2}
                key={rowIndex}
                sx={{
                  bgcolor: rowIndex % 2 === 0 ? "grey.100" : "white",
                  borderRadius: "8px",
                  p: 2,
                }}
              >
                {row.map(([key, value]) => (
                  <React.Fragment key={key}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <Typography
                        variant="body2" // Smaller font size
                        sx={{
                          fontWeight: "bold", // Bold text for keys
                          color: "text.primary",
                          textTransform: "capitalize",
                          fontSize: "0.875rem", // Small size (14px)
                        }}
                      >
                        {key.replace(/_/g, " ")}:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          wordBreak: "break-word",
                          fontSize: "0.875rem", // Small size (14px)
                        }}
                      >
                        {renderFilePreview(value)}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                ))}
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
              py: 1.5,
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
           Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicantPreview;


