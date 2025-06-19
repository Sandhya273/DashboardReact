import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', value: 300 },
  { day: 'Tue', value: 500 },
  { day: 'Wed', value: 500 },
  { day: 'Thu', value: 700 },
  { day: 'Fri', value: 700 },
  { day: 'Sat', value: 900 },
  { day: 'Sun', value: 600 },
];

const SalesChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">Sales Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#007bff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
