import React, { useState } from "react";
import Select from "react-select";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

// Images
import Pdf from "../../images/common/pdf.svg";
import Excel from "../../images/common/excel.svg";

// Modals

const options = [
  { value: "10 Entries", label: "10 Entries" },
  { value: "25 Entries", label: "25 Entries" },
  { value: "50 Entries", label: "50 Entries" },
  { value: "100 Entries", label: "100 Entries" },
];
const options2 = [
  { value: "1", label: "option" },
  { value: "2", label: "option" },
  { value: "3", label: "option" },
  { value: "4", label: "option" },
];

const ReportPageWindow = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Modals

  // Select Error
  const [clientName, setClientName] = useState(false);
  const changeClientName = () => setClientName(true);

  const [productType, setProductType] = useState(false);
  const changeProductType = () => setProductType(true);

  const [binScheme, setBinScheme] = useState(false);
  const changeBinScheme = () => setBinScheme(true);

  const [siteType, setSiteType] = useState(false);
  const changeSiteType = () => setSiteType(true);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to pdf
    </Tooltip>
  );

  const renderTooltipExcel = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Export to excel
    </Tooltip>
  );

  return (
    <div className="configLeft unmatchedContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">Reports</h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Reports</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12">Reports</p>
          </Link>
        </div>
      </div>

      {/* Config Left Top */}

      <div className="configLeftTop configLeftTop2 mb-12">
        <div className="accordion" id="unmatchedFilters">
          <div className="accordion-item">
            <div
              className="d-flex justify-content-between align-items-center configLeftFilters accordion-header"
              id="unmatchedFiltersHeading"
            >
              <h6 className="fontWeight-600 colorBlack">Search Criteria</h6>
              <button
                className="allFiltersBtn btn p-0 d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#unmatchedFiltersCollapse"
                aria-expanded="true"
                aria-controls="unmatchedFiltersCollapse"
              >
                <span className="icon-Hide"></span>
                <span className="ms-1 fontSize12-m colorPrimaryDefault">
                  Show / Hide
                </span>
              </button>
            </div>
            <div
              id="unmatchedFiltersCollapse"
              className="accordion-collapse collapse show"
              aria-labelledby="unmatchedFiltersHeading"
              data-bs-parent="#unmatchedFilters"
            >
              <div className="accordion-body">
                <div className="hrGreyLine"></div>
                <div className="configSelectBoxTop row">
                  <div className="clientNameSelect col-1">
                    <label htmlFor="bank">Bank</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setClientName();
                        changeClientName();
                      }}
                      options={options2}
                      id="bank"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {clientName && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>

                  <div className="clientNameSelect col-1">
                    <label htmlFor="citAgency">CIT Agency</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setProductType();
                        changeProductType();
                      }}
                      options={options2}
                      id="citAgency"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {productType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col-1">
                    <label htmlFor="state">State</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setBinScheme();
                        changeBinScheme();
                      }}
                      options={options2}
                      id="state"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {binScheme && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                  <div className="clientNameSelect col-1">
                    <label htmlFor="siteType">Site Type</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={() => {
                        setSiteType();
                        changeSiteType();
                      }}
                      options={options2}
                      id="siteType"
                      classNamePrefix="reactSelectBox"
                      placeholder="Select"
                    />
                    {siteType && (
                      <p className="text-danger font-size9">
                        Enter a correct input
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center btnsBtm">
                  <button type="button" className="btnPrimaryOutline">
                    Clear
                  </button>
                  <button type="button" className="btnPrimary ms-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="docketWindow">
        <ul className="nav nav-tabs nav-mobile-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link active"
              id="cashOut-tab"
              data-bs-toggle="tab"
              data-bs-target="#cashOut"
              type="button"
              role="tab"
              aria-controls="cashOut"
              aria-selected="true"
            >
              Exp. Cash Out Site Class Wise
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="craWise-tab"
              data-bs-toggle="tab"
              data-bs-target="#craWise"
              type="button"
              role="tab"
              aria-controls="craWise"
              aria-selected="false"
            >
              CRA Wise
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="siteClass-tab"
              data-bs-toggle="tab"
              data-bs-target="#siteClass"
              type="button"
              role="tab"
              aria-controls="siteClass"
              aria-selected="false"
            >
              SiteClass Wise
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-mobile-link"
              id="indentRaised-tab"
              data-bs-toggle="tab"
              data-bs-target="#indentRaised"
              type="button"
              role="tab"
              aria-controls="indentRaised"
              aria-selected="false"
            >
              Indent Raised
            </button>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          {/* Account Type Tab */}
          <div
            className="tab-pane fade show active"
            id="cashOut"
            role="tabpanel"
            aria-labelledby="cashOut-tab"
          >
            <div className="nav-tab-box">
              {/* Docket Window */}
              <div className="docketWindowSection p-0">
                <div className="configLeftBottom">
                  <div className="tableBorderBox border-0">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="clientNameSelect configFormatEntities">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          isSearchable={false}
                          classNamePrefix="reactSelectBox"
                          placeholder="10 Entries"
                        />
                      </div>
                      <div className="d-flex">
                        <div className="form-group has-search nav-search">
                          <span className="icon-Search form-control-feedback"></span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>

                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Pdf} alt="Pdf" />
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltipExcel}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Excel} alt="Excel" />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive tableContentBox reportTable">
                      <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
                        <thead>
                          <tr>
                            <th scope="col" className="p-0">
                              S.No
                            </th>
                            <th scope="col">
                              Days
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Platinum
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Gold
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Silver
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col" className="silverPlusCol">
                              Silver Plus
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Bronze
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">1</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">2</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">3</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">4</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">5</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">6</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">7</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="paginationBox d-flex align-items-center justify-content-between my-12">
                      <div className="paginationLeft fontSize12">
                        Showing 1 to 10 of 49 entries
                      </div>

                      <div className="paginationRight">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link
                                className="page-link previousPagination"
                                to="/"
                                aria-label="Previous"
                              >
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{
                                    fontSize: "16px",
                                    transform: "rotate(180deg)",
                                  }}
                                ></span>
                                <span>First</span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                5
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link nextPagination"
                                to="/"
                                aria-label="Next"
                              >
                                <span>Last</span>
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{ fontSize: "16px" }}
                                ></span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className="tab-pane fade"
            id="craWise"
            role="tabpanel"
            aria-labelledby="craWise-tab"
          >
            <div className="nav-tab-box">
              {/* Docket Window */}
              <div className="docketWindowSection p-0">
                <div className="configLeftBottom">
                  <div className="tableBorderBox border-0">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="clientNameSelect configFormatEntities">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          isSearchable={false}
                          classNamePrefix="reactSelectBox"
                          placeholder="10 Entries"
                        />
                      </div>
                      <div className="d-flex">
                        <div className="form-group has-search nav-search">
                          <span className="icon-Search form-control-feedback"></span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>

                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Pdf} alt="Pdf" />
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltipExcel}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Excel} alt="Excel" />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive tableContentBox reportTable">
                      <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
                        <thead>
                          <tr>
                            <th scope="col" className="p-0">
                              S.No
                            </th>
                            <th scope="col">
                              Days
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              CMS
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Logicash
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              RCI
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              SIS
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Writer
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col" className="bankLoadingCol">
                              Bank Loading Cash
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">1</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">2</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">3</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">4</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">5</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">6</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">7</td>
                            <td>Asaam</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="paginationBox d-flex align-items-center justify-content-between my-12">
                      <div className="paginationLeft fontSize12">
                        Showing 1 to 10 of 49 entries
                      </div>

                      <div className="paginationRight">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link
                                className="page-link previousPagination"
                                to="/"
                                aria-label="Previous"
                              >
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{
                                    fontSize: "16px",
                                    transform: "rotate(180deg)",
                                  }}
                                ></span>
                                <span>First</span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                5
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link nextPagination"
                                to="/"
                                aria-label="Next"
                              >
                                <span>Last</span>
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{ fontSize: "16px" }}
                                ></span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            className="tab-pane fade"
            id="siteClass"
            role="tabpanel"
            aria-labelledby="craWise-tab"
          >
            <div className="nav-tab-box">
              {/* forms Fields */}

              {/* Docket Window */}
              <div className="docketWindowSection p-0">
                <div className="configLeftBottom">
                  <div className="tableBorderBox border-0">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="clientNameSelect configFormatEntities">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          isSearchable={false}
                          classNamePrefix="reactSelectBox"
                          placeholder="10 Entries"
                        />
                      </div>
                      <div className="d-flex">
                        <div className="form-group has-search nav-search">
                          <span className="icon-Search form-control-feedback"></span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>

                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Pdf} alt="Pdf" />
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltipExcel}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Excel} alt="Excel" />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive tableContentBox reportTable">
                      <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
                        <thead>
                          <tr>
                            <th scope="col" className="p-0">
                              S.No
                            </th>
                            <th scope="col">
                              Days
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Platinum
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Gold
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Silver
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col" className="silverPlusCol">
                              Silver Plus
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Bronze
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">1</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">2</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">3</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">4</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">5</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">6</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">7</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="paginationBox d-flex align-items-center justify-content-between my-12">
                      <div className="paginationLeft fontSize12">
                        Showing 1 to 10 of 49 entries
                      </div>

                      <div className="paginationRight">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link
                                className="page-link previousPagination"
                                to="/"
                                aria-label="Previous"
                              >
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{
                                    fontSize: "16px",
                                    transform: "rotate(180deg)",
                                  }}
                                ></span>
                                <span>First</span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                5
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link nextPagination"
                                to="/"
                                aria-label="Next"
                              >
                                <span>Last</span>
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{ fontSize: "16px" }}
                                ></span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div
            className="tab-pane fade"
            id="indentRaised"
            role="tabpanel"
            aria-labelledby="inedentRaised-tab"
          >
            <div className="nav-tab-box">
              {/* forms Fields */}

              {/* Docket Window */}
              <div className="docketWindowSection p-0">
                <div className="configLeftBottom">
                  <div className="tableBorderBox border-0">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                      <div className="clientNameSelect configFormatEntities">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          isSearchable={false}
                          classNamePrefix="reactSelectBox"
                          placeholder="10 Entries"
                        />
                      </div>
                      <div className="d-flex">
                        <div className="form-group has-search nav-search">
                          <span className="icon-Search form-control-feedback"></span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>

                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Pdf} alt="Pdf" />
                          </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltipExcel}
                        >
                          <button type="button" className="iconButtonBox">
                            <img src={Excel} alt="Excel" />
                          </button>
                        </OverlayTrigger>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive tableContentBox reportTable">
                      <table className="table table-initial-width table-striped table-hover table-borderless align-middle">
                        <thead>
                          <tr>
                            <th scope="col" className="p-0">
                              S.No
                            </th>
                            <th scope="col">
                              Days
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Platinum
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Gold
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Silver
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col" className="silverPlusCol">
                              Silver Plus
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                            <th scope="col">
                              Bronze
                              <Link to="/">
                                <span className="icon-Sort-icon"></span>
                              </Link>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-0">1</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">2</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">3</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">4</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">5</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">6</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td className="p-0">7</td>
                            <td>100</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="paginationBox d-flex align-items-center justify-content-between my-12">
                      <div className="paginationLeft fontSize12">
                        Showing 1 to 10 of 49 entries
                      </div>

                      <div className="paginationRight">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link
                                className="page-link previousPagination"
                                to="/"
                                aria-label="Previous"
                              >
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{
                                    fontSize: "16px",
                                    transform: "rotate(180deg)",
                                  }}
                                ></span>
                                <span>First</span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                2
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link paginationBottom"
                                to="/"
                              >
                                5
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link
                                className="page-link nextPagination"
                                to="/"
                                aria-label="Next"
                              >
                                <span>Last</span>
                                <span
                                  className="icon-Breadcrumb-Arrow"
                                  style={{ fontSize: "16px" }}
                                ></span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPageWindow;
