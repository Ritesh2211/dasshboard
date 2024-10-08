import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tree from '../Components/Tree';
import { BarChart } from '@mui/x-charts';
import DetailsTable from '../Components/DetailsTable';
import CountryCircle from '../Components/CountryCircle';
import LineChart1 from '../Components/LineChart1';
import LineChart2 from '../Components/LineChart2';
import LineChart3 from '../Components/LineChart3';
import { LinearProgress } from '@mui/material';
import SessionsChart from '../Components/SessionsChart';
import BarChar from '../Components/BarChar';
import SearchBar from '../Components/SearchBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#05070A',
  color: '#FFFFFF',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: 8,
  border: `1px solid #212732`,
  height: '200px',
  overflow: 'hidden',
}));

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 4, md: 2 }, backgroundColor: '#05070A', overflowX: 'hidden',  }}>
      <Typography variant="body1" color="#94a0b8">
        Dashboard {'>'} <Typography component="span" color="white"sx={{marginBottom:400}}>Home</Typography>
        <SearchBar/>
      </Typography>

      <Typography variant="h6" gutterBottom color="#FFFFFF">
        Overview
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginTop: 1 }}>
        <Item sx={{ flex: 1, minWidth: '220px' }}>
          <Typography sx={{ fontSize: 15, marginRight: 25,fontWeight:800 }} variant="h6">Users</Typography>
          <Typography sx={{ fontSize: 25, fontWeight: 900, marginRight: 25, color: '#ffffff' }} variant="h4">14k</Typography>
          <Typography sx={{ color: '#94a0b8', marginRight: 22,fontWeight:800 }} variant="caption">Last 30 days</Typography>
          <Typography sx={{ textAlign: 'end' ,fontWeight:800}} variant="body2" color="success.main" mt={2}>+25%</Typography>
          <LineChart1  />
        </Item>

        <Item sx={{ flex: 1, minWidth: '220px' }}>
          <Typography sx={{ fontSize: 15, textAlign: 'start',fontWeight:800 }} variant="h6">Conversions</Typography>
          <Typography sx={{ fontSize: 25, fontWeight: 900, textAlign: 'start', color: '#ffffff' }} variant="h4">325</Typography>
          <Typography sx={{ color: '#94a0b8', textAlign: 'start', marginRight: 22,fontWeight:800 }} variant="caption">Last 30 days</Typography>
          <Typography sx={{ textAlign: 'end',fontWeight:800 }} variant="body2" color="error.main" mt={2}>-25%</Typography>
          <LineChart2  />
        </Item>

        <Item sx={{ flex: 1, minWidth: '220px' }}>
          <Typography sx={{ fontSize: 15, textAlign: 'start' ,fontWeight:800}} variant="h6">Event Count</Typography>
          <Typography sx={{ fontSize: 25, fontWeight: 900, color: '#ffffff', textAlign: 'start' }} variant="h4">200k</Typography>
          <Typography sx={{ color: '#94a0b8', textAlign: 'end', marginRight: 22,fontWeight:800 }} variant="caption">Last 30 days</Typography>
          <Typography sx={{ textAlign: 'end', boxShadow: 'gray',fontWeight:800 }} variant="body2" color="gray" mt={2}>-5%</Typography>
          <LineChart3 />
        </Item>

        <Item sx={{ flex: 1, minWidth: '220px', backgroundColor: '#0B0E14'}}>
          <Typography variant="h6" sx={{ textAlign: 'start', fontSize: 15 ,fontWeight:800}}>Explore Your Data</Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', fontSize: 15,fontWeight:900 }}>Uncover performance and visitor insights.</Typography>
          <Button variant="contained" sx={{ mt: 3, color: 'white',fontWeight:800 }}>Get insights</Button>
        </Item>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
        <Item sx={{ flex: 1, minWidth: '300px', height: '410px' }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontFamily: 'sans-serif', textAlign: 'left', fontWeight: 600 }}>Sessions</Typography>
          <Typography variant="h4" sx={{ fontSize: 15, fontFamily: 'sans-serif', textAlign: 'left', fontWeight: 600 }}>13,277</Typography>
          <Typography variant="caption" sx={{ fontSize: 10, fontFamily: 'sans-serif', marginRight: 50,fontWeight:800 }}>Sessions per day for last 30 days</Typography>
          <Typography sx={{ textAlign: 'start',fontWeight:800 }} variant="body2" color="success.main" mt={2}>-25%</Typography>
          <SessionsChart />
        </Item>

        <Item sx={{ flex: 1, minWidth: '300px', height: '410px' }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontFamily: 'sans-serif', textAlign: 'left', fontWeight: 600 }}>Page Views & Downloads</Typography>
          <Typography variant="h4" sx={{ fontSize: 15, fontFamily: 'sans-serif', textAlign: 'left', fontWeight: 600 }}>1.3M</Typography>
          <Typography variant="caption" sx={{ fontSize: 10, fontFamily: 'sans-serif', textAlign: 'start', marginRight: 50,fontWeight:800 }}>Last 6 months</Typography>
          <Typography sx={{ textAlign: 'start',fontWeight:800 }} variant="body2" color="error.main" mt={2}>-25%</Typography>
          <BarChar />
        </Item>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 1 }}>
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ padding: 2, height: '800px', borderRadius: 8, border: `1px solid #212732` }}>
            <Typography variant="h6" gutterBottom>Table Details</Typography>
            <DetailsTable />
          </Paper>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Tree />
          <Paper elevation={2} sx={{ padding: 2, height: '400px', marginRight: 0, border: `1px solid #212732`, marginTop: 5, width: '100%' }}>
            <Typography variant="h6" gutterBottom>Users by Country</Typography>
            <Box sx={{ height: '200px', margin: '0 auto', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <CountryCircle />
            </Box>
            <Box sx={{ marginTop: 2, marginRight: 2 }}>
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
  );
};

export default Dashboard;