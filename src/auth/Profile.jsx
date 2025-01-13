import React, { useState, useEffect } from 'react';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Avatar,
  CircularProgress,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
       
        const token = localStorage.getItem('token');
       
        // const response = await axios.get('https://divyyang-vvcmc-schemes-1.onrender.com/api/profile', {
          const response = await axios.get(' https://divyang.codifyinstitute.org/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false); 
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        Failed to load profile. Please try again later.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 4, px: 3 }}>
    
      <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
        <Avatar sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }}>
          <PersonIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 1 }}>
          {user.role}
        </Typography>
      </Grid>

    
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          p: 3,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Profile Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={user.name}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                value={user.email}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mobile Number"
                value={user.mobileno}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Role"
                value={user.role}
                fullWidth
                InputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Profile;
