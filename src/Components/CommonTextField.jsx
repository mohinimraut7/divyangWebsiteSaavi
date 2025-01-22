import React from 'react';
import { useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
const CommonTextField = ({ 
  id, 
  name, 
  label, 
  icon,
  formik, 

  ...props 
}) => {
  const location = useLocation();
  const isAuthPath = location.pathname === '/auth'; 
  return (
    <TextField
      fullWidth
      size="small"
      id={id}
      name={name}
      label={label}
      icon={icon}
      variant="outlined"
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      InputProps={{
        startAdornment: icon ? (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ) : null, 
        // sx: {
        //   height: '40px',
        // },
        
      }}
      InputLabelProps={{
        sx: {
          color: '#2F4F4F',
          fontSize: '12px',
          fontWeight:'bold',
          transform: 'translate(16px, 50%)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -8px) scale(0.75)', 
          },
        },
      }}
      sx={{
        mb: 2,
        width: isAuthPath ? '100%' : '90%',
       
      }}
      {...props}
    />
  );
};

export default CommonTextField;

