import React, { useState } from "react";
import { Box, Modal, Typography, IconButton, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Stepper, Step, StepLabel,Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik,Field } from "formik";
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
import disabilitypercentage from "../data/dropdowndata/disabilitypercentage";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ApplicantFormNew = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  
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
      applicantMobileNumber:"",
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
      Schemname: "",
      sportstype: "",
      Disabilitycertificate: null,
      Residency: null,
      Canceledcheck: null,
      Selfdeclartion: null,
      photo: null,
      Applicantphoto: null,
      quotation: null,
      ubdertaking: null,
      sportcertificate: null,
      oneyear: null,
      hopitlabillproof: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
      divyangname: Yup.string().required("Divyang name is required"),
      Relationship: Yup.string().required("Relationship is required"),
      Address: Yup.string().required("Address is required"),
      mobileno: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      age: Yup.string().required("Date Of Birth is required"),
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
          Disabilitycertificate: Yup.mixed().required('Disability certificate is required'),
          Residency: Yup.mixed().required('Residency certificate is required'),
          Canceledcheck: Yup.mixed().required('Canceledcheck is required'),
          Selfdeclartion: Yup.mixed().required('Selfdeclartion is required'),
          photo: Yup.mixed().required('Photo is required'),
          Applicantphoto:Yup.mixed().required('Applicant Photo is required'),
          // sportcertificate:Yup.mixed().required('Sportcertificate is required'),
          // ubdertaking:Yup.mixed().required('Business undertaking on stamp paper of Rs.100 is required'),
        //  Schemname: Yup.string().required("Scheme name is required"),
 
  

    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          if (values[key] instanceof File) {
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

        const response = await axios.post(
          'https://divyang.codifyinstitute.org/api/submit',
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

         toast.success("Application Submitted successful", { position: "top-center" });
        handleClose();
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
            toast.error('Submission Failed!', { position: "top-center" });
        
        } else {
         toast.error('An unexpected error occurred.', { position: "top-center" });
        }
      }
    },
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const steps = ["Basic Details Of Applicant","Basic Details Of Divyang", "Bank Details", "Documents"];

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',mt:5,}}>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: "96%" }}>
        <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10, color: "gray" }}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" align="center" mb={2} sx={{fontWeight:'bold',color:'#007185'}}>दिव्यांग योजनेसाठी अर्ज</Typography>

        <Stepper activeStep={activeStep} alternativeLabel color="success" sx={{mb:5}}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ paddingBottom: 2 }}>
          <Grid container spacing={2}>

          {activeStep === 0 && (
              <>
                <Grid item xs={12} sm={6} md={6} lg={4} sx={{mt:4.5}}>
                  <CommonTextField formik={formik} name="name" label="अर्जदाराचे नाव" sx={{ width: "100%"}} />
                </Grid>
              
                <Grid item xs={12} sm={6} md={6} lg={4}  sx={{mt:4.5}}>
                  <CommonTextField formik={formik} name="Relationship" label="दिव्यांग व्यक्तीचे अर्जदाराशी नाते" sx={{ width: "100%", }} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                  <FileInput formik={formik} name="Applicantphoto" label="अर्जदाराचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
                  </Grid>
              </>
            )}



            {activeStep === 1 && (
              <>
                
                <Grid item xs={12} sm={6} md={6} lg={2.9}>
                  <CommonTextField formik={formik} name="divyangname" label="दिव्यांग व्यक्तीचे पूर्ण नाव" sx={{ width: "100%", mb: 2 }} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={2.9}>
                  <CommonTextField formik={formik} name="mobileno" label="दिव्यांग व्यक्तीचा मोबाईल क्रमांक" sx={{ width: "100%", mb: 2 }} inputProps={{ maxLength: 10 }} />
                </Grid>
               

                <Grid item xs={12} sm={6} md={6} lg={2.9}>
                  <CommonTextField formik={formik} name="Education" label="शिक्षण" sx={{ width: "100%", mb: 2 }} />
                  </Grid>
               
                  
                  <Grid item xs={12} sm={6} md={3.3}>
                  <CommonTextField formik={formik} name="age" label="जन्म तारीख" type="date" InputLabelProps={{ shrink: true }} sx={{ width: "100%", mb: 2 }} />
                </Grid>
                


<Grid item xs={12} sm={12} md={12} lg={2.9}>
                 <Box>
               <FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
                   <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold' }}>अपंगत्वाची टक्केवारी</InputLabel>
                   <Select
                       id="disability_in_percentage"
                       name="disability_in_percentage"
                       labelId="disability_in_percentage"
                       value={formik.values.disability_in_percentage}
                       onChange={formik.handleChange}
                       label="अपंगत्वाची टक्केवारी"
                       MenuProps={{
                           PaperProps: {
                               style: {
                                   maxHeight: 300, 
                                   overflow: "auto", 
                               },
                           },
                       }}
                       sx={{
                         fontSize: '15px', 
                        height:'40px'
                       }}
                   >
                       {disabilitypercentage.map((per,index) => (
                           <MenuItem key={index} value={per.percentage} sx={{fontSize:'15px',fontWeight:'bold',width:"100px"}}>
                               {per.percentage}
                           </MenuItem>
                       ))}
                   </Select>
               </FormControl>
               </Box>
                 </Grid>





                
               <Grid item xs={12} sm={12} md={12} lg={2.9}>
                 <Box>
               <FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
                   <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold' }}>दिव्यांग लाभार्थी</InputLabel>
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
                                   maxHeight: 300, 
                                   overflow: "auto", 
                               },
                           },
                       }}
                       sx={{
                         fontSize: '15px', 
                          height:'40px'
                       }}
                   >
                       {genderdata.map((gender, index) => (
                           <MenuItem key={index} value={gender.gname} sx={{fontSize:'15px',fontWeight:'bold',width:"100px"}}>
                               {gender.gname}
                           </MenuItem>
                       ))}
                   </Select>
               </FormControl>
               </Box>
                 </Grid>
              

                <Grid item xs={12} sm={12} md={12} lg={3.1}>
                  <Box>
                <FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
                    <InputLabel id="ward-label" sx={{ fontSize: '15px', fontWeight: 'bold' }}>वैवाहिक स्थिती</InputLabel>
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
                                    maxHeight: 300,
                                    overflow: "auto", 
                                },
                            },
                        }}
                        sx={{
                          fontSize: '15px', 
                           height:'40px'
                        }}
                    >
                        {marriedstatusdata.map((mstatus, index) => (
                            <MenuItem key={index} value={mstatus.name} sx={{fontSize:'15px',fontWeight:'bold',width:"100px"}}>
                                {mstatus.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </Box>
                  </Grid>
                        
                
                

                   <Grid item xs={12} sm={12} md={12} lg={3.1}>
                    <Box>
                  <FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
                      <InputLabel id="ward-label" sx={{ fontSize: '15px', fontWeight: 'bold' }}>जात</InputLabel>
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
                                      maxHeight: 300, 
                                      overflow: "auto", 
                                  },
                              },
                          }}
                          sx={{
                            fontSize: '15px', 
                             height:'40px'
                          }}
                      >
                          {castedata.map((castenames, index) => (
                              <MenuItem key={index} value={castenames.name} sx={{fontSize:'15px',fontWeight:'bold',width:"300px"}}>
                                  {castenames.name}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>
                  </Box>
                  
                    </Grid>

                    <Grid item xs={12} sm={6} md={12} sx={{mt:3}}>
                    <CommonTextField formik={formik} name="Address" label="पत्ता" sx={{ width: "100%", mb: 2 }} />
                    </Grid>
 

              </>
            )}

            {activeStep === 2 && (
              <>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <CommonTextField formik={formik} name="IFSC_CODE" label="बँकेचा IFSC CODE" sx={{ width: "100%", mb: 2 }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <CommonTextField formik={formik} name="BranchName" label="बँकेची शाखा" sx={{ width: "100%", mb: 2 }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <CommonTextField formik={formik} name="AccountNo" label="खाते क्रमांक" sx={{ width: "100%", mb: 2 }} />
                </Grid>
              </>
            )}

            {activeStep === 3 && (
              <>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                 
                 <CommonTextField formik={formik} name="AdhaarCard" label="आधार कार्ड नंबर" sx={{ width: "100%", mt: 2 }}  inputProps={{
                     maxLength: 12  
                   }}/>
                 </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                  
                   <CommonTextField formik={formik} name="Ration_lightbill" label="रेशनकार्ड नंबर/इलेक्ट्रोसोटी मीटर नंबर" sx={{ width: "100%", mt: 2 }} />
                   </Grid>
                   <Grid item xs={12} sm={12} md={12} lg={4}>
 
  <Box>
      <FormControl fullWidth margin="normal" variant="outlined" className='A-B-Input'>
    <InputLabel id="ward-label" sx={{ fontSize: '15px', fontWeight: 'bold' }}>योजनेचे नाव</InputLabel>
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
                    maxHeight: 300, 
                    overflow: "auto", 
                 
                },
            },
        }}
        sx={{
          fontSize: '15px', 
          height: '40px',
        }}
    >
        {schemedata.map((scheme, index) => (
            <MenuItem key={index} value={scheme.title} sx={{fontSize:'15px',fontWeight:'bold',width:"500px"}}>
                {scheme.sname} - {scheme.title}
            </MenuItem>
        ))}
    </Select>
</FormControl>


                    </Box>

                    {formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील (दिव्यांग) खेळाडूंना प्रोत्साहानात्मक अनुदान देणे" && (
                     <Grid item xs={12} sm={6} md={6} lg={12}>
                           <CommonTextField formik={formik} name="sportstype" label="खेळाचा प्रकार व स्तर" sx={{ width: "100%", mb: 2 }} />
                      </Grid>)}
 </Grid>

                {/* For Scheme 1 to 4 and 6 */}
                {["वसई-विरार शहर महानगरपालिका हद्दीतील ४०% ते ५९% दिव्यांगत्व असलेल्या अंध, अस्थिव्यंग, बहुविकलांग, कर्णबधिर-मुकबधिर दिव्यांग व्यक्तींना मासिक रु. १,०००/- अनुदान देणेबाबत.", "वसई-विरार शहर महानगरपालिका हद्दीतील ६० ते ७९% दिव्यांगत्व असलेल्या अंध, अस्थिव्यंग, बहुविकलांग, कर्णबधिर-मुकबधिर दिव्यांग व्यक्तींना मासिक १.५००/- अनुदान देणेबाबत", "वसई-विरार शहर महानगरपालिका हद्दीतील ८०% ते१००% दिव्यांगत्व असलेल्या अंध, अस्थिव्यंग बहुविकलांग, कर्णबधिर-मुकबधिर दिव्यांग व्यक्तींना मासिक २,०००/- अनुदान देणेबाबत.", "वसई-विरार शहर महानगरपालिका हदीतील ६० वर्षातील दिव्यांगांना कायमस्वरुपी प्रोत्साहनात्मक प्रतिमाह रु. २,०००/- अनुदान देणेबाबत", "वसई-विरार शहर महानगरपालिका हद्दीतील १८ वर्षावरील गतिमंद-मतिमंद व्यक्तींच्या संगोपनासाठी प्रतिमाह २,०००/- अनुदान देणे बाबत."].includes(formik.values.Schemname) && (
                    <>
                        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
                " sx={{ width: "100%", mb: 2 }} type="file"/>
                        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
                        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
                        <FileInput formik={formik} name="Selfdeclartion" label="Self Declaration" sx={{ width: "100%", mb: 2 }} type="file"/>
                        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
                       
                    </>
                )}


