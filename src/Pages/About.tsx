import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const About: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 4, md: 2 }, backgroundColor: '#05070A' }}>
      <Typography variant="h6" gutterBottom color="#FFFFFF">
        About Us
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 8, border: `1px solid #212732` }}>
        <Typography variant="body1" color="#FFFFFF">
          Welcome to our application! We are dedicated to providing the best service possible.
          Our team is committed to innovation and excellence. This application is designed to
          help you manage your tasks efficiently and effectively. Thank you for using our product!
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
