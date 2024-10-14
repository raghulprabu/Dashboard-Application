import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Charts() {
  return (
    <BarChart
      series={[
        { data: [2,4,5,6] },
      ]}
      height={350}
      width={550}
      xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 0, right: 10 }}
    />
  );
}
