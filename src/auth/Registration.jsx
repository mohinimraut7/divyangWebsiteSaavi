import React from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CommonButton from '../Components/CommonButton';
import CommonTextField from '../Components/CommonTextField';
import rolesdata from '../data/rolesdata';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
     const navigate = useNavigate(); 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileno: '',
      password: '',
      role: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      mobileno: Yup.string()
        .matches(/^\d{10}$/, 'Mobile Number must be exactly 10 digits')
        .required('Mobile Number is required'),
      password: Yup.string().required('Password is required')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
      .matches(/[0-9]/, 'Password must contain at least one number.')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character.')
      .min(8, 'Password must be at least 8 characters long.'),
      
      role: Yup.string().required('Role is required'),
    }),
    onSubmit: async (values) => {
      try {
        const trimmedMobileno = values.mobileno.trim();
        const trimmedPassword = values.password.trim();
        const url = 'https://divyang.codifyinstitute.org/api/register';

        const payload = {
          name: values.name,
          email: values.email,
          mobileno: trimmedMobileno,
          password: trimmedPassword,
          role: values.role,
        };

        const response = await axios.post(url, payload);
        toast.success("Registration Successful!", { position: "top-center" });
    
        navigate('/')
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          toast.error('Registration Failed!', { position: "top-center" });
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
          Registration Form
        </Typography>

        <CommonTextField formik={formik} name="name" label="Username"/>
        <CommonTextField formik={formik} name="email" label="Email" type="email" />
        <CommonTextField formik={formik} name="mobileno" label="Mobile Number" inputProps={{ maxLength: 10 }} />
        <CommonTextField formik={formik} name="password" label="Password" type="password" />

        <FormControl margin="normal" variant="outlined" fullWidth sx={{width:'90%'}}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            label="Role"
            fullWidth
          >
            {rolesdata.map((role, index) => (
              <MenuItem key={index} value={role?.rolename}>
                {role?.rolename}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CommonButton type="submit" customWidth="35%">
            Register
          </CommonButton>
        </Box>

        <Typography
          sx={{
            mt: 2,
            textAlign: 'center',
            fontSize: '14px',
            cursor: 'pointer',
            '&:hover': { color: '#1976d2' },
          }}
        >
         <NavLink to="/signin"
        
         > Have an account? Sign in  </NavLink>
        </Typography>
      
      </Box>
    </Container>
  );
};

export default Registration;
