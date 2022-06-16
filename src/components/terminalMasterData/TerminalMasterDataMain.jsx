import React from "react";
import { useSelector } from "react-redux";
// Components
import SidebarMain from "../common/SidebarMain";
import TerminalMasterDataWindow from "./TerminalMasterDataWindow";

const TerminalMasterData = () => {
  const company = useSelector((state) => {
    return state.sidebarReducer;
  });
  return (
    <div className="mainView d-flex">
      <SidebarMain />
      <div className={company.sidebarOpen ? "sidebarOpened" : "sidebarClosed"}>
        <TerminalMasterDataWindow />
      </div>
    </div>
  );
};

export default TerminalMasterData;
