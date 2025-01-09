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
    
      InputProps={{
        style: {
          height:'55px',
          padding: "8px 12px",
          marginBottom:"20px"
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
          fontSize: '12px',  // Set the font size of the label
          fontWeight: 'bold',  // Optional: make label bold
         
        },
      }}

    />
  );
};

export default FileInput;
