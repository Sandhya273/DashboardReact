import React from "react";
import SalesValue from "./SalesValue";
import SalesChart from "./SalesChart";

const MainContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen w-100">
      <SalesValue />
      <SalesChart />
    </div>
  );
};

export default MainContent;
