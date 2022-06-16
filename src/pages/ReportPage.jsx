import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/reportPage/reportPage.css";
// Components
import Header from "../components/common/Header";
import ReportPageMain from "../components/reportPage/ReportPageMain";
import Footer from "../components/common/Footer";

const ReportPage = () => {
  return (
    <div>
      <Header />
      <ReportPageMain />
      <Footer />
    </div>
  );
};

export default ReportPage;