{/* For Scheme 5 */}
{formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांगांना स्वयंरोजगाराकरिता अनुदान देणे बाबत" && (
    <>
        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="Self Declaration" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
        
        <FileInput formik={formik} name="quotation" label="व्यवसाय खर्चाचे अंदाजपत्रक (कोटेशन)" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}


{/* For Scheme 7 */}
{formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील (दिव्यांग) खेळाडूंना प्रोत्साहानात्मक अनुदान देणे" && (
    <>
     <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
       
      
        <FileInput formik={formik} name="ubdertaking" label="रु.१००/- च्या स्टॅम्पपेपरवर व्यवसाया बाबतचे लेखी हमीपत्र." sx={{ width: "100%", mb: 2 }} type="file"/>
        
        <FileInput formik={formik} name="sportcertificate" label="खेळाचे प्रमाणपत्र (रंगीत छायांकित प्रत)" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}


{/* For Scheme 8 */}
{formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांग व्यक्तींना व्याधीग्रस्त आजार, शस्त्रक्रिया त्या अनुषंगींक आजारानुसार खर्चाच्या २५% अर्थसहाय्य उपलब्ध करुन देणे बाबत." && (
    <>
        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी (प्रमाण) नमुद असलेला. (सक्षम प्राधिकाऱ्यांचा दाखला)
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Residency" label="वसई विरार शहर महानगरपालिका हद्दीत राहत असल्याबाबतचा पुरावा रेशनकार्डची झेरॉक्स/वित्तीय वर्षाची घरपट्टीपावती झेरॉक्स / भाडेतत्वावर असल्यास करारनामा प्रत / आधारकार्ड / मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत
" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
       
        <FileInput formik={formik} name="oneyear" label="खेळाचे प्रमाणपत्र मिळाल्यापासून एक (१) वर्षाचे आत अर्ज करणे बंधनकारक राहील." sx={{ width: "100%", mb: 2 }} type="file"/>
        <FileInput formik={formik} name="hopitlabillproof" label="हॉस्पीटलचे मुळदेयक (बिल), चालू वर्षात उपचार घेत असल्याचे कागदपत्र. (डॉक्टरांनी प्रमाणित केलेली)" sx={{ width: "100%", mb: 2 }} type="file"/>
    </>
)}

              </>
            )}
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {activeStep > 0 && (
          
            <ArrowBackIosNewOutlinedIcon  onClick={handleBack} variant="outlined"  sx={{fontSize:'50px',fontWeight:'bold',color:"#007185"}}/>
            
          )}

          {activeStep < steps.length - 1 ? (
         
         
          //  <ArrowForwardIosOutlinedIcon  onClick={handleNext} variant="outlined" sx={{fontSize:'50px',fontWeight:'bold',color:"#007185"}}/>
          <Button
  onClick={handleNext}
  variant="outlined"
  sx={{
    fontSize: '20px', 
    fontWeight: 'bold', 
    color: '#007185', 
    borderRadius: '20px',  
    borderColor: '#007185',  
    padding: '10px 20px',  
    '&:hover': {
      borderColor: '#005f58', 
      backgroundColor: '#e0f4f1' 
    }
  }}
  endIcon={<ArrowForwardIosOutlinedIcon sx={{ fontSize: '24px' }} />}
>
  Next
</Button>

          ) : (<>
          {/* <Button>Preview</Button> */}
          <CommonButton type="submit" variant="contained" color="primary">Submit</CommonButton>
          </>
            
          )}
        </Box>
      </Box>
    </Box>




  );
};

export default ApplicantFormNew;
