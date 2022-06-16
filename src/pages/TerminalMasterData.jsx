import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/terminalMasterData/terminalMasterData.css";
// Components
import Header from "../components/common/Header";
import TerminalMasterDataMain from "../components/terminalMasterData/TerminalMasterDataMain";
import Footer from "../components/common/Footer";

const TerminalMasterData = () => {
  return (
    <div>
      <Header />
      <TerminalMasterDataMain />
      <Footer />
    </div>
  );
};

export default TerminalMasterData;
