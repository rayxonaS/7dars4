import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import style from "./MainLayout.module.scss";
import { useState } from "react";

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div
      className={`main_layout ${showSidebar ? "sidebar" : ""}
    }`}
    >
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
