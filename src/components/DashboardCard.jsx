import React from "react";

const StatCard = ({ title, value, dateRange, change, changeColor }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5 w-full">
      <h4 className="text-sm font-semibold text-gray-500 mb-1">{title}</h4>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-400">{dateRange}</p>
      <p className={`text-sm font-medium mt-2 ${changeColor}`}>{change}</p>
    </div>
  );
};

const TrafficCard = () => {
  return (
    <div className="bg-white shadow rounded-xl p-5 w-full">
      <h4 className="text-sm font-semibold text-gray-500 mb-2">Traffic Share</h4>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>🖥️ Desktop <span className="float-right font-semibold">60%</span></li>
        <li>📱 Mobile Web <span className="float-right font-semibold">30%</span></li>
        <li>📟 Tablet Web <span className="float-right font-semibold">10%</span></li>
      </ul>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        title="Customers"
        value="345k"
        dateRange="Feb 1 - Apr 1, WorldWide"
        change="18.2% Since last month"
        changeColor="text-green-600"
      />
      <StatCard
        title="Revenue"
        value="$43,594"
        dateRange="Feb 1 - Apr 1, WorldWide"
        change="28.4% Since last month"
        changeColor="text-green-600"
      />
      <TrafficCard />
    </div>
  );
};

export default DashboardCards;
