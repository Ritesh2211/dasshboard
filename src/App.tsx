import React from 'react';

import SideBar from './Components/SideBar';
import Cards from './Components/Cards';
import { createTheme, CssBaseline, ThemeProvider, Box, Grid } from '@mui/material';
import Footer from './Components/footer';
import SearchBar from './Components/SearchBar';

const App: React.FC = () => {
  const darkTheme = createTheme({
    palette: {
      background: {
        default: '#05070A', // lighter background color for better contrast
        paper: '#05070A',   // background color for Paper components
      },
      text: {
        primary: '#C2C9D6', // color for primary text
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', minHeight: '100vh',  }}>
        
        <SideBar />
        <Cards />
      </div>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
