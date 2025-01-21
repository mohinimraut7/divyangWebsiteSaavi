import React from 'react';
import { TextField } from '@mui/material';

const FileInput = ({ formik, name, label }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    if(file){
      formik.setFieldValue(name, file); 

    }
  };
  const isError = formik.touched[name] && Boolean(formik.errors[name]);
  const fileName = formik.values[name] ? formik.values[name].name : null;

  
  
  return (
    <TextField
      type="file"
      label={label}
      
      onChange={handleFileChange}
      fullWidth
      margin="normal"
      variant="outlined"
      value={formik.values[name] ? undefined : ''}
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
          // backgroundColor:'#8DA399  ',
          
          color: 'white',
          fontSize: '12px',
          transform: 'translate(16px, 50%)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -8px) scale(0.75)', 
          },
        },
      }}
      
      InputLabelProps={{
        sx: {
          fontSize: '12px',  
          // fontWeight: 'bold',  
          transform: 'translate(16px, 50%)',
          // color:'red'
       
        },
        shrink: true,
      
      }}

    />
    
  );
};

export default FileInput;
