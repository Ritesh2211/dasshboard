import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function CustomizedInputBase() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',  // Aligns to the right side
        padding: 2,
        backgroundColor: '#05070A',
        width: '100%',
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 200,
          backgroundColor: '#1c1f26', // Search bar background
          borderRadius: 2,
          border: '1px solid #212732',
        }}
      >
        <IconButton sx={{ p: '10px', color: 'white' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'white' }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="button" sx={{ p: '10px', color: 'white' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </Box>
  );
}
