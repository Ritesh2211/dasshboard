import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Styled components
const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: '#05070A',
  color: '#FFFFFF',
  padding: theme.spacing(3),
  borderRadius: 8,
  border: `1px solid #212732`,
  width: '100%',
  maxWidth: '600px',
  boxShadow: theme.shadows[3],
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#05070A',
}));

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(50);
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('Light');
  const [language, setLanguage] = useState('English');

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(event.target.checked);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>, field: string) => {
    if (field === 'theme') {
      setTheme(event.target.value as string);
    } else if (field === 'language') {
      setLanguage(event.target.value as string);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Settings saved!');
  };

  return (
    <CenteredBox>
      <Container>
        <Typography variant="h5" gutterBottom color="#FFFFFF" textAlign="center">
          Settings
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              InputLabelProps={{ style: { color: '#C2C9D6' } }}
              InputProps={{ style: { color: '#C2C9D6' } }}
              sx={{ marginBottom: 2 }}
            />
            <FormControlLabel
              control={<Switch checked={notifications} onChange={handleSwitchChange} />}
              label="Enable Notifications"
              labelPlacement="start"
              sx={{ color: '#C2C9D6' }}
            />
            <Typography color="#C2C9D6">Volume Control</Typography>
            <Slider
              value={volume}
              onChange={handleSliderChange}
              aria-labelledby="volume-slider"
              valueLabelDisplay="auto"
              sx={{
                color: '#C2C9D6',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#0B0E14',
                  border: `2px solid #212732`,
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#C2C9D6',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#212732',
                },
              }}
            />
            <FormGroup>
              <Typography color="#C2C9D6">Theme</Typography>
              <Select
                value={theme}
                
                sx={{ backgroundColor: '#0B0E14', color: '#C2C9D6' }}
              >
                <MenuItem value="Light">Light</MenuItem>
                <MenuItem value="Dark">Dark</MenuItem>
              </Select>
            </FormGroup>
            <FormGroup>
              <Typography color="#C2C9D6">Language</Typography>
              <Select
                value={language}
                
                sx={{ backgroundColor: '#0B0E14', color: '#C2C9D6' }}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </FormGroup>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" type="submit" sx={{ backgroundColor: '#007BFF', color: '#FFFFFF' }}>
                Save Settings
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </CenteredBox>
  );
};

export default Settings;
