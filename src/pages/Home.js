import React from "react";
import DashboardHeader from "../components/DashboardHeader";

function Home() {
  return (
    <div className="dashboard-content">
      <DashboardHeader title={"Home"} />
      <div className="dashboard-content-container"></div>
    </div>
  );
}

export default Home;
