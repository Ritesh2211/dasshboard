import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission here
    console.log('Feedback submitted:', feedback);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 4, md: 2 }, backgroundColor: '#05070A' }}>
      <Typography variant="h6" gutterBottom color="#FFFFFF">
        Feedback
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 8, border: `1px solid #212732` }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Your Feedback"
              variant="outlined"
              multiline
              rows={4}
              value={feedback}
              onChange={handleChange}
              sx={{ backgroundColor: '#1F2329' }}
              InputLabelProps={{ style: { color: '#FFFFFF' } }}
              InputProps={{ style: { color: '#FFFFFF' } }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit Feedback
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Feedback;
