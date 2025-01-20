import React, { useState,useEffect } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import ApplicantForm from "../auth/ApplicantForm";
import CommonButton from "../Components/CommonButton";
import AddIcon from '@mui/icons-material/Add';
import SchemesTabs from "./SchemesTabs";
import Services from "./Services";

const Schemes = () => {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); 
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end', 
        mt: 4,
      }}>


      </Box>

{/* <SchemesTabs/> */}
<Services/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "600px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
        
       
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
          >
            Applicant Form
          </Typography>
          <ApplicantForm onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Schemes;
