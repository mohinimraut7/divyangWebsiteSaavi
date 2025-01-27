import React, { useState } from "react";
import { Box, Modal, Typography, IconButton, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Stepper, Step, StepLabel,Button } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import FormHelperText from '@mui/material/FormHelperText';

import { useFormik,Field } from "formik";
import * as Yup from "yup";
import CommonButton from "../Components/CommonButton";
import CommonTextField from "../Components/CommonTextField";
import axios from "axios";
import './ApplicationForm.css';
import './ApplicationFormNew.css'
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
import ApplicantPreview from "../Components/Modals/ApplicantPreview";
const ApplicantFormNew = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handlePreview = () => {
    console.log("Formik values:", formik.values);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
    
      Education: Yup.string().required("Education is required"),
      Ration_lightbill: Yup.string().required("Ration/Light Bill number is required"),
      IFSC_CODE: Yup.string().required("IFSC code is required"),
      BranchName: Yup.string().required("Branch name is required"),
      AccountNo: Yup.string().required("Account number is required"),
      Schemname: Yup.string().required('Scheme Name is required'),
   
      Caste: Yup.string().required('Caste is required'),

        AdhaarCard: Yup.string()
          .matches(/^\d{12}$/, "Aadhaar number must be 12 digits")
          .required("Aadhaar card number is required"),
          Disabilitycertificate: Yup.mixed().required('Disability certificate is required')
          .test(
            "fileSize",
            "Disability certificate size must be less than 100 KB",
            (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          )
          ,
          Residency: Yup.mixed().required('Residency certificate is required')
          .test(
            "fileSize",
            "Residency certificate size must be less than 100 KB",
            (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          )
          ,
          Canceledcheck: Yup.mixed().required('Canceledcheck is required')
          .test(
            "fileSize",
            "Canceled Check size must be less than 100 KB",
            (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          ),
          Selfdeclartion: Yup.mixed().required('Selfdeclartion is required')
          .test(
            "fileSize",
            "Self Declaration size must be less than 100 KB",
            (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          ),
          photo: Yup.mixed().required('Photo is required')
          .test(
            "fileSize",
            "Photo size must be less than 100 KB",
            (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          ),
          Applicantphoto:Yup.mixed().required('Applicant Photo is required')
          .test(
            "fileSize", 
            "Applicant Photo size must be less than 100 KB",
            (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          ),
          quotation: Yup.mixed()
  .when('Schemname', {
    is: 'वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांगांना स्वयंरोजगाराकरिता अनुदान देणे बाबत',
    then: () => Yup.mixed()
      .required('Quotation is required')
      .test(
        'fileSize',
        'Size must be less than 100 KB',
        (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
      ),
    otherwise: () => Yup.mixed().notRequired(),
  }),
        
  
          ubdertaking: Yup.mixed()
          .when('Schemname', {
            is: 'वसई-विरार शहर महानगरपालिका हद्दीतील (दिव्यांग) खेळाडूंना प्रोत्साहानात्मक अनुदान देणे',
            then: () => Yup.mixed()
              .required('Hamipatra is required')
              .test(
                'fileSize',
                'Size must be less than 100 KB',
                (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
              ),
            otherwise: () => Yup.mixed().notRequired(),
          }),
          
          sportstype: Yup.mixed().when('Schemname', {
            is: 'वसई-विरार शहर महानगरपालिका हद्दीतील (दिव्यांग) खेळाडूंना प्रोत्साहानात्मक अनुदान देणे',
            then: () => Yup.mixed().required('Sport Type is required'),
            otherwise: () => Yup.mixed().notRequired(),
          }),

          sportcertificate: Yup.mixed()
          .when('Schemname', {
            is: 'वसई-विरार शहर महानगरपालिका हद्दीतील (दिव्यांग) खेळाडूंना प्रोत्साहानात्मक अनुदान देणे',
            then: () => Yup.mixed()
              .required('Sport Certificate is required')
              .test(
                'fileSize',
                'Size must be less than 100 KB',
                (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
              ),
            otherwise: () => Yup.mixed().notRequired(),
          }),

          oneyear: Yup.mixed()
          .when('Schemname', {
            is: 'वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांग व्यक्तींना व्याधीग्रस्त आजार, शस्त्रक्रिया त्या अनुषंगींक आजारानुसार खर्चाच्या २५% अर्थसहाय्य उपलब्ध करुन देणे बाबत.',
            then: () => Yup.mixed()
              .required('Application within one year is required')
              .test(
                'fileSize',
                'Size must be less than 100 KB',
                (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
              ),
            otherwise: () => Yup.mixed().notRequired(),
          }),

          hopitlabillproof: Yup.mixed()
          .when('Schemname', {
            is: 'वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांग व्यक्तींना व्याधीग्रस्त आजार, शस्त्रक्रिया त्या अनुषंगींक आजारानुसार खर्चाच्या २५% अर्थसहाय्य उपलब्ध करुन देणे बाबत.',
            then: () => Yup.mixed()
              .required('Hospital Proof is required')
              .test(
                'fileSize',
                'Size must be less than 100 KB',
                (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
              ),
            otherwise: () => Yup.mixed().notRequired(),
          }),


          // hopitlabillproof:Yup.mixed()
          // .test(
          //   "fileSize", 
          //   "Size must be less than 100 KB",
          //   (value) => !value || (value && value.size <= 100 * 1024) // 100 KB in bytes
          // ),

        
  

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

  // const handleNext = async () => {
  //   const currentStepFields = steps[activeStep].fields; // सध्याच्या स्टेपच्या फील्ड्स
  //   const errors = await formik.validateForm(); // संपूर्ण फॉर्म वैधता तपासा
  
  //   // फक्त सध्याच्या स्टेपशी संबंधित फील्ड्स च्या एरर तपासा
  //   const hasErrors = currentStepFields.some((field) => errors[field]);
  
  //   if (hasErrors) {
  //     // एरर असल्यास पुढे जाऊ नका
  //     currentStepFields.forEach((field) => formik.setFieldTouched(field, true));
  //     return;
  //   }
  
  //   // पुढच्या स्टेपला जा
  //   setActiveStep((prevStep) => prevStep + 1);
  // };

  
  const handleNext = async () => {
    const currentStepFields = steps[activeStep].fields; // सध्याच्या स्टेपच्या फील्ड्स
    const errors = await formik.validateForm(); // संपूर्ण फॉर्मसाठी एरर तपासा
  
    // फक्त सध्याच्या स्टेपशी संबंधित फील्ड्ससाठी एरर तपासा
    const hasErrors = currentStepFields.some((field) => errors[field]);
  
    if (hasErrors) {
      // सध्याच्या फील्ड्सना 'touched' सेट करा, पण पुढे जाऊ द्या
      currentStepFields.forEach((field) => formik.setFieldTouched(field, true));
    }
  
    // पुढच्या स्टेपला जा
    setActiveStep((prevStep) => prevStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // const steps = ["Basic Details Of Applicant","Basic Details Of Divyang", "Bank Details", "Documents"];


  const hasErrors = (fields, errors, touched) => {
    return fields.some((field) => touched[field] && errors[field]);
  };

  const steps = [
    { label: "Basic Details Of Applicant", fields: ["name","Relationship","Applicantphoto"] },
    { label: "Basic Details Of Divyang", fields: ["divyangname","mobileno","Education,age"] },
    { label: "Bank Details", fields: ["IFSC_CODE","BranchName","AccountNo" ] },
    { label: "Documents", fields: ["AdhaarCard","Ration_lightbill","Schemname","sportstype","Disabilitycertificate","Canceledcheck","Selfdeclartion","photo","Residency",
      "quotation","ubdertaking","sportcertificate","oneyear","hopitlabillproof"] },
    
    // Add additional steps and fields as needed"
  ];
  
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',mt:5,}}>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: "96%" }}>
        {/* <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10, color: "gray" }}>
          <CloseIcon />
        </IconButton> */}

        <Typography variant="h6" align="center" mb={2} sx={{fontWeight:'bold',color:'#007185'}}>दिव्यांग योजनेसाठी अर्ज</Typography>

          {/* <Stepper activeStep={activeStep} alternativeLabel sx={{mb:5}}>
            {steps.map((label,index) => {
              console.log("index and activeSte",index,activeStep)
              return(
<Step key={label}>
                <StepLabel
                StepIconProps={{
                  sx: {
                    fontSize: '2.5rem',
                    color: activeStep === index ? 'green' : 'gray', 
                  },
                }}
                >{label}
                
                </StepLabel>
              </Step>
              )
              
            }
            )}
          </Stepper> */}
          {/* ---------------------------------------------------------------------------- */}
          {/* <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => (
        <Step key={index} completed={formik.isValid && formik.touched}>
          <StepLabel
            StepIconProps={{
              sx: {
                fontSize: "3rem", // StepIcon मोठं दिसण्यासाठी
                color: activeStep === index ? "primary.main" : "text.disabled", // सध्या असलेल्या स्टेपचा रंग ठळक करा
              },
              children: index + 1, // StepIcon मध्ये नंबर दाखवतो
            }}
            error={
              hasErrors(step.fields, formik.errors, formik.touched) && activeStep > index
            }
          >
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper> */}
{/* ------------------------------------------------ */}
<Stepper activeStep={activeStep} alternativeLabel>
  {steps.map((step, index) => (
    <Step key={index}>
      <StepLabel
        StepIconProps={{
          sx: {
            fontSize: "3rem", // StepIcon मोठं दिसण्यासाठी
            color: activeStep === index ? "primary.main" : "text.disabled", // सध्या असलेल्या स्टेपचा रंग ठळक करा
          },
          children: index + 1, // StepIcon मध्ये नंबर दाखवतो
        }}
        error={
          hasErrors(step.fields, formik.errors, formik.touched) && activeStep > index
        }
      >
        {step.label}
      </StepLabel>
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
                  <Grid item xs={12} sm={6} md={6} lg={4} sx={{position:'relative'}}>
                  <FileInput formik={formik} name="Applicantphoto" label="अर्जदाराचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
                  {formik.values.Applicantphoto && formik.values.Applicantphoto.name && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
          >
            {formik.values.Applicantphoto.name}
          </Typography>
        )}
                  </Grid>
              </>
            )}



            {activeStep === 1 && (
              <>
                
                <Grid item xs={12} sm={6} md={6} lg={2.9} 
                sx={{
                   mt: {
                    xs:2,
                    sm:2,
                    md:5,
                    lg:5,
                    xl:5
                  }
                }}>
                  <CommonTextField formik={formik} name="divyangname" label="दिव्यांग व्यक्तीचे पूर्ण नाव" sx={{ width: "100%", mb: 2 }} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={2.9} sx={{
                   mt: {
                    xs:2,
                    sm:2,
                    md:5,
                    lg:5,
                    xl:5
                  }
                }}>
                  <CommonTextField formik={formik} name="mobileno" label="दिव्यांग व्यक्तीचा मोबाईल क्रमांक" sx={{ width: "100%", mb: 2 }} inputProps={{ maxLength: 10 }} />
                </Grid>
               

                <Grid item xs={12} sm={6} md={6} lg={2.9} 
                sx={{
                  mt: {
                   xs:2,
                   sm:2,
                   md:5,
                   lg:5,
                   xl:5
                 }
               }}>
                
                  <CommonTextField formik={formik} name="Education" label="शिक्षण" sx={{ width: "100%", mb: 2 }} />
                  </Grid>
               
                  
                  <Grid item xs={12} sm={6} md={3.3}
                  sx={{
                    mt: {
                     xs:2,
                     sm:2,
                     md:5,
                     lg:5,
                     xl:5
                   }
                 }}>
                  
                  <CommonTextField formik={formik} name="age" label="जन्म तारीख" type="date" InputLabelProps={{ shrink: true }} sx={{ width: "100%", mb: 2 }} />
                </Grid>
                


<Grid item xs={12} sm={12} md={12} lg={2.9} sx={{border:'1px soild red'}}>
                 <Box>
               <FormControl fullWidth margin="normal" variant="outlined" 
               size="small"
               error={formik.touched.disability_in_percentage && Boolean(formik.errors.disability_in_percentage)}
               className='A-B-Input'>
                   <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold',color: '#2F4F4F',}}>अपंगत्वाची टक्केवारी</InputLabel>
                   <Select
                       id="disability_in_percentage"
                       name="disability_in_percentage"
                       labelId="disability_in_percentage"
                       value={formik.values.disability_in_percentage}
                       onBlur={formik.handleBlur}
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
                        height:'40px',
                       }}
                   >
                       {disabilitypercentage.map((per,index) => (
                           <MenuItem key={index} value={per.percentage} sx={{fontSize:'15px',fontWeight:'bold',width:"100%"}}>
                               {per.percentage}
                           </MenuItem>
                       ))}
                   </Select>
                   {formik.touched.disability_in_percentage && formik.errors.disability_in_percentage && (
      <FormHelperText>{formik.errors.disability_in_percentage}</FormHelperText>
    )}
               </FormControl>
               </Box>
                 </Grid>





                
               <Grid item xs={12} sm={12} md={12} lg={2.9}>
                 <Box>
               <FormControl fullWidth margin="normal" variant="outlined" 
                size="small"
                error={formik.touched.Gender && Boolean(formik.errors.Gender)}
               className='A-B-Input'>
                   <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold',color: '#2F4F4F' }}>दिव्यांग लाभार्थी</InputLabel>
                   <Select
                       id="Gender"
                       name="Gender"
                       labelId="Gender"
                       value={formik.values.Gender}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
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
                          // height:'40px'
                       }}
                   >
                       {genderdata.map((gender, index) => (
                           <MenuItem key={index} value={gender.gname} sx={{fontSize:'15px',fontWeight:'bold',width:"100%"}}>
                               {gender.gname}
                           </MenuItem>
                       ))}
                   </Select>
                   {formik.touched.Gender && formik.errors.Gender && (
      <FormHelperText>{formik.errors.Gender}</FormHelperText>
    )}
               </FormControl>
               </Box>
                 </Grid>
              

                <Grid item xs={12} sm={12} md={12} lg={3.1}>
                  <Box>
                <FormControl fullWidth margin="normal" variant="outlined" 
                
                 size="small"
                 error={formik.touched.Marriagestatus && Boolean(formik.errors.Marriagestatus)}
        
                className='A-B-Input'>
                    <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold',color: '#2F4F4F' }}>वैवाहिक स्थिती</InputLabel>
                    <Select
                        id="Marriagestatus"
                        name="Marriagestatus"
                        labelId="Marriagestatus"
                        value={formik.values.Marriagestatus}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                          //  height:'40px'
                        }}
                    >
                        {marriedstatusdata.map((mstatus, index) => (
                            <MenuItem key={index} value={mstatus.name} sx={{fontSize:'15px',fontWeight:'bold',width:"100%"}}>
                                {mstatus.name}
                            </MenuItem>
                        ))}
                    </Select>
                    {formik.touched.Marriagestatus && formik.errors.Marriagestatus && (
      <FormHelperText>{formik.errors.Marriagestatus}</FormHelperText>
    )}
                </FormControl>
                </Box>
                  </Grid>
                        
                
                

                   <Grid item xs={12} sm={12} md={12} lg={3.1}>
                    <Box>
                  <FormControl fullWidth margin="normal" variant="outlined" 
                  error={formik.touched.Caste && Boolean(formik.errors.Caste)}
                   size="small"
                  className='A-B-Input'>
                      <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold',color: '#2F4F4F' }}>जात</InputLabel>
                      <Select
                          id="Caste"
                          name="Caste"
                          labelId="Caste"
                          value={formik.values.Caste}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                            //  height:'40px'
                          }}
                      >
                          {castedata.map((castenames, index) => (
                              <MenuItem key={index} value={castenames.name} sx={{fontSize:'15px',fontWeight:'bold',width:"100%"}}>
                                  {castenames.name}
                              </MenuItem>
                          ))}
                      </Select>
                      {formik.touched.Caste && formik.errors.Caste && (
      <FormHelperText>{formik.errors.Caste}</FormHelperText>
    )}
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
                <Grid item xs={12} sm={6} md={6} lg={4} sx={{
                  mt: {
                    xs:2,
                    sm:2,
                    md:5,
                    lg:5,
                    xl:5
                  }
                }}>
                  <CommonTextField formik={formik} name="IFSC_CODE" label="बँकेचा IFSC CODE" sx={{ width: "100%", mb: 2 }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} sx={{
                  mt: {
                    xs:2,
                    sm:2,
                    md:5,
                    lg:5,
                    xl:5
                  }
                }}
                
                >
                  <CommonTextField formik={formik} name="BranchName" label="बँकेची शाखा" sx={{ width: "100%", mb: 2 }} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4} sx={{
                  mt: {
                    xs:2,
                    sm:2,
                    md:5,
                    lg:5,
                    xl:5
                  }
                }}>
                  <CommonTextField formik={formik} name="AccountNo" label="खाते क्रमांक" sx={{ width: "100%", mb: 2 }} />
                </Grid>
              </>
            )}

            {activeStep === 3 && (
              <>
                <Grid item xs={12} sm={6} md={6} lg={4}
                sx={{
                  mt: {
                    xs:2,
                    sm:2,
                    md:5,
                    lg:5,
                    xl:5
                  }
                }}
                >
                 
                 <CommonTextField formik={formik} name="AdhaarCard" label="आधार कार्ड नंबर" sx={{ width: "100%",
                 
                 }}  inputProps={{
                     maxLength: 12  
                   }}/>
                 </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={4} 
                  sx={{
                    mt: {
                      xs:2,
                      sm:2,
                      md:5,
                      lg:5,
                      xl:5
                    }
                  }}
                  >
                  
                   <CommonTextField formik={formik} name="Ration_lightbill" label="रेशनकार्ड नंबर/इलेक्ट्रोसोटी मीटर नंबर" sx={{ width: "100%",  }} />
                   </Grid>


       <Grid item xs={12} sm={12} md={12} lg={4} >
 
  <Box sx={{mt: {
        xs:2,
        sm:2,
      md:3,
        lg:3,
        xl:3
      }}}>
      <FormControl fullWidth margin="normal" variant="outlined"
      sx={{ }}
      size="small"
         error={formik.touched.Schemname && Boolean(formik.errors.Schemname)}


      className='A-B-Input'>
    <InputLabel id="ward-label" sx={{ fontSize: '12px', fontWeight: 'bold'}}>योजनेचे नाव</InputLabel>
    <Select
        id="Schemname"
        name="Schemname"
        labelId="Schemname"
        value={formik.values.Schemname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
          color: '#2F4F4F',
          fontWeight:'bold',
          fontSize: '12px',  
        }}
    >
        {schemedata.map((scheme, index) => (
            <MenuItem key={index} value={scheme.title} sx={{fontSize:'12px',fontWeight:'bold',width:"500px"}}>
                {scheme.sname} - {scheme.title}
            </MenuItem>
        ))}
    </Select>
    {formik.touched.Schemname && formik.errors.Schemname && (
      <FormHelperText>{formik.errors.Schemname}</FormHelperText>
    )}
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

<Grid item xs={12} sm={6} md={6} lg={4} sx={{position:'relative'}}>

                        <FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी नमुद असलेला.
                " sx={{ width: "100%", mb: 2 }} type="file"/>
                 {formik.values.Disabilitycertificate && formik.values.Disabilitycertificate.name && (
          <Typography
            variant="body2"
            color="textSecondary"
            className="filelabel"
            sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',
              bottom: (
      formik.errors.disability_in_percentage ||
      formik.errors.Canceledcheck ||
      formik.errors.Selfdeclartion
    ) ? '40%' : '27%',
              left:'34%'}}
          >
            {formik.values.Disabilitycertificate.name}
          </Typography>
        )}
</Grid>

<Grid item xs={12} sm={6} md={6} lg={4} sx={{position:'relative'}}>

                        <FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>

{formik.values.Canceledcheck && formik.values.Canceledcheck.name && (
<Typography
variant="body2"
color="textSecondary"
className="filelabel"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',
  bottom: (
    formik.errors.disability_in_percentage ||
    formik.errors.Canceledcheck ||
    formik.errors.Selfdeclartion
  ) ? '40%' : '27%',

left:'34%'}}
>
{formik.values.Canceledcheck.name}
</Typography>
)}
</Grid>


<Grid item xs={12} sm={6} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Selfdeclartion && formik.values.Selfdeclartion.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Selfdeclartion.name}
</Typography>
)}
</Grid>



