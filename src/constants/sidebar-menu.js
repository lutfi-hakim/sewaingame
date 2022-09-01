import DashboardIcon from "../assets/icons/dashboard.svg";
import ShippingIcon from "../assets/icons/shipping.svg";
import ProductIcon from "../assets/icons/product.svg";
import UserIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/bag.svg";
import ArrowRight from "../assets/icons/arrowRight.svg";

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
    icon: bagIcon,
    icons: ArrowRight,
    path: "/track-order",
    title: "Track Order",
  },
  {
    id: 3,
    icon: bagIcon,
    icons: ArrowRight,
    path: "/account-receivable",
    title: "Account Receivable",
  },
  {
    id: 4,
    icon: bagIcon,
    icons: ArrowRight,
    path: "/transaction",
    title: "Transactions",
  },
  {
    id: 5,
    icon: bagIcon,
    icons: ArrowRight,
    path: "/billing",
    title: "Billing Statement",
  },
  {
    id: 6,
    icon: bagIcon,
    icons: ArrowRight,
    path: "/history",
    title: "History",
  },
];

export default sidebar_menu;
