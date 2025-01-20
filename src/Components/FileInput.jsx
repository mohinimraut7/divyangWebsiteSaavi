import React from 'react';
import { TextField } from '@mui/material';

const FileInput = ({ formik, name, label }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    formik.setFieldValue(name, file); 
  };
  const isError = formik.touched[name] && Boolean(formik.errors[name]);
  return (
    <TextField
      type="file"
      label={label}
      onChange={handleFileChange}
      fullWidth
      margin="normal"
      variant="outlined"
    
      onBlur={() => {
        if (name === 'Disabilitycertificate'|| name === 'Residency' || name==='Canceledcheck' || name==='Selfdeclartion' || name==='photo' ||name==='Applicantphoto' ||name==='quotation'||name==='sportcertificate'||name==='ubdertaking'||name==="oneyear"||name==='hopitlabillproof') {
          formik.setFieldTouched(name, true); 
        }
      }} 
      error={isError} // Apply error styling
      helperText={isError ? formik.errors[name] : ''} 
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
