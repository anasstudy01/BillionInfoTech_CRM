import React, { useState } from "react";
import Dashbord from "./Dashboard/Dashbord";
import Sidebar from "../Components/sidebar/Sidebar";
import Navbar from "../Components/header/Navbar";
import BonusDashbord from "./Bonus/BonusDashbord";

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
        {/* <Dashbord /> */}
        <BonusDashbord />

      </div>
      
    </>
  );
};

export default Main;
