import React from "react";
import { metrics } from "../data/data";
import MetricCard from "../Components/main/MetricCard";


import DashboardNav from "../Components/main/DashboardNav";
import MovingDisplay from "../Components/main/MovingDisplay";
import PartnerLink from "../Components/main/PartnerLink";

const DashboardMain = () => {
  return (
    <>
      {/* Header Section */}
      <DashboardNav heading="Dashboard" location="Dashboard" />
      {/* Market Ticker */}
      <MovingDisplay />

      {/* Main Content */}
      <div className="p-6 mx-5">
        {/* Financial Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 shadow-lg max-w-7xl">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Partner Link Section */}
        <PartnerLink />

        {/* Action Buttons */}
       
      </div>
    </>
  );
};

export default DashboardMain;
