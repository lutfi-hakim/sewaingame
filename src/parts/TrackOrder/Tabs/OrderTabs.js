import "./index.css";

function OrderTabs({ setSelectedTab, active }) {
  console.log(active);
  return (
    <div className="wrapper-tab">
      <div className="tab-order">
        <div
          className={
            active === "ongoing" ? "tab-order-active" : "tab-order-nonactive"
          }
          onClick={() => setSelectedTab("ongoing")}
        >
          On Going
        </div>
        <div
          className={
            active === "pickedup" ? "tab-order-active" : "tab-order-nonactive"
          }
          onClick={() => setSelectedTab("pickedup")}
        >
          Picked Up
        </div>
        <div
          className={
            active === "ontransit" ? "tab-order-active" : "tab-order-nonactive"
          }
          onClick={() => setSelectedTab("ontransit")}
        >
          On Transit
        </div>
        <div
          className={
            active === "deliverd" ? "tab-order-active" : "tab-order-nonactive"
          }
          onClick={() => setSelectedTab("deliverd")}
        >
          Delivered
        </div>
      </div>
      <div className="tab-filter">
        
      </div>
    </div>
  );
}
export default OrderTabs;