<Grid item xs={12} sm={6} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.photo && formik.values.photo.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.photo.name}
</Typography>
)}
</Grid>


<Grid item xs={12} sm={6} md={6} lg={4.2} sx={{position:'relative'}}>

<FileInput formik={formik} name="Residency" label="रेशनकार्ड/घरपट्टी पावती/भाडेकराराची प्रत/आधारकार्ड/मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Residency && formik.values.Residency.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Residency.name}
</Typography>
)}
</Grid>

                       
     </>
   )}


{/* For Scheme 5 */}
{formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांगांना स्वयंरोजगाराकरिता अनुदान देणे बाबत" && (
    <>
<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative',boxSizing:'border-box'}}>

<FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी नमुद असलेला.
" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Disabilitycertificate && formik.values.Disabilitycertificate.name && (
<Typography
variant="body2"
color="textSecondary"

className="filelabel"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Disabilitycertificate.name}
</Typography>
)}
</Grid>
                       
<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative',boxSizing:'border-box'}}>

<FileInput formik={formik} name="Residency" label="रेशनकार्ड/घरपट्टी/भाडेकराराची प्रत/आधारकार्ड/मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>

{formik.values.Residency && formik.values.Residency.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Residency.name}
</Typography>
)}
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>


{formik.values.Canceledcheck && formik.values.Canceledcheck.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Canceledcheck.name}
</Typography>
)}
</Grid>
        


