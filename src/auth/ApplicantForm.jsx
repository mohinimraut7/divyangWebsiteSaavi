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
      sportstype:"",
      Disabilitycertificate: null,
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

        <Box sx={{ textAlign: "center", mt: 2 ,display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
          <CommonButton type="submit" customWidth="17%">
            Submit
          </CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicantForm;


