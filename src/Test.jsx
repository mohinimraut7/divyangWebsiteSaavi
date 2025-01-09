import React, { useState } from "react";
import { Box, Modal, Typography, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonButton from "../Components/CommonButton";
import CommonTextField from "../Components/CommonTextField";
import axios from "axios";
import './ApplicationForm.css';
import FileInput from "../Components/FileInput";

const ApplicantForm = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      divyangname: "",
      Relationship: "",
      Address: "",
      mobileno: "",
      age: "",
      Gender: "",
      Marriagestatus: "",
      disability_in_percentage: "",
      Caste: "",
      Education: "",
      AdhaarCard: "",
      Ration_lightbill: "",
      IFSC_CODE: "",
      BranchName: "",
      AccountNo: "",
     
      Schemname:"",
      Disabilitycertificate:null,
      Residency:null,
      Canceledcheck:null,
      Selfdeclartion:null,
      photo:null,
      Applicantphoto:null,
      quotation:null,
      ubdertaking:null,
      sportcertificate:null,
      oneyear:null,
      hopitlabillproof:null

    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
      divyangname: Yup.string().required("Divyang name is required"),
      Relationship: Yup.string().required("Relationship is required"),
      Address: Yup.string().required("Address is required"),
      mobileno: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      age: Yup.string()
        .min(1, "Age must be a positive number")
        .required("Age is required"),
      Gender: Yup.string().required("Gender is required"),
      Marriagestatus: Yup.string().required("Marital status is required"),
      disability_in_percentage: Yup.number()
        .min(0, "Must be at least 0%")
        .max(100, "Cannot exceed 100%")
        .required("Disability percentage is required"),
      Caste: Yup.string().required("Caste is required"),
      Education: Yup.string().required("Education is required"),
      Ration_lightbill: Yup.string().required("Ration/Light Bill number is required"),
      IFSC_CODE: Yup.string().required("IFSC code is required"),
      BranchName: Yup.string().required("Branch name is required"),
      AccountNo: Yup.string().required("Account number is required"),
      AdhaarCard: Yup.string()
        .matches(/^\d{12}$/, "Aadhaar number must be 12 digits")
        .required("Aadhaar card number is required"),
    }),
    

    onSubmit: async (values) => {
      try {
        const formData = new FormData();
      
        // Append form values
        Object.keys(values).forEach((key) => {
          if (key.startsWith('image') && values[key]) {
            formData.append(key, values[key]); // Append the actual file object
          } else {
            formData.append(key, values[key]);
          }
        });
    
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          alert("User not logged in!");
          return;
        }
    
        // Send the form data to the API with the token
        const response = await axios.post(
          // "https://divyyang-vvcmc-schemes-1.onrender.com/api/submit",
          'https://divyang.codifyinstitute.org/api/submit',
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
    
        alert("Application Submitted Successfully!");
        handleClose();
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          alert(error.response.data.message || "Submission Failed!");
        } else {
          alert("An unexpected error occurred.");
        }
      }
    },
  });

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length === 4) {
      setImages(files); // Store the selected images
      setError(''); // Clear any previous error message
    } else {
      setError('Please select exactly four images');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      hideBackdrop={true}
      sx={{
        ".MuiBackdrop-root": {
          zIndex: 0, // Ensure backdrop stays behind
        },
        ".MuiBox-root": {
          zIndex: 1, // Ensure modal content stays on top of the backdrop
        },
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit} // Ensure form submission triggers formik
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          maxHeight: "90%",
          overflow: "auto",
          borderRadius: "10px",
          width: {
            xs: "90%",  // 90% width on extra small screens
            sm: "80%",  // 80% width on small screens
            md: "60%",  // 60% width on medium screens
            lg: "50%",  // 50% width on large screens
          },
          '&::-webkit-scrollbar': {
            width: "8px",
          },
          '&::-webkit-scrollbar-track': {
            // background: "#f1f1f1",
            borderRadius: "10px",
          },
          '&::-webkit-scrollbar-thumb': {
            background: "#23CCEF",
            borderRadius: "10px",
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: "#1EA2C1",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "gray",
            zIndex: 2, // Ensure the close icon stays on top
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" align="center" mb={2}>
          Applicant Form
        </Typography>

        <Box sx={{ paddingBottom: 2 }}>
          <CommonTextField formik={formik} name="name" label="Name" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="divyangname" label="Divyang Name" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Relationship" label="Relationship" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Address" label="Address" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="mobileno" label="Mobile Number" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="age" label="Age" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Gender" label="Gender" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Marriagestatus" label="Marital Status" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="disability_in_percentage" label="Disability Percentage" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Caste" label="Caste" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Education" label="Education" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Ration_lightbill" label="Ration/Light Bill" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="IFSC_CODE" label="IFSC Code" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="BranchName" label="Branch Name" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="AccountNo" label="Account Number" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="AdhaarCard" label="Aadhaar Card" sx={{ width: "100%", mb: 2 }} />
          <CommonTextField formik={formik} name="Schemname" label="Schem Name" sx={{ width: "100%", mb: 2 }} />
          {/* Image Path Inputs */}
         


          {/* <FileInput formik={formik} name="Disabilitycertificate" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="Residency" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="Canceledcheck" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="Selfdeclaration" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="photo" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="Applicantphoto" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="quotation" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="ubdertaking" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="sportcertificate" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="oneyear" sx={{ width: "100%", mb: 2 }} type="file"/>
          <FileInput formik={formik} name="hopitlabillproof" sx={{ width: "100%", mb: 2 }} type="file"/> */}

          <Box
          >
<Box sx={{ width: "100%", display: "flex",justifyContent:'center',
   alignItems: "center"}}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px",color: '#8DA399',
          fontSize: '12px',
           }}>
    Disability Certificate
  </Typography>
  <FileInput formik={formik} name="Disabilitycertificate" sx={{ width: "100%" }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px", color: '#8DA399',
          fontSize: '12px',
           }}>
    Residency Proof
  </Typography>
  <FileInput formik={formik} name="Residency" sx={{ width: "100%" }} type="file" />