<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="Selfdeclartion" label="Self Declaration" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Selfdeclartion && formik.values.Selfdeclartion.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Selfdeclartion.name}
</Typography>
)}
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.photo && formik.values.photo.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.photo.name}
</Typography>
)}
</Grid>



<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="quotation" label="व्यवसाय खर्चाचे अंदाजपत्रक (कोटेशन)" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.quotation && formik.values.quotation.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.quotation.name}
</Typography>
)}
</Grid>
                
        
        
        
    </>
)}


{/* For Scheme 7 */}
{formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील (दिव्यांग) खेळाडूंना प्रोत्साहानात्मक अनुदान देणे" && (
    <>


<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी नमुद असलेला.
" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Disabilitycertificate && formik.values.Disabilitycertificate.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Disabilitycertificate.name}
</Typography>
)}
</Grid>



<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="Residency" label="रेशनकार्ड/घरपट्टी/भाडेकराराची प्रत/आधारकार्ड/मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Residency && formik.values.Residency.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Residency.name}
</Typography>
)}
</Grid>


    
<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Canceledcheck && formik.values.Canceledcheck.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Canceledcheck.name}
</Typography>
)}
</Grid>


       




<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Selfdeclartion && formik.values.Selfdeclartion.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Selfdeclartion.name}
</Typography>
)}
</Grid>




