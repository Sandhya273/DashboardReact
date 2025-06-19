import React from "react";

const DashboardCards = () => {
  return (
    <div className="d-flex p-5 gap-4 w-full overflow-x-auto">
      {/* Customers Card */}
      <div className="bg-white shadow rounded-xl p-5 w-full max-w-lg flex-1 ">
        <h4 className="text-sm font-semibold text-gray-500 mb-1">Customers</h4>
        <p className="text-2xl font-bold text-gray-800">345k</p>
        <p className="text-sm text-gray-400">Feb 1 - Apr 1, WorldWide</p>
        <p className="text-sm font-medium mt-2 text-green-600">18.2% Since last month</p>
      </div>

      {/* Revenue Card */}
      <div className="bg-white shadow rounded-xl p-5 w-full max-w-lg flex-1">
        <h4 className="text-sm font-semibold text-gray-500 mb-1">Revenue</h4>
        <p className="text-2xl font-bold text-gray-800">$43,594</p>
        <p className="text-sm text-gray-400">Feb 1 - Apr 1, WorldWide</p>
        <p className="text-sm font-medium mt-2 text-green-600">28.4% Since last month</p>
      </div>

      {/* Traffic Card */}
      <div className="bg-white shadow rounded-xl p-5 w-full max-w-lg flex-1">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">Traffic Share</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            🖥️ Desktop <span className="float-right font-semibold">60%</span>
          </li>
          <li>
            📱 Mobile Web <span className="float-right font-semibold">30%</span>
          </li>
          <li>
            📟 Tablet Web <span className="float-right font-semibold">10%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardCards;
