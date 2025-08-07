import React, { useState } from "react";
import Dashbord from "./Dashboard/Dashbord";
import Sidebar from "../Components/sidebar/Sidebar";
import Navbar from "../Components/header/Navbar";
import BonusDashbord from "./Bonus/BonusDashbord";
import { Route, Routes } from "react-router";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("Toggle sidebar clicked! Current state:", isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* Navbar at the top */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main content area with sidebar */}

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        {/* Main content area */}
    <Routes >
          <Route path="/" element={<Dashbord />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/bonuses" element={<BonusDashbord />} />
                   
              {/* <Route path="/profile" element={<Profile />} />
              <Route path="/accounts" element={<Accounts />} />             
              <Route path="/funds" element={<Funds />} />
              <Route path="/trading-terminals" element={<TradingTerminals />} />
              <Route path="/ib-menu" element={<IBMenu />} />
              <Route path="/support" element={<Support />} />
              <Route path="/tools" element={<Tools />} /> */}
        </Routes>
      
        
       

      </div>
      
    </>
  );
};

export default Main;