<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.photo && formik.values.photo.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.photo.name}
</Typography>
)}
</Grid>




<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="ubdertaking" label="रु.१००/- च्या स्टॅम्पपेपरवर व्यवसाया बाबतचे लेखी हमीपत्र." sx={{ width: "100%", mb: 2 }} type="file"/>

{formik.values.ubdertaking && formik.values.ubdertaking.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.ubdertaking.name}
</Typography>
)}
</Grid>

        
        
<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>
<FileInput formik={formik} name="sportcertificate" label="खेळाचे प्रमाणपत्र (रंगीत छायांकित प्रत)" sx={{ width: "100%", mb: 2 }} type="file"/>

{formik.values.sportcertificate && formik.values.sportcertificate.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.sportcertificate.name}
</Typography>
)}
</Grid>

      
               
        
    </>
)}


{/* For Scheme 8 */}
{formik.values.Schemname === "वसई-विरार शहर महानगरपालिका हद्दीतील दिव्यांग व्यक्तींना व्याधीग्रस्त आजार, शस्त्रक्रिया त्या अनुषंगींक आजारानुसार खर्चाच्या २५% अर्थसहाय्य उपलब्ध करुन देणे बाबत." && (
    <>

<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="Disabilitycertificate" label="दिव्यांगत्व प्रमाणपत्र टक्केवारी नमुद असलेला.
" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Disabilitycertificate && formik.values.Disabilitycertificate.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Disabilitycertificate.name}
</Typography>
)}
</Grid>



