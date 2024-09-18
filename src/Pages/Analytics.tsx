import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

// Dummy data for charts
const lineChartData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 2000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 1890 },
];

const barChartData = [
  { name: 'Q1', sales: 2400 },
  { name: 'Q2', sales: 1398 },
  { name: 'Q3', sales: 9800 },
  { name: 'Q4', sales: 3908 },
];

const pieChartData = [
  { name: 'Direct', value: 400 },
  { name: 'Referral', value: 300 },
  { name: 'Social', value: 300 },
  { name: 'Organic', value: 200 },
];

const areaChartData = [
  { month: 'Jan', value: 2400 },
  { month: 'Feb', value: 1398 },
  { month: 'Mar', value: 9800 },
  { month: 'Apr', value: 3908 },
];

// Colors for pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics: React.FC = () => {
  const paperStyle = {
    padding: 3,
    backgroundColor: '#05070A',
    borderRadius: 8,
    border: '1px solid #212732',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '20px',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#05070A',
      }}
    >
      {/* Title */}
      <Typography variant="body1" color="#94a0b8">
        Home {'>'} <Typography component="span" color="white"sx={{marginBottom:400}}>Analytics</Typography>
        
      </Typography>

      {/* KPI Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
        <Paper sx={{ ...paperStyle, flex: '1 1 calc(33.33% - 16px)', marginBottom: '16px' }}>
          <Typography variant="h6" sx={{ color: '#FFFFFF' }}>Total Users</Typography>
          <Typography variant="h4" sx={{ color: '#2F81F7' }}>4,500</Typography>
        </Paper>
        <Paper sx={{ ...paperStyle, flex: '1 1 calc(33.33% - 16px)', marginBottom: '16px' }}>
          <Typography variant="h6" sx={{ color: '#FFFFFF' }}>Revenue</Typography>
          <Typography variant="h4" sx={{ color: '#2F81F7' }}>$12,300</Typography>
        </Paper>
        <Paper sx={{ ...paperStyle, flex: '1 1 calc(33.33% - 16px)', marginBottom: '16px' }}>
          <Typography variant="h6" sx={{ color: '#FFFFFF' }}>Active Sessions</Typography>
          <Typography variant="h4" sx={{ color: '#2F81F7' }}>123</Typography>
        </Paper>
      </Box>

      {/* Charts Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        {/* First Row of Charts */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            flexDirection: { xs: 'column', md: 'row' }, // Responsive stacking
            width: '100%',
          }}
        >
          {/* Line Chart */}
          <Paper sx={{ ...paperStyle, flex: 1 }}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}>User Growth</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#2F81F7" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

          {/* Bar Chart */}
          <Paper sx={{ ...paperStyle, flex: 1 }}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}>Sales by Quarter</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#2F81F7" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Second Row of Charts */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            flexDirection: { xs: 'column', md: 'row' }, // Responsive stacking
            width: '100%',
          }}
        >
          {/* Pie Chart */}
          <Paper sx={{ ...paperStyle, flex: 1 }}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}>Traffic Sources</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieChartData} dataKey="value" outerRadius={100} fill="#8884d8">
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>

          {/* Area Chart */}
          <Paper sx={{ ...paperStyle, flex: 1 }}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}>Area Chart Example</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#2F81F7" fill="#2F81F7" />
              </AreaChart>
             
            </ResponsiveContainer>
          </Paper>
        </Box>
      </Box>
      <footer/>
    </Box>
    
  );
};

export default Analytics;
