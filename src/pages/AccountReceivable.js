import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import OrderTabs from "../parts/TrackOrder/Tabs/OrderTabs";
import { useState } from "react";
import OnGoing from "../parts/TrackOrder/OnGoing";
import PickedUp from "../parts/TrackOrder/PickedUp";
import OnTransit from "../parts/TrackOrder/OnTransit";
import Delivered from "../parts/TrackOrder/Delivered";
import TableReceivable from "../parts/AccountReceivable/TableReceivable";
const TABS = {
  ongoing: <OnGoing />,
  pickedup: <PickedUp />,
  ontransit: <OnTransit />,
  delivered: <Delivered />,
};

function AccountReceivable() {
  const [selectedTab, setSelectedTab] = useState("ongoing");

  return (
    <>
      <div className="dashboard-content">
        <DashboardHeader title={"Account Receivable"} />
        <div className="dashboard-content-container">
          <div>
            <TableReceivable />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountReceivable;
