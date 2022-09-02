import DashboardIcon from "../assets/icon/home-svgrepo-com.svg";

import OrderIcon from "../assets/icon/order-svgrepo-com.svg";

import HistoryIcon from "../assets/icon/history-svgrepo-com.svg";
import TranIcon from "../assets/icon/transaction-svgrepo-com.svg";
import bANKIcon from "../assets/icon/bank-terminal-svgrepo-com.svg";
import BisIcon from "../assets/icon/check-business-and-finance-svgrepo-com.svg";

const sidebar_menu = [
  {
    id: 1,
    icon: DashboardIcon,
    icons: "",
    path: "/",
    title: "Home",
  },
  {
    id: 2,
    icon: OrderIcon,
    icons: OrderIcon,
    path: "/track-order",
    title: "Track Order",
  },
  {
    id: 3,
    icon: bANKIcon,
    icons: bANKIcon,
    path: "/account-receivable",
    title: "Account Receivable",
  },
  {
    id: 4,
    icon: TranIcon,
    icons: TranIcon,
    path: "/transaction",
    title: "Transactions",
  },
  {
    id: 5,
    icon: BisIcon,
    icons: BisIcon,
    path: "/billing",
    title: "Billing Statement",
  },
  {
    id: 6,
    icon: HistoryIcon,
    icons: HistoryIcon,
    path: "/history",
    title: "History",
  },
];

export default sidebar_menu;
