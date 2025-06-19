import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from "./MainContent";
import DashboardCard from "./DashboardCard";
import PageVisits from "./PageVisits";
import TotalOrdersChart from "./TotalOrdersChart";
import Footer from "./footer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`bg-dark text-white p-3 ${isOpen ? "d-block" : "d-none"} d-md-block`} style={{ width: '250px', minHeight: '100vh' }}>
        <h4 className="text-center mb-4">Volt React</h4>

        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              📊 Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              💬 Messages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              💸 Transactions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              ⚙️ Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              📅 Calendar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              🗺️ Map
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              🧾 Tables
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              📄 Page Examples
            </a>
          </li>
        </ul>
      </div>
      

      {/* Main Content */}
      <div className="flex-grow-1 p-3">
        <button className="btn btn-primary mb-3 d-md-none" onClick={toggleSidebar}>
          {isOpen ? "Hide Menu" : "Show Menu"}
        </button>
        <MainContent />
        <DashboardCard/>
        <PageVisits/>
        <TotalOrdersChart/>
        <Footer></Footer>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
