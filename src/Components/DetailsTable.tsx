import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { createTheme, Box } from '@mui/material';
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';

// columns for the DataGrid
const columns: GridColDef[] = [
  { field: 'pageTitle', headerName: 'Page Title' },
  { field: 'status', headerName: 'Status' },
  { field: 'users', headerName: 'Users' },
  { field: 'eventCount', headerName: 'Event Count' },
  { field: 'viewsPerUser', headerName: 'Views per User' },
  { field: 'averageTime', headerName: 'Average Time' },
  {
    field: 'dailyConversions',
    headerName: 'Daily Conversions',
    renderCell: (params) => {
      const data = [params.value]; // Each row's data for the bar chart

      return (
        <Box sx={{ width: '100%', height: 20, display: 'flex', alignItems: 'center' }}>
          <BarChart
            width={60}  // Width of the chart
            height={20} // Height of the chart
            series={[
              {
                data: data, // Value for the current row
              },
            ]}
            xAxis={[{ id: 'barCategories', data: [''], scaleType: 'band' }]}
            sx={{
              [`& .${barElementClasses.root}`]: {
                fill: params.value > 5 ? '#1E90FF' : '#87CEFA',  // Conditional color
              },
            }}
          />
        </Box>
      );

    },
  },
];

// sample data for the DataGrid
const rows: GridRowsProp = [
  { id: 1, pageTitle: 'Homepage Overview', status: 'Online', users: 212423, eventCount: 8345, viewsPerUser: 18.5, averageTime: '2m 15s', dailyConversions: 5 },
  { id: 2, pageTitle: 'Product Page', status: 'Online', users: 52412, eventCount: 3455, viewsPerUser: 12.4, averageTime: '3m 10s', dailyConversions: 9 },
  { id: 3, pageTitle: 'Blog Page', status: 'Online', users: 76543, eventCount: 2345, viewsPerUser: 10.2, averageTime: '4m 12s', dailyConversions: 3 },
  { id: 4, pageTitle: 'Contact Us', status: 'Offline', users: 34521, eventCount: 2455, viewsPerUser: 8.1, averageTime: '1m 30s', dailyConversions: 2 },
  { id: 5, pageTitle: 'About Us', status: 'Online', users: 156432, eventCount: 5678, viewsPerUser: 14.6, averageTime: '2m 40s', dailyConversions: 7 },
  { id: 6, pageTitle: 'Pricing Page', status: 'Online', users: 42321, eventCount: 645, viewsPerUser: 15.0, averageTime: '2m 20s', dailyConversions: 6 },
  { id: 7, pageTitle: 'Features Page', status: 'Online', users: 62312, eventCount: 8234, viewsPerUser: 19.8, averageTime: '2m 50s', dailyConversions: 4 },
  { id: 8, pageTitle: 'Careers Page', status: 'Online', users: 23412, eventCount: 1134, viewsPerUser: 10.5, averageTime: '2m 5s', dailyConversions: 1 },
];

// Create a dark theme using Material UI's theme system
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#212732',
    },
    secondary: {
      main: '#212732',
    },
    background: {
      default: '#212732',
      paper: '#05070A',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
});

const DetailsTable: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10, // page size smaller for responsive view
    page: 0,
  });

  const handlePaginationChange = (newPaginationModel: any) => {
    setPaginationModel(newPaginationModel);
  };

  return (
    <Box sx={{ width: '800px', fontSize: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        checkboxSelection
        pageSizeOptions={[5, 10, 20]}
        sx={{
          backgroundColor: darkTheme.palette.background.paper,
          color: darkTheme.palette.text.primary,
          border: 'none', // Removes border
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: darkTheme.palette.background.paper,
            color: darkTheme.palette.text.primary,
            borderBottom: 'none', // Removes bottom border of column headers
          },
          '& .MuiDataGrid-cell': {
            border: 'none', // Removes border around cells
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: darkTheme.palette.background.paper,
            borderTop: 'none', // Removes top border of footer container
          },
          '& .MuiCheckbox-root': {
            color: darkTheme.palette.primary.main,
          },
          '@media (max-width: 600px)': {
            '.MuiDataGrid-columnHeaders': {
              display: 'none',
            },
            '.MuiDataGrid-cell': {
              fontSize: '1px',
            },
          },
        }}
      />
    </Box>
  );
};

export default DetailsTable;
