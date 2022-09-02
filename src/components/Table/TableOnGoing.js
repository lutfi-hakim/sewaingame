import React from "react";
import Badge from "react-bootstrap/Badge";
import BootstrapTable from "react-bootstrap-table-next";
import SettingsIcon from "../../assets/icons/settings.svg";
import AdownIcon from "../../assets/icon/arrow-down-svgrepo-com.svg";
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

class TableOnGoing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: products,
      selectedRow: null,
    };
    this.GetActionFormat = this.GetActionFormat.bind(this);
  }

  selectRow = (row, isSelect, rowIndex) => {
    this.setState((curr) => ({ ...curr, selectedRow: row }));
  };

  GetActionFormat = (cell, row) => {
    return (
      <div className="action-btn">
        <img src={SettingsIcon} alt="" className="btn-action" />
        <img src={AdownIcon} alt="" className="btn-action" />
      </div>
    );
  };

  getcolumnlist(selectedRow) {
    const columns = () => {
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
            if (row === "paid")
              return (
                <>
                  <span className="badge badge-secondary">New</span>
                </>
              );
            return <Badge bg="danger">Unpaid</Badge>;
          },
        },
        {
          dataField: "",
          text: "Action",
          formatter: this.GetActionFormat,
        },
      ];
    };
    return columns(selectedRow);
  }

  render() {
    return (
      <div>
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
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            },
            selected: !!this.state.selectedRow && [this.state.selectedRow.id],
            onSelect: this.selectRow,
          }}
          columns={this.getcolumnlist(this.selectedRow)}
          hover
          options={{ noDataText: "No Templates Found" }}
        />
      </div>
    );
  }
}

export default TableOnGoing;
