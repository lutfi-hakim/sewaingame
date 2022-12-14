import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SideBarItem from "./sidebar-item";

import "./styles.css";

import LogoutIcon from "../../assets/icons/logout.svg";

function SideBar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  const [state, setState] = useState({
    sidebarClass: "",
  });
  useEffect(() => {
    menu.forEach((element) => {
      if (location.pathname === element.path) {
        setActive(element.id);
      }
    });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className={`sidebar ${state.sidebarClass}`}>
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <h3>LOGO BRAND</h3>
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {menu.map((item, index) => (
              <div key={index} onClick={() => __navigate(item.id)}>
                <SideBarItem active={item.id === active} item={item} />
              </div>
            ))}
          </div>

          <div className="sidebar-footer">
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
            />
            <span className="sidebar-item-label">Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
