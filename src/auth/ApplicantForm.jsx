import React, { useState } from "react";
import { Box, Modal, Typography, IconButton, TextField,FormControl,InputLabel,Select,MenuItem,Grid} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonButton from "../Components/CommonButton";
import CommonTextField from "../Components/CommonTextField";
import axios from "axios";
import './ApplicationForm.css';
import FileInput from "../Components/FileInput";
import schemedata from "../data/dropdowndata/schemedata";
import genderdata from "../data/dropdowndata/genderdata";
import marriedstatusdata from "../data/dropdowndata/marriedstatusdata";
import castedata from "../data/dropdowndata/castedropdowndata";
const ApplicantForm = ({ onClose,applicationId }) => {
  console.log("applicationId",applicationId)
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
      name: applicationId.name||"",
      divyangname: applicationId.divyangname||"",
      Relationship:applicationId.Relationship||"",
      Address:applicationId.Address||"",
      mobileno:applicationId.mobileno||"",
      age: applicationId.age||"",
      Gender:applicationId.Gender||"",
      Marriagestatus:applicationId.Marriagestatus||"",
      disability_in_percentage:applicationId.disability_in_percentage||"",
      Caste:applicationId.Caste||"",
      Education:applicationId.Education||"",
      AdhaarCard:applicationId.AdhaarCard||"",
      Ration_lightbill:applicationId.Ration_lightbill||"",
      IFSC_CODE: applicationId.IFSC_CODE||"",
      BranchName:applicationId.BranchName||"",
      AccountNo:applicationId.AccountNo||"",
      Schemname:applicationId.Schemname||"",
      sportstype:applicationId.sportstype||"",
      Disabilitycertificate:applicationId.Disabilitycertificate||null,
      
      Residency: null,
      Canceledcheck: null,
      Selfdeclartion: null,
      photo:null,
      Applicantphoto:null,
      quotation:null,
      ubdertaking:null,
      sportcertificate:null,
      oneyear:null,
      hopitlabillproof:null,

    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
      divyangname: Yup.string().required("Divyang name is required"),
      Relationship: Yup.string().required("Relationship is required"),
      Address: Yup.string().required("Address is required"),
      mobileno: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .max(10, "Mobile number must be exactly 10 digits") 
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
      
       
        Object.keys(values).forEach((key) => {
          if (key.startsWith('image') && values[key]) {
            formData.append(key, values[key]); 
          } else {
            formData.append(key, values[key]);
          }
        });
    
      
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
  const filteredSchemes = schemedata.filter(scheme => !["योजना क्र. १", "योजना क्र. २", "योजना क्र. ३", "योजना क्र. ४", "योजना क्र. ५","योजना क्र. ६"].includes(scheme.sname));


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
            xs: "95%",  // 90% width on extra small screens
            sm: "95%",  // 80% width on small screens
            md: "95%",  // 60% width on medium screens
            lg: "95%",  // 50% width on large screens
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
        दिव्यांग योजना अर्ज 
        </Typography>

        <Box sx={{ paddingBottom: 2 }}>

        <Grid container spacing={2}>


        <Grid item xs={12} sm={6} md={6}>
       <CommonTextField formik={formik} name="name" label="अर्जदाराचे नाव" sx={{ width: "100%", mb: 2 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="divyangname" label="दिव्यांग व्यक्तीचे पूर्ण नाव" sx={{ width: "100%", mb: 2 }} />
  </Grid>



    
  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="Relationship" label="दिव्यांग व्यक्तीचे अर्जदाराशी नाते" sx={{ width: "100%", mb: 2 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="mobileno" label="मोबाईल क्रमांक" sx={{ width: "100%", mb: 2 }}  inputProps={{
      maxLength: 10  // Restricts user input to 10 digits
    }} />
  </Grid>


  <Grid item xs={12} sm={6} md={12}>
  <CommonTextField formik={formik} name="Address" label="पत्ता" sx={{ width: "100%", mb: 2 }} />
  </Grid>
  
  


  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="age" label="वय" sx={{ width: "100%", mb: 2 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="disability_in_percentage" label="अपंगत्वाची टक्केवारी" sx={{ width: "100%", mb: 2 }} />
  </Grid>





  <Grid item xs={12} sm={12} md={12} lg={6}>
  <Box>
<FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
    <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold' }}>Gender</InputLabel>
    <Select
        id="Gender"
        name="Gender"
        labelId="Gender"
        value={formik.values.Gender}
        onChange={formik.handleChange}
        label="लिंग"
        MenuProps={{
            PaperProps: {
                style: {
                    maxHeight: 300, // Set max height
                    overflow: "auto", // Enable scroll
                },
            },
        }}
        sx={{
          fontSize: '12px', // Reduce the font size of the selected value
        }}
    >
        {genderdata.map((gender, index) => (
            <MenuItem key={index} value={gender.gname} sx={{fontSize:'10px',fontWeight:'bold',width:"500px"}}>
                {gender.gname}
            </MenuItem>
        ))}
    </Select>
</FormControl>
</Box>
  </Grid>

  <Grid item xs={12} sm={12} md={12} lg={6}>
  <Box>
<FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
    <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold' }}>वैवाहिक स्थिती</InputLabel>
    <Select
        id="Marriagestatus"
        name="Marriagestatus"
        labelId="Marriagestatus"
        value={formik.values.Marriagestatus}
        onChange={formik.handleChange}
        label="वैवाहिक स्थिती"
        MenuProps={{
            PaperProps: {
                style: {
                    maxHeight: 300, // Set max height
                    overflow: "auto", // Enable scroll
                },
            },
        }}
        sx={{
          fontSize: '12px', // Reduce the font size of the selected value
        }}
    >
        {marriedstatusdata.map((mstatus, index) => (
            <MenuItem key={index} value={mstatus.name} sx={{fontSize:'10px',fontWeight:'bold',width:"500px"}}>
                {mstatus.name}
            </MenuItem>
        ))}
    </Select>
</FormControl>
</Box>
  </Grid>



  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="Education" label="शिक्षण" sx={{ width: "100%", mb: 2 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
 
  <CommonTextField formik={formik} name="AdhaarCard" label="आधार कार्ड नंबर" sx={{ width: "100%", mb: 2 }}  inputProps={{
      maxLength: 12  
    }}/>
  </Grid>


  <Grid item xs={12} sm={12} md={12} lg={6}>
  <Box>
<FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
    <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold' }}>जात</InputLabel>
    <Select
        id="Caste"
        name="Caste"
        labelId="Caste"
        value={formik.values.Caste}
        onChange={formik.handleChange}
        label="जात "
        MenuProps={{
            PaperProps: {
                style: {
                    maxHeight: 300, // Set max height
                    overflow: "auto", // Enable scroll
                },
            },
        }}
        sx={{
          fontSize: '12px', // Reduce the font size of the selected value
        }}
    >
        {castedata.map((castenames, index) => (
            <MenuItem key={index} value={castenames.name} sx={{fontSize:'10px',fontWeight:'bold',width:"500px"}}>
                {castenames.name}
            </MenuItem>
        ))}
    </Select>
</FormControl>
</Box>

  </Grid>
  <Grid item xs={12} sm={12} md={12} lg={6}>
 
  <Box>
      <FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
    <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold' }}>योजनेचे नाव</InputLabel>
    <Select
        id="Schemname"
        name="Schemname"
        labelId="Schemname"
        value={formik.values.Schemname}
        onChange={formik.handleChange}
        label="Schemname"
        MenuProps={{
            PaperProps: {
                style: {
                    maxHeight: 300, // Set max height
                    overflow: "auto", // Enable scroll
                },
            },
        }}
        sx={{
          fontSize: '12px', // Reduce the font size of the selected value
        }}
    >
        {schemedata.map((scheme, index) => (
            <MenuItem key={index} value={scheme.sname} sx={{fontSize:'10px',fontWeight:'bold',width:"500px"}}>
                {scheme.sname} - {scheme.title}
            </MenuItem>
        ))}
    </Select>
</FormControl>


                    </Box>
 </Grid>

 {formik.values.Schemname === "योजना क्र. ७" && (
 <Grid item xs={12} sm={6} md={6}>
       <CommonTextField formik={formik} name="sportstype" label="खेळाचा प्रकार व स्तर" sx={{ width: "100%", mb: 2 }} />
  </Grid>)}

 <Grid item xs={12} sm={6} md={6}>
 <CommonTextField formik={formik} name="IFSC_CODE" label="बँकेचा IFSC CODE" sx={{ width: "100%", mb: 2 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
 
  <CommonTextField formik={formik} name="BranchName" label="शाखेचे नाव" sx={{ width: "100%", mb: 2 }} />
  </Grid>




  <Grid item xs={12} sm={6} md={6}>
  <CommonTextField formik={formik} name="AccountNo" label="खाते क्रमांक" sx={{ width: "100%", mb: 2 }} />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
 
  <CommonTextField formik={formik} name="Ration_lightbill" label="रेशनकार्ड नंबर/इलेक्ट्रोसोटी मीटर नंबर" sx={{ width: "100%", mb: 2 }} />
  </Grid>

        </Grid>

         
         
        <Box
        component="img"
        sx={{
          height: 200, // Adjust height
          width: 300,  // Adjust width
          borderRadius: '8px', // Add rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow
        }}
        alt="Sample Image"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQMCBAMEBwYDBwMFAAABAgMABBESIQUTMVEiQWEUcZHRBiMyQoGToVJikrHB4RXS8CQzQ1NjcnM04vEHgqKjsv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHREBAQEBAQADAQEAAAAAAAAAAAERAhITITFRA//aAAwDAQACEQMRAD8A+0Gfw+Hl5/7xSE5+8IvzP7VmQMravI9B6eZq0k4P1an97tVxnVpuR5cvP/kFL2h84xF+Z/aswHT3VG4mjtreSeZ9Mcalmc+nahrXz27Rfmf2o57eXK/M/tXmrX6QSXPFbW1ezMQuEZxnYxqN1J94U+6u+CMtuNzWZZfxvvm8fVW+0PnpB+cf8tMXDZ3EOPSUn+lZ0YAfaXc/GpPKqkagBnoM9a1jGtHtH/i/j/tSM/8A4v4/7VV4ANXX92hWVj4Vx61MXVvtB8uV/GflS9oY9OV/GflVTnS3voA86Yat57efK/jPyp88jqYh/wDeflVBx1Pl0oXJOo9DTE1f7R+9F/EflR7R+8n4En+lQXr0ztVZ+wNsb+VF1dz2P2WT8c0c9/8AmRD8DVf3j0psMgLgHemJqXPf/mxfwmmJmPWWL+E/OqwMufLFAG53wT0NMXVvOPnLH/AfnWea7bm8uFonk89iAo9Tn+9VSTyz/V2hAQbSTHz9F9aviiihQJGukddzkk9z60w1asr6RmWPP/jPzp81v+an5Z+dZpLmGKTlnWz4yVjQsf0pJdJNI6KrJJHjKupBwSQCPgaYa1c7vKn5Z+dPm/vr+WfnVa77kafTPSmRTDU+Z++Pyz86NZ/aH5Z+dVgP5fCpA9zQ1Lmfvj8s/OjmP5Ov5Z+dY7+7FomrkySFyRpQZJIGcfj5VT/iCF25cLvpUHI88+Q7YoOlzH/bH5Z+dLnfvj8s/OsK8RJEwSB2KJq641f3qn/FAMKbaRDpz4jjzHzoOpzX/bH5Z+dLmP8A83/9f965knEgskqi1lPLbB09XHTIqEvFHjiBFu+S5HXyHT+dB0hlRgJnPnUWBxvQC+R4vxqepsHcEVWUAMEn1rPxOx/xOwktWblaxgN+NXlt/L1zTyQNsjsT1NFly65E3CVsrS8ntSfa2tiiSSb6AF0g/wBa4USxQxP/ALdCw0hoJJGfUi6QqDHkM+fnmvY3jstrMxIGI2O/Toa87b34Oj2g2bhnAcqmNQxnt3INSST8Xq+rtrBbpbxoYvboXKgaJHZy6ELjGPLfJqcvKlEcEV6svs0I+0TkkHLGr5J5I05VxPZ+0EEtGsf2uox8QfhVhuLi3iic+xqo8BTl9STgYNXWfMUw3xMJeXiugEF0AU+Hp1+B+Ndb6Pa2huMXPOAuGXoRpbqw+LZHoR2rFHds9uSzW2tJE3Efh04OR023GanaXl5JMYbW5sdWVJRV7kDP8h/8U08vQ4YNnGT5Uydfi04715SPjt006SNPALdWycLkunTPpvtVh4qwL44mnijbGsdG8j8KLj02N/TtTU46dDXDtJOLTxJMk1vIitudONQxvv8ACmsfH4YiY3t5Djwq3fPmfSiu4E8x50YrmW0XGRyubcWrAuOZ4SDjPiHwpXUHFpJWa2vIokYeFWXODsP6VB1iKWKw8Ohv4pJDfXCyxkeHAxvWyR+WhMjBEHUmqJsBoOSAMbk1kbVdowjPLtDtq+9J7uwoUG6bXOhEIO0Z+9jzb5VoQkjpQCxhEVQAFA2CjAA9Kg8kSyBCQXI6AdB3Pak11H7SbYMOcU1BDtlc96515Dy7uaWCJ5hPp5katjxjofd3FBO4P+H3DXhci2nYc8HcKcYDj+WPdWqyhcmS4mXTLPjCfsKN1H6k/iasSINAFnVWwRrXGxI6DFFxcHm8i2XXM22/RM+bH+lQWT3CREFgS58Kou5f8KjCs+ljOV1E7BB9gds+dRtoQgMhy0xPidh5dvQVeT60Es0sUhUs0GeQK10moBhy26+8UMFN3GgVAvKckafVRVXFNYtS8MRkkEiDCjJClgGIHfTk/hVHKmXhfOe1X2/2cMUU5Akxkr7sig1mFRcIOWMCM76duopiJOf9hPsfsjvWFlul4W8kUAN1uFQ/eGrbz228qFS5/wAMMvsoW7AOmIH16fCg6AiTnldCY5S/dHc1GKGMXjeGMfVL1Ud2rHYw3E9iXuolhuTqGM5A3Ok4+Bq6yh1WsUt2gimkXUygZ05+7+FBOG4jlEkMUySGNtLAEZQ9j8D8KmVYjrXDn4El0ZDENEjs8hcyfaL5wDt0Go7V1YufBBGiInKVdCjmHOwx2qstAA3zuc9aN3yO3es5NwTp5SYHUiU/5aeZlAYomPu/W9f/AMaotkj2wcMCMENVL2Nq8ek28eofu9NsfyqTPcbBkiOen13/ALaA8+NRjTxf9X/21ApLOFyHkggdgdvBv1pmzjz4oVOTkalzUVabQ31aemZT/lpl7hSq6Iemc80/KgS2MUYOmKMZwThepHemlnBEcxwxqcaSwXGw/wBCpGWbTjlQ6vWU/KopLcJu0MWPSU/5aBGztSdHKiC46BKmLW2OG9ni1Y3IQYNRd5yw0xR5b/qnp/DUw1yvhMUf5v8AagkEA6BQvYbVIELncAHyqgyT7/VxZHeU/KkjXJwVhi9RrJOPhQi8qz/ZNEa4JJI2qpZJ/ucvPQ4c7n4VXcXEsZQRojzMchNZ2HcnGw/1vRpqnnRFUyEkZwEXcsfQVR7NI0nPujupyijcJ8zUI4LiJmll5UjnYvkgAdhtt/OrZp2hiZrh4UQeZfAUHYeX4UFzFUHicYyBknG5/rWZ5ZIr2JHI9mmBTON0k8t/UZHvHrWGeS9TierTA0cqBLdm1aYz94N3J8u+MbbZvljN5BLCjodLheaTujjBB6Yypx+I99BdcJL7cj2nLaVFKtq3AVun8h78GtENuY4sFtT9WboSe9Z4EeGL/eRuxyXd8jJ8ye1V824vOmlLb9rSQ0n9v50GiR5Jxy7Y7A4kn7Hsvr6+VXRQxw6Qpwu+3Uk9ye9VRCREVY0iWNRgKARipkyvgKsfwPzoLsFQFJyRtmljJ389qgBcfe5efPY/Ok3P7x7b/ZPzoLM708A71Rpn/wCnv08J+dSHNHUx7ddj86C7AFBOPD3qhxNp/wCGd/2T/mphJsn/AHX8H96C4pt0oGKoKy/txg9gpx//AFTHN/bj/LP+aoLRjvWa5mWKSODkzTySKXAiK5wuM7kj9oVPE3eP+E/OuVxO/s4pgvEUV5UyFIUHAIB/azvt8KCs/SK3hnuIJlkhWJ9KsFzr8RXPxWkPpDw7SR9eQpK+GEkjHX4V0JOGwyA6gW1HJDBT+pHv3pCxEa+ALt0xEvyqsq5eI2sNtDPpeRJ11IyAZNOz4jHeylI+ZywgYO2CN/LarREyhVLsSMBfCBpPfpUzbFSDqK7YBCr0+FU+lxi0Hppz+tGkbqD9mqDE4IT2mVh1J8PyoELadXPl8Tdl+VBeVGndgPft/SnySu+ao5cgG08n4hflTMLayVupum4wvyoLioC9Tj940FAVz5b/AMqq0Pj/ANRN8F+VRVJY/F7RMw/ZOn5UPpc2hS2G3P8AapEk41btjtWZonJH18mSey7fpUxA67G4kPr4d/0oJtGMjuaeMbBiCfIedVGJgrE3EgwPPTt+lZlhkuyBDPNFbgYdl0hpB2BxsPX/AOagvLSSO0FtjUDh5OqoR2Hm2/Tp37GyCCKLUANTtkMznxP+NVxwxwhQkzxKo0Io0j+lZuKe1wcOklspiZlGvEoByo67Y7UWN55Y0q02DjZSfjWS4Ek0bwOI1mjImjP3HUHPb0wfjXLuVFxIlzqaZ4kw0GlHSWM48SEjr0OK6UfC4kuY5Irq5CoCBEXBQBsdx6UVORPbYJLWe3khiZPExYB8+RUqTjB3DdRgY860tyLS2C61iijGkDT4QB5AVVKwtwS0kzMxwkQ0kt+n9qhDaSyyc+4mZpOqDbTH7ttz6n8MeZKsWKS8YPKpSHOVh829W+XxrTywD0x3qgwFgAJZgR6iphSBhZJdvUfKiLtO1IKo8RzmqxGQdfNlz21D5UEM7bu4/EfKixfnalpB65ydqXJAx9bJv6j5VAxjXnmPhRnOofKipHSCASd+lTVQehrLJGdKoHfBkUNhsbdfKsHGL2DhSI0lvczxs2PBMfD8WqDs43I7dfSkcDrkVhmjVrRXQSozlCQ0jZGSNjvWk2sWdRLEduY3zoLdIIyDtTVao9nhO+JM+X1jY/nTEEer7/5jfOgswO7fE1CSGF1AeKJtO31i5pclfX8xvnURHENtDlh3dulUTV06a1+PvqYkTSSHXb1rC15aqMnxH0Wss3F7eANI3JSMOFGpD1zimM+o6rtGwY8xep+9VBkRG8TqAOpJrInG7IaPr7YK+wJUgYHWtU0cjFZAtuds7Kc4NFqxmjAB1rgnA3o1xYI5i4X1rLa65oUZEhUEBhsd8/6FWosoXJWDc5+yelEXCSEjaRdvWnqixs65PXeqdFxpOI4O2yGlypjsixaT+6etBcZIv+YvxoMkWw1r171UOcy6cQY9VNMJKu+mA9sKaCwyxK+NYydutPmxkfbBz65qiRZ3b7MIIPY1NNaTLEwjK6CQVGPOhGSOSO8Ie61RRaiRC/U4829PStbXEJP2/hVulNzpXfb3Uwi4wdKlf1o0512lvccRtA5R1jhlkCtuAwKAH3+I1rmmhjjfmuvUK3vqF1CXeC4h0CWIlRq6MrfaB/EKfeBRHA8jrLdtqZd1jVcKp7+poMfC7eO0tVt5ivLgmYwMOuk7/EZx+FbJryKL6uDS82+BuAPUnyFXXHOUqLZFyx0lyf8AdjHbzpQwRwoUUEsdy7dWPnQV26wxankkEkzgapP6DsKv50O41k4qec5boM7UxnB6YIoILJEN1bc0hJF5OKnpBAVR796NbDYHFBESxdNYzUhLEG6757Uxk+InJoLA7NqB71BzJ47wyzMl7iMtqSMbEZ8s4pTwTy+zgXYChAknqcHJ6d66oHh239TRv8N6DmOTps0VyTEwEhP3tutO+sors28qTIs9vJrjLDKnuCPX+ddIgH7RBHY1EKg+4PhQVXDIYSAwJDp0/wC4VaZo9/ENqZVSoGkbnfYUyATnAHpQREsWn7YpCWP9oVIlewpj3fpQV82P9sUcyLqXGalsDvijoMaAdzvQebBDrlSGHcHNY5njMcyjks4ZsJKwqzh0sM1sr20fLTBwqnPvP61pyDjOxxnfzrq8rjrpaPQ9ra6QhIBcfa7dfOuxYcR5NvEskkSpgao9Y8Pu3pfh8RSOf2QfTAqYvqt9jd25sbd0uISyoBguBg4HWvFfSPgf0nn4tdcT4B9I4Y4pJB/s7S4IjwMKBuNsH3ljvXqo5TFIXXz6jvWhr1Avhiy1Sx0n+kfGvpFwj6ccSlW5Mt3qWNUIjliToM58Mp3yTmpcA4D9KrllF3HLFJG2otLxLlAjPloJJPv2r6+13KehGO2kVDnS43c47Cp5X5I+f8P4F9O72V2uPpI9raFxpgnuQ0hUN94qMY9xz7q9naWP0iiuVx9KeHyW3NDNDJZ6m0gjIDmTO4zua6Iu5sYDDHqBV8d4oP1iAnuBTD5JW5poFcnnx5PdxsM1lu7xYpFeHRK6xHwhx3rQJA8eVIKee1R4kqJYOfqgm28jALj1zj+dRqMV5M01nDJ7Wtk8mR1znp2NZDKyyJIeMgRqyu+R1AJyD7xt8O9HErotbW7Sm0y+sB3Otdsb5XYVi1QAEPLwonfoHIPXHlvUaeoF7ZMshNwmIhqb90YBH6Mp/GqZeI2jK0QukDvlFKnJB6VwEeKCN9U3DUZCYZAEYoBpB0nbcgr8CB5U8QBWIPCzJGglGmJts9M7eZNB0+GCI3/Ni4iZ1YHEQOV6AbV0Hv7JQf8AaEBXqN++P6V5qO4igzJDNw63dlUjVEy7HbyHpSW5iZmZ5OGHO8jGFiTtvjag9LFxGymeNIrhH1kBcZ3Jz8qE4pZlcrKHXGoMilhjGeoHqPiO9cBDHbzExews8UqZxAepz59M7H+fpVUcsEcULo1mkbaVxy8eI6tx2GFPuwPSg9L/AIpZHSFuE1vgBRkk5OBt761jGCQMgdTXkbR430+ztwwBMNzVjIwScDqB/o1avGmI8XE7bGMjEDY93Sg9SCGbA69qRYA4xk4zXnG4pL4me/tVQMFOITkZ+znY7beQqdpfXvEWeK2v7ZpkQlsREeEnbyoPQgg59Dg++jOT7+lcnk8awDHdW4yc/Y9B6d8/662NFxcZxdQEgbZjGKDpa/IAUwynrtXNS34nqQvdQMA2WAjwCvYeea6WfILQGQD12qJbfGOtMjPlSyAMtkEelUSDALuv6UDB/CscnEoE4lDYYdppY2kOFBCquMk9huB/o1wPo9xaTifF+OcTllkHC7ZhBaoxwr8sEvJjHfIz+7UGv6OcSa+4t9IMbxw8QECk9PDEnT0zmu+WFeL/APp7cezWfs96re3Xl1eT7LtpSXG574Zcegr0vFeK8P4PbLc8VvYbOBnCLJM4UFiCdIz/ANp+FBxBxANcxRC0i5L+EyCVupUMmFA3Jycjr4ds07u+iXOiBV+saJsysfEGCjYDz1A1EszyygyHTgvC4chZBhTksf3NLe8elS5kNraoYlOzkPIjBOreJifeO33abU88tKQSPaxTELqZSWVDsuDjb0qvGRXZtYsWUEfkq+EEAZHfArPdWIY5QaQftHvW5dcuuP45umjFXNbyIcKpI7igW8p/4bfCrrnlU4p1pFlcn7MePfUxw6XqzDNNi+ayY2zQCOmffV0trLGMncVR6+VVnFsEvIkGk+A7aa6Fwskto6QhXkOCoYkD9CP51ygFOxNbbS7CJokOOxqWOnHWNtvHK9tGl8Q8hHjwoINJ7eCGHa2i0xL4VCbnHkNvSpxzKyncHNUSATXVvHJFlY2MqkNghhjG3n1NYx2lR9mFwmrlpEWjVkJjyUY5LZ94wM1bMrxJLIIxKSVVYyAPPc/29K5PG+KXAnSxtJeQ7nEkwUlhuAFUDzrBBbPLxuO2tJHPsr4kuACCzdWLHO++1RXqYzHKp5YV1BI2UdAfdVrQw6c8uPI3xp6/pVUGpLiZUdVBAIjUfZP4VcRhgCPfQLloSdQHkWwBuaSRKFwI41UHOPXv/OpLuD3o2Hv7VQgsZ6xgbY9KaxocalG1GdezDAoBJFEPIJxtntjrTOVzgAben4CgbjpvUdOdm6DzoRIMp2U7e6mRTwuNtjUaKWd6kpx1oAqPizsaCRO9IO2rSxAx3p471zPpFxCfhvC5bi3tTNIBpUF9PiOQvxOB+IqDwX0v+kclrJfzmQR+3nk2uggFoISRKSSNssSBg9jXG4HxgS2/HJRNEsEMMVpE3LzpeZsuABjO2kAeZGK8v9K+HTT2S3Ul5JcLbFbePEuQniCk+uoq5z06V6v/AOm/DbdOLcFsCFkL2rX92mnI5gccrPuGrHuorpfQziT3n0njvrxRbxwQ3sLKciNSZI5M56DZgCCcjFec+l/05vZZ73jVnBFc2EcsNrw+K7jMkDRnna5NBx4y0K4PkuR511GZprf2a2SQRwf4hdXjLlVuPrFPI1Yzk5TOPLbvXB+n0dxwQcowCaOw9nskRSdJcwmSQtgDfxJj/uaiPp/1rZkggJmMsY5QB0H/AHbYfqNiWzjsT3o0ZiheRUSEys6EsW1ICPCFHUHf4165XXokYCk5AAxjapkBh4ol8P2cjOKis3DifYYBy2TwkaXOSu/StBXG4pgHYaQB2FS0ntViVSY1bqozTWJB90fCrNJp4ParqYiFwcADFMY/SmQcYGaMEbkGoqt01bHce+ubeWmCWjA9cbCur7qiygjYZPntVlZvMrzhBGdqYxgk12JrRZPukD3VGGwCtkA591a9OXx3WKGzZ8M55aHv1rS0ehovZFGsOBqI+6SNX6Cty2653T8TVhj6bAVm1155xz4razup475V5hDZU56EHGcVaPZrOCWRAqoCzsF6kZ3z+tSexjaXmopRxEYlK9ACQScd8gUoLIIys+XKxco58xUaK0DNLJcSIFeQ4BH7HlWhWKqfDjBzUsMPspijS5IOmqDfOajkjpipKjAbjc0FD+x+NAtZC5IpjfyxRofO5OKQRxnNABhnTUm27UtDY6UhE2d87UDU6lyKdS0k/dxSKN5CgVAFMI3anpbtUESd68t9PLa64jZWfC7MyCWe6ErOoyFSIc3r3JCge+vVaD2pgOBjHwoPzt9KJeIyW3ErGLh9qlvc3kojUSeLEShAuPLTkEd969TwOD6a8E5V5DY8ImkZNMgLhGx21ajj4V9Nh+j/AA2OS4l/w+FpLmTmSl1DZbABO/Tp5VMcC4YG1Hh1ud84MYoPk/0k+kX0lafh6ycCtFYBl5NvNzNRMkbnZRsDoA/E1dxqw+mXFZLsrwt0tbu4ju3AhGvmiJY8AlvshVHUZzX1u3sbe1Ja1tIYWb7TRxhSfhWR+DBlwLi5Xfor4HSg7PuFFFFFGB2oxTooFijFOioFikdhmpUjQVtKihS7BQxABJxknpUDdQLGZTNGIwcFy4wDnHX37VluuD295eRXFxl+UBoQ/ZBByD7xVUfBnihureK6cQS5aNG/4bs7s5BGDvqHn5UHQa6hVtLyxhsasFgDjv7tqBd25UMJo9LHSDrG57Vzm4K7Rwh7jVItsIZXwRzcKRkjOOpJ6VJ+EyyLqaZRMJuaHQMuMgAgAHsPWg6KTxOXCOrFDhgDnSexppKkiqyeJW6Ebg1zJODNNJLzbk8h5BII0XGDncE+vTyrfb2sVrBHb26LHFGAqKOgHagDeWwUNz49LNoU6hgt29/pTW6gaQxrMhkGcqGGRj0rmngsgGIrnlhZzLGAGwg0FMfa9c9vStMVhKkxZpkIGsqQmGy3c599BpF3AVVuauljgHOxNRN7ahNZuYgvfUMVkThcggto2nzyn1SY1fWn13/GkOEGOZpLebTuNKSZZV6+vrQbhcwGTliZNfbUPf8AypNd26xCZp0WInGssAM5x19+3vrNBw1oZE+t1Ro2oDHizp09e1ZV4DpT/wBUxkDPgsusBWkVyMNnO69T0yaDrySpGup3CjON+9QW4hc4WVSdOrGR0qNzbvMiqHVSrqwyM9DmsacGWOdJkuJFcDTIBjEi5Jwe258qo2td26xiVpkEZ6NnY03uYULBpACuMg+vT/XrWK34QILRrQTu8GV0K+DoUdVHp1+NFxwnm3ouVmZNMYVYx9kkMjAn3aMfiaDX7Zb4U85AHbSpLAZOcY9+dvfVkkyRIXckAelYI+DQCdZ5lWWRSzDUPCGMhkBA7gnrWu8tmuIHiD6dYIzk7UFizxswUONRGQM74qyudDwySK5tJReTFLeHlGM4xJ03bbOdq6IGBigKKdFAqKdFQKinRQFFFFUFFFFQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRVBRRRQFFFFAUUUVAUUUVQUUUUBRRRQf/9k="
      />
{/* For Scheme 1 to 4 and 6 */}
{["योजना क्र. १", "योजना क्र. २", "योजना क्र. ३", "योजना क्र. ४", "योजना क्र. ६"].includes(formik.values.Schemname) && (
    <>
        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="Self Declaration" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Applicantphoto" label="अर्जदाराचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}

{/* For Scheme 5 */}
{formik.values.Schemname === "योजना क्र. ५" && (
    <>
        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="Self Declaration" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Applicantphoto" label="अर्जदाराचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="quotation" label="व्यवसाय खर्चाचे अंदाजपत्रक (कोटेशन)" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}

{/* For Scheme 7 */}
{formik.values.Schemname === "योजना क्र. ७" && (
    <>
     <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Applicantphoto" label="अर्जदाराचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
      
        <FileInput formik={formik} name="ubdertaking" label="रु.१००/- च्या स्टॅम्पपेपरवर व्यवसाया बाबतचे लेखी हमीपत्र." sx={{ width: "100%", mb: 2 }} type="file"/>
        
        <FileInput formik={formik} name="sportcertificate" label="खेळाचे प्रमाणपत्र (रंगीत छायांकित प्रत)" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}

{/* For Scheme 8 */}
{formik.values.Schemname === "योजना क्र. ८" && (
    <>
        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Applicantphoto" label="अर्जदाराचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="oneyear" label="खेळाचे प्रमाणपत्र मिळाल्यापासून एक (१) वर्षाचे आत अर्ज करणे बंधनकारक राहील." sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="hopitlabillproof" label="हॉस्पीटलचे मुळदेयक (बिल), चालू वर्षात उपचार घेत असल्याचे कागदपत्र. (डॉक्टरांनी प्रमाणित केलेली)" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}


          
        </Box>
        {!(applicationId) && (
<Box sx={{ textAlign: "center", mt: 2 ,display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
          <CommonButton type="submit" customWidth="17%">
            Submit
          </CommonButton>
        </Box>
)}
        
      </Box>
    </Modal>
  );
};

export default ApplicantForm;


