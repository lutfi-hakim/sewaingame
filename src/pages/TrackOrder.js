import React from "react";
import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import OrderTabs from "../parts/TrackOrder/Tabs/OrderTabs";

import OnGoing from "../parts/TrackOrder/OnGoing";
import PickedUp from "../parts/TrackOrder/PickedUp";
import OnTransit from "../parts/TrackOrder/OnTransit";
import Delivered from "../parts/TrackOrder/Delivered";

const TABS = {
  ongoing: <OnGoing />,
  pickedup: <PickedUp />,
  ontransit: <OnTransit />,
  delivered: <Delivered />,
};

function TrackOrder() {
  const [selectedTab, setSelectedTab] = useState("ongoing");

  return (
    <>
      <div className="dashboard-content">
        <DashboardHeader title={"Track Order"} />
        <div className="dashboard-content-container">
          <div>
            <OrderTabs setSelectedTab={setSelectedTab} active={selectedTab} />

            {TABS[selectedTab]}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackOrder;
