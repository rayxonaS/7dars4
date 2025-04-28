import { Link } from "react-router-dom";
import style from "./sidebar.module.scss";

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className={`header ${showSidebar ? "sidebar" : ""}
    }`}
    >
      <div>
        <img src="../images/logo-large.svg" alt="" width={121} />
        <Link className={style.link} to="/overview">
          <img
            className={style.header_image}
            src="../images/icon-nav-overview.svg"
            alt=""
            width={24}
          />
          <span className={style.link_text}>Overview</span>
        </Link>
        <Link className={style.link} to="/transactions">
          <img
            className={style.header_image}
            src="../images/icon-nav-transactions.svg"
            alt=""
            width={24}
          />
          <span className={style.link_text}>Transactions</span>
        </Link>
        <Link className={style.link} to="/budgets">
          <img
            className={style.header_image}
            src="../images/icon-nav-budgets.svg"
            alt=""
            width={24}
          />
          <span className={style.link_text}>Budgets</span>
        </Link>
        <Link className={style.link} to="/pots">
          <img
            className={style.header_image}
            src="../images/icon-nav-pots.svg"
            alt=""
            width={24}
          />
          <span className={style.link_text}>Pots</span>
        </Link>
        <Link className={style.link} to="/recuringBills">
          <img
            className={style.header_image}
            src="../images/icon-nav-recurring-bills.svg"
            alt=""
            width={24}
          />
          <span className={style.link_text}>RecuringBills</span>
        </Link>
      </div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={style.button}
      >
        <img
          className={style.button_image}
          src="../images/icon-minimize-menu.svg"
          alt=""
        />
        <span className={style.link_text}>Minimaze Menu</span>
      </button>
    </div>
  );
}

export default Sidebar;
