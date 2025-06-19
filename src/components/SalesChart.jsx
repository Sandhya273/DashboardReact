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
    <div className="bg-teal-50 p-6 rounded-lg shadow">
      {/* Sales Chart Title */}
      <h2 className="text-lg font-bold mb-2">Sales Chart</h2>

      {/* Main sales value */}
      <p className="text-3xl font-bold text-gray-800 mb-1">$10,567</p>

      {/* Percentage change indicator with an upward arrow */}
      

      {/* Toggle buttons for 'Month' and 'Week' */}
      <div className="flex justify-end mb-2">
        {/* Month button - styled with a teal background */}
        <button className="bg-black-300 text-black text-xs rounded-l-md px-2 py-1 focus:outline-none">Month</button>
        {/* Week button - styled with a dark gray background */}
        <button className="bg-gray-800 text-black text-xs rounded-r-md px-2 py-1 focus:outline-none">Week</button>
      </div>

      {/* Responsive container for the Recharts LineChart */}
      <ResponsiveContainer width="100%" height={250}>
        {/* LineChart component */}
        {/* Sets margins for the chart and a light teal background color for the chart area */}
        <LineChart data={data} margin={{ top: 15, right: 20, left: 20, bottom: 30 }} style={{ backgroundColor: '#e0f7fa' }}>
          {/* CartesianGrid for background lines */}
          <CartesianGrid stroke="#b2dfdb" strokeDasharray="3 3" />
          {/* X-Axis for days */}
          <XAxis dataKey="day" stroke="#757575" />
          {/* Y-Axis for values */}
          <YAxis stroke="#757575" />
          {/* Tooltip for displaying data on hover */}
          <Tooltip />
          {/* Line for the data, styled with a teal color and stroke width */}
          <Line type="monotone" dataKey="value" stroke="#26a69a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
