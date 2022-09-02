import "./index.css";
import { Form } from "react-bootstrap";
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
        <Form.Group className="w-35 form-rang" controlId="test-date-input">
          <Form.Control
            type="date"
            max={new Date().toISOString().slice(0, 10)}
          />
          {" /"}
          <Form.Control
            type="date"
            max={new Date().toISOString().slice(0, 10)}
          />
        </Form.Group>
      </div>
    </div>
  );
}
export default OrderTabs;
