import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

import "./index.css";

const products = [
  {
    id: 1,
    billing: "2022-1",
    mID: 10001,
    name: "Poof",
    cName: "PT Poof Jaya",
    type: "Bussines",
    amount: "20000000",
    tax: "4000",
    tAmount: "12000",
    statuse: "paid",
  },
  {
    id: 2,
    billing: "2022-1",
    mID: 10001,
    name: "Poof",
    cName: "PT Poof Jaya",
    type: "Bussines",
    amount: "20000000",
    tax: "4000",
    tAmount: "12000",
    statuse: "paid",
  },
  {
    id: 3,
    billing: "2022-1",
    mID: 10001,
    name: "Poof",
    cName: "PT Poof Jaya",
    type: "Bussines",
    amount: "20000000",
    tax: "4000",
    tAmount: "12000",
    statuse: "paid",
  },
  {
    id: 4,
    billing: "2022-1",
    mID: 10001,
    name: "Poof",
    cName: "PT Poof Jaya",
    type: "Bussines",
    amount: "20000000",
    tax: "4000",
    tAmount: "12000",
    statuse: "paid",
  },
];

const columns = (selectedRow) => {
  return [
    {
      dataField: "id",
      text: "ID",
      headerStyle: (colum, colIndex) => {
        return { width: "25px" };
      },
    },
    {
      dataField: "billing",
      text: "Billing Cycle",
      headerStyle: (colum, colIndex) => {
        return { width: "100px" };
      },
    },
    {
      dataField: "mID",
      text: "Merchant ID",
      headerStyle: (colum, colIndex) => {
        return { width: "100px" };
      },
    },
    {
      dataField: "name",
      text: "Merchant Name",
      headerStyle: (colum, colIndex) => {
        return { width: "120px" };
      },
    },
    {
      dataField: "cName",
      text: "Company Name",
      headerStyle: (colum, colIndex) => {
        return { width: "130px" };
      },
    },
    {
      dataField: "type",
      text: "Account Type",
      headerStyle: (colum, colIndex) => {
        return { width: "115px" };
      },
    },
    {
      dataField: "amount",
      text: "Amount",
    },
    {
      dataField: "tax",
      text: "Tax",
      headerStyle: (colum, colIndex) => {
        return { width: "70px" };
      },
    },
    {
      dataField: "tAmount",
      text: "Total Amount",
      headerStyle: (colum, colIndex) => {
        return { width: "110px" };
      },
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cellContent, row) => {
        if (row.inStock)
          return (
            <>
              <span className="label label-success"> Available</span>
            </>
          );
        return (
          <>
            <span className="label label-danger"> Backordered</span>
          </>
        );
      },
    },
    {
      dataField: "",
      text: "Action",
    },
  ];
};

class TableOnGoing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: products,
      selectedRow: null,
    };
  }

  selectRow = (row, isSelect, rowIndex) => {
    this.setState((curr) => ({ ...curr, selectedRow: row }));
  };

  render() {
    return (
      <div>
        <h1 className="h2">Products</h1>
        <BootstrapTable
          keyField="id"
          data={this.state.gridData}
          selectRow={{
            mode: "radio",
            hideSelectColumn: true,
            clickToSelect: true,
            borderRadius: "10px",
            style: {
              background: "#0047FD",
              color: "#ffffff",
              borderRadius: "6px",
            },
            selected: !!this.state.selectedRow && [this.state.selectedRow.id],
            onSelect: this.selectRow,
          }}
          columns={columns(this.state.selectedRow)}
          hover
          options={{ noDataText: "No Templates Found" }}
        />
      </div>
    );
  }
}

export default TableOnGoing;
