import { Link } from "react-router-dom";
import style from "./sidebar.module.scss";

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className={`header ${showSidebar ? "sidebar" : ""}
    }`}
    >
      <div>
        {showSidebar ? (
          <img src="../images/logo-small.svg" alt="" width={13} />
        ) : (
          <img src="../images/logo-large.svg" alt="" width={121} />
        )}
        {showSidebar ? (
          <Link className={style.link} to="/overview">
            <img
              className={style.header_image}
              src="../images/icon-nav-overview.svg"
              alt=""
              width={24}
            />
          </Link>
        ) : (
          <Link className={style.link} to="/overview">
            <img
              className={style.header_image}
              src="../images/icon-nav-overview.svg"
              alt=""
              width={24}
            />
            Overview
          </Link>
        )}
        {showSidebar ? (
          <Link className={style.link} to="/transactions">
            <img
              className={style.header_image}
              src="../images/icon-nav-transactions.svg"
              alt=""
              width={24}
            />
          </Link>
        ) : (
          <Link className={style.link} to="/transactions">
            <img
              className={style.header_image}
              src="../images/icon-nav-transactions.svg"
              alt=""
              width={24}
            />
            Transactions
          </Link>
        )}
        {showSidebar ? (
          <Link className={style.link} to="/budgets">
            <img
              className={style.header_image}
              src="../images/icon-nav-budgets.svg"
              alt=""
              width={24}
            />
          </Link>
        ) : (
          <Link className={style.link} to="/budgets">
            <img
              className={style.header_image}
              src="../images/icon-nav-budgets.svg"
              alt=""
              width={24}
            />
            Budgets
          </Link>
        )}
        {showSidebar ? (
          <Link className={style.link} to="/pots">
            <img
              className={style.header_image}
              src="../images/icon-nav-pots.svg"
              alt=""
              width={24}
            />
          </Link>
        ) : (
          <Link className={style.link} to="/pots">
            <img
              className={style.header_image}
              src="../images/icon-nav-pots.svg"
              alt=""
              width={24}
            />
            Pots
          </Link>
        )}
        {showSidebar ? (
          <Link className={style.link} to="/recuringBills">
            <img
              className={style.header_image}
              src="../images/icon-nav-recurring-bills.svg"
              alt=""
              width={24}
            />
          </Link>
        ) : (
          <Link className={style.link} to="/recuringBills">
            <img
              className={style.header_image}
              src="../images/icon-nav-recurring-bills.svg"
              alt=""
              width={24}
            />
            RecuringBills
          </Link>
        )}
      </div>
      {showSidebar ? (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className={style.button}
        >
          <img
            className={style.button_image}
            src="../images/icon-minimize-menu.svg"
            alt=""
          />
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className={style.button}
        >
          <img
            className={style.button_image}
            src="../images/icon-minimize-menu.svg"
            alt=""
          />
          Minimaze Menu
        </button>
      )}
    </div>
  );
}

export default Sidebar;
