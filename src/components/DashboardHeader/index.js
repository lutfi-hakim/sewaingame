import React from "react";

import "./styles.css";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import DropdownProfile from "../DropdownProfile/DropdownProfile";

function DashboardHeader({ title }) {
  return (
    <div className="dashbord-header-container">
      <div className="dashbord-header-logo">
        <h3>{title}</h3>
      </div>

      <div className="dashbord-header-right">
        <a href="#">Top Up</a>
        <a href="#">Expensess</a>
        <a href="#">Ticket</a>
        <img
          src={NotificationIcon}
          alt="notification-icon"
          className="dashbord-header-icon"
        />
        <img
          src={SettingsIcon}
          alt="settings-icon"
          className="dashbord-header-icon"
        />
        <DropdownProfile />
      </div>
    </div>
  );
}

export default DashboardHeader;
