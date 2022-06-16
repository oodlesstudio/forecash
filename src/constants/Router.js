import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import TerminalMasterData from "../pages/TerminalMasterData";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalMasterData />} />
        <Route path="/reports/atm-master-data" element={<TerminalMasterData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
