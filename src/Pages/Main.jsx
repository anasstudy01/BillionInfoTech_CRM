import React, { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "../Components/sidebar/Sidebar";
import Navbar from "../Components/header/Navbar";
import BonusDashboard from "./Bonus/BonusDashboard";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";


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
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bonuses" element={<BonusDashboard />} />

              {/* <Route path="/profile" element={<Profile />} />
              <Route path="/accounts" element={<Accounts />} />             
              <Route path="/funds" element={<Funds />} />
              <Route path="/trading-terminals" element={<TradingTerminals />} />
              <Route path="/ib-menu" element={<IBMenu />} />
              <Route path="/support" element={<Support />} />
              <Route path="/tools" element={<Tools />} /> */}
              <Route path="*" element={<NotFound />} />
        </Routes>
      
        
       

      </div>
      
    </>
  );
};

export default Main;
