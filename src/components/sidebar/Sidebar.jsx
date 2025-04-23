import { Link } from "react-router-dom";
import style from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={style.header}>
      <img src="../images/logo-large.svg" alt="" width={121} />
      <Link className={style.link} to="/overview">
        <img
          className={style.header_image}
          src="../images/icon-nav-overview.svg"
          alt=""
          width={24}
        />
        Overview
      </Link>
      <Link className={style.link} to="/transactions">
        <img
          className={style.header_image}
          src="../images/icon-nav-transactions.svg"
          alt=""
          width={24}
        />
        Transactions
      </Link>
      <Link className={style.link} to="/budgets">
        <img
          className={style.header_image}
          src="../images/icon-nav-budgets.svg"
          alt=""
          width={24}
        />
        Budgets
      </Link>
      <Link className={style.link} to="/pots">
        <img
          className={style.header_image}
          src="../images/icon-nav-pots.svg"
          alt=""
          width={24}
        />
        Pots
      </Link>
      <Link className={style.link} to="/recuringBills">
        <img
          className={style.header_image}
          src="../images/icon-nav-recurring-bills.svg"
          alt=""
          width={24}
        />
        RecuringBills
      </Link>
    </div>
  );
}

export default Sidebar;
