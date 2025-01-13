import React,{useState} from 'react';
import { Box, Typography,Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CommonButton from '../Components/CommonButton';
import CommonTextField from '../Components/CommonTextField';
//   import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from 'react-router-dom';


const SignIn = () => {
//   const { login } = useAuth(); 
  const navigate = useNavigate(); // Hoo
  const formik = useFormik({
    initialValues: {
     mobileno: '', 
      password: '',
    
    },
    validationSchema: Yup.object({
      
      mobileno: Yup.string()
        .matches(/^\d{10}$/, 'Mobile Number must be exactly 10 digits')
        .required('Mobile Number is required'),
      password: Yup.string().required('Password is required'),
     
    }),
    onSubmit: async (values) => {
      try {
        const trimmedMobileno = values.mobileno.trim();
        const trimmedPassword = values.password.trim();
        const url = 'https://divyang.codifyinstitute.org/api/login';

        const payload = {
          mobileno: trimmedMobileno,
          password: trimmedPassword,
        };

        const response = await axios.post(url, payload);
        toast.success("Login successful", { position: "top-center" });
        localStorage.setItem('token', response.data.token);

        // login(response.data.token); 
         navigate('/'); 
      
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          toast.error('Invalid credentials! Please try again.', { position: "top-center" });
        } else {
          toast.error('An unexpected error occurred.', { position: "top-center" });
        }
      }
    },
  });

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
        
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          bgcolor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', mt:2,mb:2,color:'#007185'}}>
          Login Form
        </Typography>

       
        <CommonTextField formik={formik} name="mobileno" label="Mobile Number" />
        <CommonTextField formik={formik} name="password" label="Password" type="password" />

       
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CommonButton type="submit" customWidth="35%" sx={{backgroundColor:'#007185'}}>
          Sign In
          </CommonButton>
        </Box>
<NavLink onClick={() =>navigate('/register')}>
        <Typography
          sx={{
            mt: 2,
            textAlign: 'center',
            fontSize: '14px',
            cursor: 'pointer',
            '&:hover': { color: '#1976d2' },
          }}
        >
          
  Don't have an account? Register
        </Typography>
        </NavLink>
      </Box>
    </Container>
  );
};

export default SignIn;
