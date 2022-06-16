import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components

import TerminalMasterData from "../pages/TerminalMasterData";
import ReportPage from "../pages/ReportPage";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalMasterData />} />
        <Route path="/reports/atm-master-data" element={<TerminalMasterData />} />
        <Route path="/reports/reports" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
