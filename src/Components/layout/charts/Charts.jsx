import React, { useContext, useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ContextUser } from '../../../context/UserContext'; // Import your user context
import { getUsers } from '../../../context/apiCall';

export default function Charts() {
  const { users, dispatch } = useContext(ContextUser); // Get the users from context

  const [chartData, setChartData] = useState([]);
  const [xAxisLabels, setXAxisLabels] = useState([]);

  useEffect(() => {
    getUsers(dispatch);  // Fetch users when component mounts
  }, [dispatch]);

  useEffect(() => {
    if (users && users.length > 0) {
      // Extract the month from the 'user.date' field using native JavaScript Date methods
      const months = users.map(user => {
        const date = new Date(user.date); 
        return date.toLocaleString('default', { month: 'short' });  // Get the month abbreviation (e.g., 'Jan', 'Feb')
      });

      // You can change 'user.id' to any other data you want to plot on Y-axis
      const counts = users.map(user => user.id);  // Y-axis data

      setXAxisLabels(months);  // Set the X-axis labels as months
      setChartData(counts);    // Set the Y-axis data
    }
  }, [users]);

  return (
    <BarChart
      series={[
        { data: chartData },  // Y-axis data (bar heights)
      ]}
      height={350}
      width={550}
      xAxis={[{ data: xAxisLabels, scaleType: 'band' }]}  // X-axis labels as months
      margin={{ top: 10, bottom: 30, left: 0, right: 10 }}
    />
  );
}
