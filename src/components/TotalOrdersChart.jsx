import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", orders: 40 },
  { name: "Tue", orders: 80 },
  { name: "Wed", orders: 65 },
  { name: "Thu", orders: 95 },
  { name: "Fri", orders: 75 },
  { name: "Sat", orders: 97 },
];

const TotalOrdersChart = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Total Orders</h3>
          <p className="text-2xl font-bold text-gray-900">452</p>
        </div>
        <span className="text-green-600 font-medium">↑ 18.2%</span>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorOrders)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <span>July</span>
        <span>August</span>
      </div>
    </div>
  );
};

export default TotalOrdersChart;