</Box>


<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" 
  sx={{ marginRight: 2, minWidth: "150px"
, color: '#8DA399',
fontSize: '12px',
 
   }}>
    Canceled Check
  </Typography>
  <FileInput formik={formik} name="Canceledcheck" sx={{ width: "100%", color: '#8DA399',
fontSize: '12px',

   }} type="file"
  
  
  />
</Box>

<Box sx={{ width: "100%",display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
, color: '#8DA399',
fontSize: '12px',

   }}>
    Self Declaration
  </Typography>
  <FileInput formik={formik} name="Selfdeclaration" sx={{ width: "100%" }} type="file" />
</Box>

<Box sx={{ width: "100%",  display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
, color: '#8DA399',
fontSize: '12px',

   }}>
    Photo
  </Typography>
  <FileInput formik={formik} name="photo" sx={{ width: "100%"
    , color: '#8DA399',
    fontSize: '12px',
   }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
    , color: '#8DA399',
    fontSize: '12px',
   }}>
    Applicant Photo
  </Typography>
  <FileInput formik={formik} name="Applicantphoto" sx={{ width: "100%" }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
    , color: '#8DA399',
    fontSize: '12px',
   }}>
    Quotation
  </Typography>
  <FileInput formik={formik} name="quotation" sx={{ width: "100%"
    , color: '#8DA399',
    fontSize: '12px',
   }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
     , color: '#8DA399',
     fontSize: '12px',
   }}>
    Undertaking
  </Typography>
  <FileInput formik={formik} name="ubdertaking" sx={{ width: "100%"
    , color: '#8DA399',
    fontSize: '12px',
   }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
     , color: '#8DA399',
     fontSize: '12px',
   }}>
    Sports Certificate
  </Typography>
  <FileInput formik={formik} name="sportcertificate" sx={{ width: "100%" }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
     , color: '#8DA399',
     fontSize: '12px',
   }}>
    One Year Proof
  </Typography>
  <FileInput formik={formik} name="oneyear" sx={{ width: "100%"
    , color: '#8DA399',
    fontSize: '12px',
   }} type="file" />
</Box>

<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
  <Typography variant="body1" sx={{ marginRight: 2, minWidth: "150px"
     , color: '#8DA399',
     fontSize: '12px',
   }}>
    Hospital Bill Proof
  </Typography>
  <FileInput formik={formik} name="hopitlabillproof" sx={{ width: "100%"
    , color: '#8DA399',
    fontSize: '12px',
   }} type="file" />
</Box>
          </Box>







        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <CommonButton type="submit" customWidth="50%">
            Submit
          </CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicantForm;
