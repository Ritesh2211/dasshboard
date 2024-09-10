import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import Tree from './Tree';
import { BarChart } from '@mui/x-charts';
import DetailsTable from './DetailsTable';
import CountryCircle from './CountryCircle';
import LineChart1 from './LineChart1';
import LineChart2 from './LineChart2';
import LineChart3 from './LineChart3';
import { LinearProgress } from '@mui/material';
import SessionsChart from './SessionsChart';
import BarChar from './BarChar';
import DatePicker from './DatePicker';

// Styled Paper component for consistency
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#05070A',
  color: '#FFFFFF',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: 8,
  border: `1px solid #212732`,
  height: '200px', // Set a smaller height for the cards
  overflow: 'hidden', // Hide any overflowing content
}));

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 4, md: 4 }, backgroundColor: '#05070A', overflowX: 'hidden' }}>
      {/* Top Bar */}
        {/* Breadcrumb (Dashboard > Home) */}
        <Typography variant="body1" color="#94a0b8">
          Dashboard {'>'} <Typography component="span" color="white">Home</Typography>
        </Typography>
         
       
          
   

      <Typography variant="h6" gutterBottom color="#FFFFFF">
        Overview
      </Typography>
          {/* Date Picker */}
          
            
      {/* Summary Statistics */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginTop: 1 }}>
        <Item sx={{ flex: 1, minWidth: '220px' }}>
          <Typography sx={{ fontSize: 15, marginRight: 25 }} variant="h6">Users</Typography>
          <Typography sx={{ fontSize: 25, fontWeight: 30, marginRight: 25, color: '#ffffff' }} variant="h4">14k</Typography>
          <Typography sx={{ color: '#94a0b8', marginRight: 22 }} variant="caption">Last 30 days</Typography>
          <Typography sx={{ textAlign: 'end' }} variant="body2" color="success.main" mt={2}>+25%</Typography>
          <LineChart1 />
        </Item>
        <Item sx={{ flex: 1, minWidth: '220px' }}>
          <Typography sx={{ fontSize: 15, textAlign: 'start' }} variant="h6">Conversions</Typography>
          <Typography sx={{ fontSize: 25, fontWeight: 13, textAlign: 'start', color: '#ffffff' }} variant="h4">325</Typography>
          <Typography sx={{ color: '#94a0b8', textAlign: 'start', marginRight: 22 }} variant="caption">Last 30 days</Typography>
          <Typography sx={{ textAlign: 'end' }} variant="body2" color="error.main" mt={2}>-25%</Typography>
          <LineChart2 />
        </Item>
        <Item sx={{ flex: 1, minWidth: '220px' }}>
          <Typography sx={{ fontSize: 15, textAlign: 'start' }} variant="h6">Event Count</Typography>
          <Typography sx={{ fontSize: 25, fontWeight: 13, color: '#ffffff', textAlign: 'start' }} variant="h4">200k</Typography>
          <Typography sx={{ color: '#94a0b8', textAlign: 'end', marginRight: 22 }} variant="caption">Last 30 days</Typography>
          <Typography sx={{ textAlign: 'end', boxShadow: 'gray' }} variant="body2" color="gray" mt={2}>-5%</Typography>
          <LineChart3 />
        </Item>
        <Item sx={{ flex: 1, minWidth: '220px', backgroundColor: '#0B0E14' }}>
          <Typography variant="h6" sx={{ textAlign: 'start', fontSize: 15 }}>Explore Your Data</Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', fontSize: 15 }}>Uncover performance and visitor insights.</Typography>
          <Button variant="contained" sx={{ mt: 3, color: 'white' }}>Get insights</Button>
        </Item>
      </Box>

      {/* Sessions and Page Views */}
      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
        <Item sx={{ flex: 1, minWidth: '300px', height: '410px' }}> {/* Set height */}
          <Typography variant="h6"sx={{fontSize:20,fontFamily:'sans-serif',textAlign:'left', fontWeight:600   }}>Sessions</Typography>
          <Typography variant="h4"sx={{fontSize:15,fontFamily:'sans-serif',textAlign:'left',  fontWeight:600  }}>13,277</Typography>
          <Typography variant="caption"sx={{fontSize:10,fontFamily:'sans-serif',marginRight:50 }}>Sessions per day for last 30 days</Typography>
          <Typography sx={{ textAlign: 'start' }} variant="body2" color="success.main" mt={2}>-25%</Typography>

          <SessionsChart />
          <Box sx={{ height: '50px', mt: 1 }}></Box>
        </Item>
        <Item sx={{ flex: 1, minWidth: '300px', height: '410px' }}> {/* Set height */}
          <Typography variant="h6"sx={{fontSize:20,fontFamily:'sans-serif',textAlign:'left' ,fontWeight:600   }}>Page Views & Downloads</Typography>
          <Typography variant="h4"sx={{fontSize:15,fontFamily:'sans-serif',textAlign:'left'  ,fontWeight:600  }}>1.3M</Typography>
          <Typography variant="caption"sx={{fontSize:10,fontFamily:'sans-serif',textAlign:'left', marginRight:50   }}>Last 6 months</Typography>
          <Typography sx={{ textAlign: 'start' }} variant="body2" color="error.main" mt={2}>-25%</Typography>

          <BarChar />
          <Box sx={{ height: '10px', mt: 2, marginTop: 1 }}></Box>
        </Item>
      </Box>

      {/* Details Table, Tree, and Doughnut Chart */}
      <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
        {/* Left Side: Table Details */}
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ padding: 2, height: '800px',  borderRadius: 8 ,border: `1px solid #212732` }}> {/* Set height */}            <Typography variant="h6" gutterBottom>Table Details</Typography>
            <DetailsTable />
          </Paper>
        </Box>

                  {/* Product Tree and Country Data */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
          {/* Product Tree Section */}
           
              <Tree />

          {/* Pie Chart and Progress Bars Section */}
          <Paper elevation={2} sx={{ padding: 2, height: '400px',marginRight:40, border: `1px solid #212732`,marginTop:5,width:390}}> {/* Set height */}
            <Typography variant="h6" gutterBottom>Users by Country</Typography>
            <Box sx={{ height: '200px', margin: '0 auto', justifyContent: 'center', alignItems:'center',display:'flex'}}> {/* Adjusted pie chart size */}
              <CountryCircle />
            </Box>
            <Box sx={{ marginTop: 2,marginRight:2 }}>
              <Typography>India</Typography>
              <LinearProgress variant="determinate" value={70} />
              <Typography sx={{ marginTop: 1 }}>USA</Typography>
              <LinearProgress variant="determinate" value={50} />
              <Typography sx={{ marginTop: 1 }}>Others</Typography>
              <LinearProgress variant="determinate" value={30} />
            </Box>
          </Paper>
        </Box>
       
      </Box>
      </Box>

  );};
export default Dashboard;
