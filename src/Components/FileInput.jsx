import React from 'react';
import { TextField } from '@mui/material';

const FileInput = ({ formik, name, label }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    formik.setFieldValue(name, file); 
  };

  return (
    <TextField
      type="file"
      label={label}
      onChange={handleFileChange}
      fullWidth
      margin="normal"
      variant="outlined"
    
      onBlur={() => formik.setTouched({ ...formik.touched, [name]: true })} 
      InputProps={{
        style: {
          height:'40px',
          marginBottom:"30px"
        },
        sx: {
          color: '#8DA399',
          fontSize: '12px',
          transform: 'translate(16px, 50%)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -8px) scale(0.75)', 
          },
        },
      }}
      
      InputLabelProps={{
        sx: {
          fontSize: '15px',  
          fontWeight: 'bold',  
          transform: 'translate(0px, -1px)',
       
        },
        shrink: true,
      
      }}

    />
  );
};

export default FileInput;
