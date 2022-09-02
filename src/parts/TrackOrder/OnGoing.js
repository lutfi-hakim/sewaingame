import React, { useState } from "react";
import Stepper from "../../components/Stepper/StepperState";

import "./index.scss";

const orde = [
  {
    id: 1,
    orderID: "12345ORDER",
    startOrder: "24 Maret 2022",
    estimatOrder: "28 Maret 2022",
    status: "upcoming",
    penjual: "Samu Alexander W",
    from: "Jl. H. Syahrin No.12 Gandaria Utara, Kebayoran Baru Jaksel",
    type_barang: "Pecah",
    qty: "2",
    pembeli: "aria wicaksono",
    to: "Jl. H. Syahrin No.12 Gandaria Utara, Kebayoran Baru Jaksel",
    kurir: "sicepat",
    progress: "order",
  },
  {
    id: 2,
    orderID: "12345ORDER",
    startOrder: "24 Maret 2022",
    estimatOrder: "28 Maret 2022",
    status: "deloyed",
    penjual: "Samu Alexander W",
    from: "Jl. H. Syahrin No.12 Gandaria Utara, Kebayoran Baru Jaksel",
    type_barang: "Pecah",
    qty: "2",
    pembeli: "aria wicaksono",
    to: "Jl. H. Syahrin No.12 Gandaria Utara, Kebayoran Baru Jaksel",
    kurir: "sicepat",
    progress: "order",
  },
  {
    id: 3,
    orderID: "12345ORDER",
    startOrder: "24 Maret 2022",
    estimatOrder: "28 Maret 2022",
    status: "delivered",
    penjual: "Samu Alexander W",
    from: "Jl. H. Syahrin No.12 Gandaria Utara, Kebayoran Baru Jaksel",
    type_barang: "Pecah",
    qty: "1",
    pembeli: "aria wicaksono",
    to: "Jl. H. Syahrin No.12 Gandaria Utara, Kebayoran Baru Jaksel",
    kurir: "sicepat",
    progress: "order",
  },
];

function OnGoing() {
  return (
    <>
      {orde.map((item, index) => {
        return (
          <div className="ongoing" key={index}>
            <div className="head-ongoing">
              <span className="id-order">Order ID: {item.orderID}</span>
              <span className="estimate-order">
                Order Time {item.startOrder} - Estimated Arrived{" "}
                {item.estimatOrder}
              </span>
              <span
                className={`${
                  item.status == "upcoming"
                    ? "status-ongoing-upcoming"
                    : item.status == "deloyed"
                    ? "status-ongoing-deloyed"
                    : "status-ongoing-delivered"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="body-ongoing">
              <div className="progre-order">
                <div className="progre">
                  <Stepper />
                </div>
                <div>
                  <a href="#">View Detail</a>
                </div>
              </div>
              <div className="from-order">
                <span className="dari">
                  <p>{item.penjual}</p>
                  <p>{item.from}</p>
                </span>
                <span className="barang">
                  <p>Barang {item.type_barang}</p>
                  <p>Qty: {item.qty}</p>
                </span>
              </div>
              <div className="to-order">
                <span className="untuk">
                  <p>{item.pembeli}</p>
                  <p>{item.to}</p>
                </span>
                <span className="orders">
                  <span>
                    <img
                      src="https://lelogama.go-jek.com/cms_editor/2021/05/28/info-gojek-2.png"
                      alt="logo"
                    />
                  </span>
                  <span>
                    {item.status == "upcoming" ? <a href="">Cancel</a> : ""}
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default OnGoing;
