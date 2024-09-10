import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];

export default function StackedBarChart() {
  return (
    <BarChart
      width={600}
      height={300}
      borderRadius={10}
      series={[
        { data: pData,  id: 'pvId', stack: 'total',color: '#027AF2' },
        { data: pData,  id: 'cvId', stack: 'total' ,color: '#1C86EF'},
        { data: uData,  id: 'uvId', stack: 'total' ,color: '#1A6ABB'},
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
