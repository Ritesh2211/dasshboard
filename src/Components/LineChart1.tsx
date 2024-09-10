import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart, SparkLineChartProps } from '@mui/x-charts/SparkLineChart';

// Define types for your data if necessary
interface CustomAxisProps {
  data: number[];
  xAxisData: Date[];
}

const CustomAxis: React.FC<CustomAxisProps> = ({ data, xAxisData }) => {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={data}
          xAxis={{
            scaleType: 'time',
            data: xAxisData,
            valueFormatter: (value) => value.toISOString().slice(0, 10),
          }}
          height={50}
          showTooltip
          showHighlight
          curve="linear"
          plotType="line"
          colors={['green']}
          sx={{
            '& .MuiSparkLineChart-line': {
              strokeWidth: 2,
              stroke: 'green',
              filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))',
            },
          }}
        />
      </Box>
    </Stack>
  );
};

// Usage example with data and xAxisData provided
export default function App() {
  const data = [1, 4, 2, 5, 7, 2, 4, 6];
  const xAxisData = [
    new Date(2022, 5, 1),
    new Date(2022, 5, 2),
    new Date(2022, 5, 5),
    new Date(2022, 5, 6),
    new Date(2022, 5, 7),
    new Date(2022, 5, 8),
    new Date(2022, 5, 11),
    new Date(2022, 5, 12),
  ];

  return <CustomAxis data={data} xAxisData={xAxisData} />;
}
