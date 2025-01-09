// import React, { useState,useEffect } from 'react';
// import {
//   Box,
//   Container,
//   TextField,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,MenuItem
// } from '@mui/material';
// // import { Modal, Box, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import CommonButton from '../Components/CommonButton';
// import CommonTextField from '../Components/CommonTextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import rolesdata from '../data/rolesdata';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import authbackground from '../assets/AuthBackground.avif'
// const Auth = () => {
//   const [isSignInMode, setIsSignInMode] = useState(false);
//   const navigate = useNavigate(); 
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       mobileno:'',
//       password: '',
//       role: '',
//     },
//     validationSchema: Yup.object({
//       name: isSignInMode
//         ? null
//         : Yup.string()
//             // .required('Username is required')
//             .min(3, 'Username must be at least 3 characters'),
//       email: Yup.string()
//         .email('Invalid email format'),
//         // .required('Email is required'),
//       password: Yup.string()
//         .required('Password is required'),
//         // .min(6, 'Password must be at least 6 characters'),
//       mobileno: Yup.string()
//       .matches(/^\d{10}$/, 'Mobile Number must be exactly 10 digits')
//       .required('Mobile Number is required'),
        
//       role: isSignInMode
//         ? null
//         : Yup.string()
//             // .required('Role is required')
//     }),
    
// onSubmit: async (values) => {
//   try {
//     const trimmedMobileno = values.mobileno.trim();
//     const trimmedPassword = values.password.trim();
//     const url = isSignInMode
//       // ? 'https://divyyang-vvcmc-schemes-1.onrender.com/api/login' 
//       // : 'https://divyyang-vvcmc-schemes-1.onrender.com/api/register';

//       ? 'https://divyang.codifyinstitute.org/api/login'
//       : 'https://divyang.codifyinstitute.org/api/register';

//     const payload = isSignInMode
//       ? { mobileno:trimmedMobileno, password:trimmedPassword } 
//       : { name: values.name, email: values.email,mobileno:trimmedMobileno, password:trimmedPassword, role: values.role }; // Registration Payload

   
//     const response = await axios.post(url, payload);

   
//     if (isSignInMode) {
//       alert('Sign In Successful!');
//       console.log('Login Response:', response.data);
    
//       localStorage.setItem('token', response.data.token);
//       navigate('/'); 
//     } else {
//       alert('Registration Successful!');
//       console.log('Registration Response:', response.data);
//     }
//   } catch (error) {
//     console.error('Full Error:', error); // Log full error for debugging
//     if (error.response) {
//       console.error('Response Error:', error.response.data);
//       alert(error.response.data.message || (isSignInMode ? 'Login Failed!' : 'Registration Failed!'));
//     } else {
//       alert('An unexpected error occurred.');
//     }
//   }
// }
  
//   });

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Box
//         component="form"
//         onSubmit={formik.handleSubmit}
//         sx={{
//           p: 3,
//           border: '1px solid #ddd',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           bgcolor: 'background.paper',
//           display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'
//         }}
//       >
//         <Typography
//           variant="h5"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: 'bold' }}
//         >
//           {isSignInMode ? 'Sign In' : 'Registration Form'}
//         </Typography>

     
//         {!isSignInMode && (
//         <CommonTextField
//         formik={formik}
//         name="name"
//         label="Username"
//         // icon={<AccountCircle />}
//         />
//         )}
// {!isSignInMode && (
//        <CommonTextField
//        formik={formik}
//        name="email"
//        label="Email"
//        type="email"
//        />
//         )}
//        <CommonTextField
//        formik={formik}
//        name="mobileno"
//        label="Mobile Number"
//       //  type="mobileNumber"
//        />
//         <CommonTextField
//         formik={formik}
//         name="password"
//         label="Password"
//         type="password"
//         />
//  {!isSignInMode && (
// <Box sx={{width:'70%'}}>
//   <FormControl margin="normal" variant="outlined" fullWidth>
//     <InputLabel id="role-label">Role</InputLabel>
//     <Select
//       labelId="role-label"
//       id="role"
//       name="role"
//       value={formik.values.role}
//       onChange={formik.handleChange}
//       label="Role"
//       fullWidth
//     >
//       {rolesdata.map((role, index) => (
//         <MenuItem key={index} value={role?.rolename}>{role?.rolename}</MenuItem>
//       ))}
//     </Select>
//   </FormControl>
// </Box>
//  )}
//         <Box
//           sx={{
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column',
//           }}
//         >
//           <CommonButton type="submit" customWidth="50%">
//             {isSignInMode ? 'Sign In' : 'Register'}
//           </CommonButton>
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: '20px',
//               marginTop: '10px',
//             }}
//           >
//             <Typography
//               onClick={() => {
//                 setIsSignInMode(!isSignInMode);
//                 formik.resetForm();
//               }}
//               sx={{
//                 textDecoration: 'none',
//                 fontSize: '12px',
//                 color: 'inherit',
//                 cursor: 'pointer',
//                 '&:hover': {
//                   color: '#1976d2',
//                 },
//               }}
//             >
//               {isSignInMode
//                 ? "Don't have an account? Register"
//                 : 'Have an account? Sign in'}
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };
// export default Auth;

