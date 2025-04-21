import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import style from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
