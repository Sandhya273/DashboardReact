import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";

const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Header at the top */}
      <Header />

      {/* Below Header: Sidebar and MainContent side-by-side */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar fixed width */}
        <Sidebar />

        {/* Main content fills remaining space */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          
        </div>
      </div>
    </div>
  );
};

export default App;