// =================================================================



// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Modal,
//   TextField,
//   Container,
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import CommonButton from '../Components/CommonButton';
// import CommonTextField from '../Components/CommonTextField';
// import rolesdata from '../data/rolesdata';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import authbackground from '../assets/AuthBackground.avif';

// const Auth = () => {
//   const [isSignInMode, setIsSignInMode] = useState(false);
//   const [open, setOpen] = useState(true); // Modal open state
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       mobileno: '',
//       password: '',
//       role: '',
//     },
//     validationSchema: Yup.object({
//       name: isSignInMode
//         ? null
//         : Yup.string().min(3, 'Username must be at least 3 characters'),
//       email: Yup.string().email('Invalid email format'),
//       password: Yup.string().required('Password is required'),
//       mobileno: Yup.string()
//         .matches(/^\d{10}$/, 'Mobile Number must be exactly 10 digits')
//         .required('Mobile Number is required'),
//       role: isSignInMode ? null : Yup.string(),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const trimmedMobileno = values.mobileno.trim();
//         const trimmedPassword = values.password.trim();
//         const url = isSignInMode
//           ? 'https://divyang.codifyinstitute.org/api/login'
//           : 'https://divyang.codifyinstitute.org/api/register';

//         const payload = isSignInMode
//           ? { mobileno: trimmedMobileno, password: trimmedPassword }
//           : {
//               name: values.name,
//               email: values.email,
//               mobileno: trimmedMobileno,
//               password: trimmedPassword,
//               role: values.role,
//             };

//         const response = await axios.post(url, payload);

//         if (isSignInMode) {
//           alert('Sign In Successful!');
//           localStorage.setItem('token', response.data.token);
//           navigate('/');
//         } else {
//           alert('Registration Successful!');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         if (error.response) {
//           alert(
//             error.response.data.message ||
//               (isSignInMode ? 'Login Failed!' : 'Registration Failed!')
//           );
//         } else {
//           alert('An unexpected error occurred.');
//         }
//       }
//     },
//   });

//   return (
//     <Modal
//       open={open}
//       onClose={() => setOpen(false)}
//       aria-labelledby="auth-modal-title"
//       aria-describedby="auth-modal-description"
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           width: '70%',
//           height: '80%',
//           margin: 'auto',
//           marginTop: '5%',
//           boxShadow: 24,
//           borderRadius: 2,
//           overflow: 'hidden',
//           backgroundColor: '#fff',
//         }}
//       >
//         {/* Left Section - Background Image */}
//         <Box
//           sx={{
//             flex: 1,
//             backgroundImage: `url(${authbackground})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />

//         {/* Right Section - Form */}
//         <Box
//           sx={{
//             flex: 1,
//             p: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//           component="form"
//           onSubmit={formik.handleSubmit}
//         >
//           <Typography
//             variant="h5"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: 'bold' }}
//           >
//             {isSignInMode ? 'Sign In' : 'Registration Form'}
//           </Typography>

//           {!isSignInMode && (
//             <CommonTextField
//               formik={formik}
//               name="name"
//               label="Username"
//             />
//           )}
//           {!isSignInMode && (
//             <CommonTextField
//               formik={formik}
//               name="email"
//               label="Email"
//               type="email"
//             />
//           )}
//           <CommonTextField
//             formik={formik}
//             name="mobileno"
//             label="Mobile Number"
//           />
//           <CommonTextField
//             formik={formik}
//             name="password"
//             label="Password"
//             type="password"
//           />
//           {!isSignInMode && (
//             <FormControl margin="normal" variant="outlined" fullWidth>
//               <InputLabel id="role-label">Role</InputLabel>
//               <Select
//                 labelId="role-label"
//                 id="role"
//                 name="role"
//                 value={formik.values.role}
//                 onChange={formik.handleChange}
//                 label="Role"
//               >
//                 {rolesdata.map((role, index) => (
//                   <MenuItem key={index} value={role?.rolename}>
//                     {role?.rolename}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           )}
//           <Box
//             sx={{
//               width: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               mt: 2,
//             }}
//           >
//             <CommonButton type="submit" customWidth="50%">
//               {isSignInMode ? 'Sign In' : 'Register'}
//             </CommonButton>
//           </Box>
//           <Typography
//             onClick={() => {
//               setIsSignInMode(!isSignInMode);
//               formik.resetForm();
//             }}
//             sx={{
//               mt: 2,
//               textAlign: 'center',
//               fontSize: '14px',
//               cursor: 'pointer',
//               '&:hover': { color: '#1976d2' },
//             }}
//           >
//             {isSignInMode
//               ? "Don't have an account? Register"
//               : 'Have an account? Sign in'}
//           </Typography>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default Auth;
// --------------------------------
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  TextField,
  Container,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CommonButton from '../Components/CommonButton';
