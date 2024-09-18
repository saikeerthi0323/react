import React from 'react';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Grid, Paper } from '@mui/material';
import '../App.css';

const dataPie = [
  { name: 'Food A', value: 400 },
  { name: 'Food B', value: 300 },
  { name: 'Food C', value: 300 },
  { name: 'Food D', value: 200 },
];

const dataBar = [
  { name: 'Jan', FP: 4000, NFP: 2400, amt: 2400 },
  { name: 'Feb', FP: 3000, NFP: 1398, amt: 2210 },
  { name: 'Mar', FP: 2000, NFP: 9800, amt: 2290 },
  { name: 'Apr', FP: 2780, NFP: 3908, amt: 2000 },
  { name: 'May', FP: 1890, NFP: 4800, amt: 2181 },
  { name: 'Jun', FP: 2390, NFP: 3800, amt: 2500 },
  { name: 'Jul', FP: 3490, NFP: 4300, amt: 2100 },
];

const dataLine = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
];

const dataHistorical = [
  { name: '2018', value: 2400 },
  { name: '2019', value: 1398 },
  { name: '2020', value: 9800 },
  { name: '2021', value: 3908 },
  { name: '2022', value: 4800 },
  { name: '2023', value: 3800 },
  { name: '2024', value: 4300 },
];

const Dashboard = () => {
  return (
    <Container className="container">
      <Grid container spacing={3}>
        {/* Four small containers */}
        <Grid item xs={12} md={3}>
          <Paper className="small-container">Food Orders <b>80%</b></Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className="small-container">Food Reviews <b>90%</b></Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className="small-container">Sales History <b>75%</b></Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className="small-container">Total Reviews <b>90%</b></Paper>
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <h2 className="chart-title">Food Orders</h2>
            <div className="pie-chart">
              <PieChart width={400} height={400}>
                <Pie data={dataPie} dataKey="value" nameKey="name" outerRadius={150} fill="#8884d8" label />
                <Tooltip />
              </PieChart>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <h2 className="chart-title">Food Reviews</h2>
            <div className="bar-chart">
              <BarChart width={500} height={300} data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="NFP" fill="#8884d8" />
                <Bar dataKey="FP" fill="#82ca9d" />
              </BarChart>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <h2 className="chart-title">Sales History</h2>
            <div className="line-chart">
              <LineChart width={500} height={300} data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className="paper">
            <h2 className="chart-title">Total Reviews</h2>
            <div className="historical-chart">
              <BarChart width={500} height={300} data={dataHistorical}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