<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="Residency" label="रेशनकार्ड/घरपट्टी/भाडेकराराची प्रत/आधारकार्ड/मतदानकार्ड" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Residency && formik.values.Residency.name && (
<Typography
variant="body2"
color="textSecondary"
className="filelabel"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Residency.name}
</Typography>
)}
</Grid>







<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="Canceledcheck" label="लाभार्थ्यांच्या नावाचा कॅन्सल चेक बँक पासबुक प्रत
" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Canceledcheck && formik.values.Canceledcheck.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Canceledcheck.name}
</Typography>
)}
</Grid>




<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="Selfdeclartion" label="स्वयंघोषणा पत्र" sx={{ width: "100%", mb: 2 }} type="file"/>
{formik.values.Selfdeclartion && formik.values.Selfdeclartion.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.Selfdeclartion.name}
</Typography>
)}
</Grid>





<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="photo" label="दिव्यांगाचा फोटो" sx={{ width: "100%", mb: 2 }} type="file"/>

{formik.values.photo && formik.values.photo.name && (
<Typography
variant="body2"
color="textSecondary"
className="filelabel"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.photo.name}
</Typography>
)}
</Grid>


<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="oneyear" label="खेळाचे प्रमाणपत्र मिळाल्यापासून एक (१) वर्षाचे आत अर्ज करणे बंधनकारक राहील." sx={{ width: "100%", mb: 2 }} type="file"/>