import CommonTextField from '../Components/CommonTextField';
import rolesdata from '../data/rolesdata';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import authbackground from '../assets/AuthBackground.avif';

const Auth = () => {
  // const [isSignInMode, setIsSignInMode] = useState(false);
  const [open, setOpen] = useState(true); // Modal open state
  // const navigate = useNavigate();

  // useEffect to automatically open the modal on component mount
  // useEffect(() => {
  //   setOpen(true); // Ensure the modal is open when the component is mounted
  // }, []);
  const openModal = ({ open, closeModal }) => setOpen(true);
  const savedSignInMode = localStorage.getItem('isSignInMode');
  const [isSignInMode, setIsSignInMode] = useState(savedSignInMode === 'true');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Whenever isSignInMode changes, save it to localStorage
    localStorage.setItem('isSignInMode', isSignInMode);
  }, [isSignInMode]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobileno: '',
      password: '',
      role: '',
    },
    validationSchema: Yup.object({
      name: isSignInMode
        ? null
        : Yup.string().min(3, 'Username must be at least 3 characters'),
      email: Yup.string().email('Invalid email format'),
      password: Yup.string().required('Password is required'),
      mobileno: Yup.string()
        .matches(/^\d{10}$/, 'Mobile Number must be exactly 10 digits')
        .required('Mobile Number is required'),
      role: isSignInMode ? null : Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const trimmedMobileno = values.mobileno.trim();
        const trimmedPassword = values.password.trim();
        const url = isSignInMode
          ? 'https://divyang.codifyinstitute.org/api/login'
          : 'https://divyang.codifyinstitute.org/api/register';

        const payload = isSignInMode
          ? { mobileno: trimmedMobileno, password: trimmedPassword }
          : {
              name: values.name,
              email: values.email,
              mobileno: trimmedMobileno,
              password: trimmedPassword,
              role: values.role,
            };

        const response = await axios.post(url, payload);

        if (isSignInMode) {
          alert('Sign In Successful!');
          localStorage.setItem('token', response.data.token);
          navigate('/'); // Redirect to homepage or dashboard
        } else {
          alert('Registration Successful!');
          // Optionally, close the modal after successful registration
          setOpen(false);
        }
      } catch (error) {
        console.error('Error:', error);
        if (error.response) {
          alert(
            error.response.data.message ||
              (isSignInMode ? 'Login Failed!' : 'Registration Failed!')
          );
        } else {
          alert('An unexpected error occurred.');
        }
      }
    },
  });

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)} // Close the modal on click outside
      aria-labelledby="auth-modal-title"
      aria-describedby="auth-modal-description"
    >
      <Box
        sx={{
          display: 'flex',
          width: '70%',
          height: '80%',
          margin: 'auto',
          marginTop: '5%',
          boxShadow: 24,
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        {/* Left Section - Background Image */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${authbackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Right Section - Form */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {isSignInMode ? 'Sign In' : 'Registration Form'}
          </Typography>

          {!isSignInMode && (
            <CommonTextField
              formik={formik}
              name="name"
              label="Username"
            />
          )}
          {!isSignInMode && (
            <CommonTextField
              formik={formik}
              name="email"
              label="Email"
              type="email"
            />
          )}
          <CommonTextField
            formik={formik}
            name="mobileno"
            label="Mobile Number"
          />
          <CommonTextField
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          {!isSignInMode && (
            <FormControl margin="normal" variant="outlined" fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                label="Role"
              >
                {rolesdata.map((role, index) => (
                  <MenuItem key={index} value={role?.rolename}>
                    {role?.rolename}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <CommonButton type="submit" customWidth="50%">
              {isSignInMode ? 'Sign In' : 'Register'}
            </CommonButton>
          </Box>
          <Typography
            onClick={() => {
              setIsSignInMode(!isSignInMode);
              formik.resetForm();
            }}
            sx={{
              mt: 2,
              textAlign: 'center',
              fontSize: '14px',
              cursor: 'pointer',
              '&:hover': { color: '#1976d2' },
            }}
          >
            {isSignInMode
              ? "Don't have an account? Register"
              : 'Have an account? Sign in'}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default Auth;


