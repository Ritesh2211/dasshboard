import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import SideBar from './Components/SideBar';
import Footer from './Components/footer';
import Client from './Pages/Client';
import Analytics from './Pages/Analytics';
import About from './Pages/About';
import Tasks from './Pages/Tasks';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Feedback from './Pages/Feedback'
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
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <SideBar />
          <Routes>
            {/* Render analytics, clients, and other pages without the cards component */}
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Clients" element={<Client />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/About" element={<About />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Feedback" element={<Feedback />} />


            {/* Render Cards only for the home route */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