{formik.values.oneyear && formik.values.oneyear.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.oneyear.name}
</Typography>
)}
</Grid>


<Grid item xs={12} sm={12} md={6} lg={4} sx={{position:'relative'}}>

<FileInput formik={formik} name="hopitlabillproof" label="हॉस्पीटलचे मुळदेयक (बिल), चालू वर्षात उपचार घेत असल्याचे कागदपत्र. (डॉक्टरांनी प्रमाणित केलेली)" sx={{ width: "100%", mb: 2 }} type="file"/>


{formik.values.hopitlabillproof && formik.values.hopitlabillproof.name && (
<Typography
variant="body2"
className="filelabel"
color="textSecondary"
sx={{ marginTop: '5px', fontSize: '14px',position:'absolute',bottom:'27%',left:'34%'}}
>
{formik.values.hopitlabillproof.name}
</Typography>
)}
</Grid>
        
        
               
               
    </>
)}

              </>
            )}
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {activeStep > 0 && (
          
          
<Button
  onClick={handleBack}
  variant="outlined"
  size="small"
  sx={{
    fontWeight: 'bold', 
    color: '#007185', 
    borderRadius: '20px',  
    borderColor: '#007185',  
    '&:hover': {
      borderColor: '#005f58', 
      backgroundColor: '#e0f4f1' 
    }
  }}
  startIcon={<ArrowBackIosNewOutlinedIcon variant="outlined"/>}
>
  Back
</Button>


            
            
          )}

         

          {activeStep < steps.length - 1 ? (
 <Button
  onClick={handleNext}
  variant="outlined"
  size="small"
  sx={{
    fontWeight: 'bold', 
    color: '#007185', 
    borderRadius: '20px',  
    borderColor: '#007185',  
    '&:hover': {
      borderColor: '#005f58', 
      backgroundColor: '#e0f4f1' 
    }
  }}
  endIcon={<ArrowForwardIosOutlinedIcon  sx={{ fontSize: '10px' }} />}
>
  Next
</Button>

          ) : (<>
        <Box>
           {/* ApplicantPreview Modal */}
        <Button
        variant="contained"
        size="small"
        onClick={handlePreview}
        sx={{mr:1}}
        disabled={Object.values(formik.values).every(value => value === "" || value === null)}
      >
        Preview
      </Button>
      {isModalOpen && (
        <ApplicantPreview open={isModalOpen} onClose={handleCloseModal} formikValues={formik.values} />
      )}
 <Button type="submit" color="primary" variant="contained" size="small">Submit</Button>
        </Box>
        

     
     
         
          </>
            
          )}
        </Box>
        
      </Box>
    </Box>




  );
};

export default ApplicantFormNew;
