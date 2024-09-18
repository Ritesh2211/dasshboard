import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Dummy data for clients
const clientsData = [
  { id: 1, name: 'Acme Corp', contact: 'John Doe', email: 'john.doe@acme.com', status: 'Active' },
  { id: 2, name: 'Beta Inc.', contact: 'Jane Smith', email: 'jane.smith@beta.com', status: 'Inactive' },
  { id: 3, name: 'Gamma LLC', contact: 'Robert Brown', email: 'robert.brown@gamma.com', status: 'Active' },
  { id: 4, name: 'Delta Co', contact: 'Emily Davis', email: 'emily.davis@delta.com', status: 'Pending' },
];

const Client: React.FC = () => {
  const paperStyle = {
    padding: 3,
    backgroundColor: '#05070A',
    borderRadius: 8,
    border: '1px solid #212732',
    color: '#FFFFFF',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#05070A',
      }}
    >
      {/* Title */}
      <Typography variant="body1" color="#94a0b8">
        Home {'>'} <Typography component="span" color="white"sx={{marginBottom:400}}>Clients</Typography>
        
      </Typography>

      {/* KPI Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px', width: '100%', flexWrap: 'wrap' }}>
        <Paper sx={{ ...paperStyle, flex: '1 1 calc(33.33% - 16px)', marginBottom: '16px' }}>
          <Typography variant="h6">Total Clients</Typography>
          <Typography variant="h4" sx={{ color: '#2F81F7' }}>4</Typography>
        </Paper>
        <Paper sx={{ ...paperStyle, flex: '1 1 calc(33.33% - 16px)', marginBottom: '16px' }}>
          <Typography variant="h6">Active Clients</Typography>
          <Typography variant="h4" sx={{ color: '#2F81F7' }}>2</Typography>
        </Paper>
        <Paper sx={{ ...paperStyle, flex: '1 1 calc(33.33% - 16px)', marginBottom: '16px' }}>
          <Typography variant="h6">Pending Clients</Typography>
          <Typography variant="h4" sx={{ color: '#2F81F7' }}>1</Typography>
        </Paper>
      </Box>

      {/* Clients Table */}
      <TableContainer component={Paper} sx={{ ...paperStyle }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#FFFFFF' }}>ID</TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>Name</TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>Contact</TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>Email</TableCell>
              <TableCell sx={{ color: '#FFFFFF' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientsData.map((client) => (
              <TableRow key={client.id}>
                <TableCell sx={{ color: '#FFFFFF' }}>{client.id}</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>{client.name}</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>{client.contact}</TableCell>
                <TableCell sx={{ color: '#FFFFFF' }}>{client.email}</TableCell>
                <TableCell sx={{ color: client.status === 'Active' ? '#2F81F7' : '#FFFFFF' }}>
                  {client.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Client;
