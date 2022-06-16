import React from "react";
import { useSelector } from "react-redux";
// CSS
import "./reportPage.css";
// Components
import SidebarMain from "../common/SidebarMain";
import ReportPageWindow from "./ReportPageWindow";

const ReportPageMain = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });

  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <ReportPageWindow />
      </div>
    </div>
  );
};

export default ReportPageMain;
