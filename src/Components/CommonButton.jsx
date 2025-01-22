import React from 'react';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
const CommonButton = ({ children,bgColor = '#1976d2', hoverColor = '#1565c0', ...props }) => {
  const location = useLocation();
  const dynamicBgColor = location.pathname === '/signin' ||location.pathname === '/register' ? '#007185' : bgColor; 

  
  return (
    <Button
      {...props}
      sx={{

        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        backgroundColor: dynamicBgColor ,
        color:'#fff',
       
        width:props.customWidth,
        '&:hover': {
          opacity: 0.85,
          transform: 'scale(1.05)',
        },
        '&:active': {
          backgroundColor: '#0d47a1',
        },
        '&:disabled': {
          backgroundColor: '#9e9e9e',
          cursor: 'not-allowed',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
