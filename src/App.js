import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import sidebar_menu from "./constants/sidebar-menu";
import AccountReceivable from "./pages/AccountReceivable";
import TrackOrder from "./pages/TrackOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="dashboard-container">
          <SideBar menu={sidebar_menu} />

          <div className="dashboard-body">
            <Routes>
              <Route path="*" element={<div></div>} />
              <Route exact path="/" element={<div></div>} />
              <Route exact path="/track-order" element={<TrackOrder />} />
              <Route
                exact
                path="/account-receivable"
                element={<AccountReceivable />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
