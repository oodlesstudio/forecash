import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

// Images

const options = [
  { value: "1", label: "options" },
  { value: "2", label: "options" },
  { value: "3", label: "options" },
  { value: "4", label: "options" },
];

const TerminalMasterDataWindow = () => {
  // const [showFilters, setShowFilters] = useState(false);

  // Select Error

  const [selectedOption, setSelectedOption] = useState(null);

  const [cit, setCit] = useState(false);
  const changeCit = () => setCit(true);

  const [cdStatus, setCdStatus] = useState(false);
  const changeCdStatus = () => setCdStatus(true);

  const [cassette1, setCassette1] = useState(false);
  const changeCassette1 = () => setCassette1(true);

  const [cassette2, setCassette2] = useState(false);
  const changeCassette2 = () => setCassette2(true);

  // Modals
  const [referenceNo, setReferenceNo] = useState(false);

  return (
    <div>
      <div className="configLeft identificationContainer ticketCenterSection">
        <div>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
            <h5 className="fontWeight-600 fileConfigHead colorBlack">
              Terminal Master Data
            </h5>

            <div className="d-flex align-items-center">
              <Link to="/">
                <p className="fontSize12 colorPrimaryDefault">Dashboard</p>
              </Link>
              <Link to="/">
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
              </Link>
              <p className="fontSize12 colorPrimaryDefault">Reports</p>
              <Link to="/">
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
              </Link>
              <p className="fontSize12">Terminal Master Data</p>
            </div>
          </div>

          {/* Search Criteria 2 */}
          <div
            className="searchCriteriaBox searchCriteriaBox2"
            id="CriteriaFilters"
          >
            <div className="remitter-Search">
              <div
                className="d-flex align-items-center"
                id="criteriaFiltersHeading"
              >
                {/* Search Field And Buttons */}
                <div className="remitter-SearchField full-width">
                  <div className="form-group has-search hasRemitter-Search full-width">
                    <input
                      type="text"
                      className="form-control inputTextBox"
                      placeholder="Enter Terminal ID"
                    />
                  </div>
                  <div className=" searchFieldsBtns">
                    <button type="button" className="btnPrimary ms-0 ms-sm-2  ">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Record Details */}
          <div>
            {/* Issue Pass Details */}
            <div className="tableBorderBox mb-12 ">
              <div className="configSelectBoxTop configSelectBoxTop2 concRegistrationgrid mb-0 row  row-cols-auto">
                {/* Bank */}
                <div className="clientNameSelect col">
                  <label htmlFor="bank">Bank</label>
                  <input
                    type="text"
                    name="bank"
                    id="bank"
                    placeholder="Enter Bank"
                    className="inputTextBox"
                  />
                </div>
                {/*terminal ID*/}
                <div className="clientNameSelect col">
                  <label htmlFor="terminalId">Enter Terminal ID</label>
                  <input
                    type="text"
                    name="terminalId"
                    id="terminalId"
                    placeholder="Enter Terminal ID"
                    className="inputTextBox"
                  />
                </div>
                {/*Site ID*/}
                <div className="clientNameSelect col">
                  <label htmlFor="siteId">Site ID</label>
                  <input
                    type="text"
                    name="siteId"
                    id="siteId"
                    placeholder="Enter Site ID"
                    className="inputTextBox"
                  />
                </div>
                {/* CIT  */}
                <div className="clientNameSelect col">
                  <label htmlFor="pricemode">CIT</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setCit();
                      changeCit();
                      setSelectedOption();
                    }}
                    options={options}
                    id="pricemode"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {cit && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/*FeederBranch*/}
                <div className="clientNameSelect col">
                  <label htmlFor="FeederBranch">FeederBranch</label>
                  <input
                    type="text"
                    name="FeederBranch"
                    id="FeederBranch"
                    placeholder="Enter Branch"
                    className="inputTextBox"
                  />
                </div>

                {/*City*/}
                <div className="clientNameSelect col">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter City"
                    className="inputTextBox"
                  />
                </div>

                {/*State*/}
                <div className="clientNameSelect col">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter State"
                    className="inputTextBox"
                  />
                </div>

                {/*Site Type*/}
                <div className="clientNameSelect col">
                  <label htmlFor="siteType">Site Type</label>
                  <input
                    type="text"
                    name="siteType"
                    id="siteType"
                    placeholder="Enter Site Type"
                    className="inputTextBox"
                  />
                </div>

                {/*Make*/}
                <div className="clientNameSelect col">
                  <label htmlFor="make">Make</label>
                  <input
                    type="text"
                    name="make"
                    id="make"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* CD status   */}
                <div className="clientNameSelect col">
                  <label htmlFor="entryPlaza">CD status</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setCdStatus();
                      changeCdStatus();
                      setSelectedOption();
                    }}
                    options={options}
                    id="entryPlaza"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {cdStatus && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/*Tech Date*/}
                <div className="clientNameSelect col">
                  <label htmlFor="techDate">Tech Date</label>
                  <input
                    type="text"
                    name="techDate"
                    id="techDate"
                    placeholder="Enter Tech Date"
                    className="inputTextBox"
                  />
                </div>

                {/*Cash Date*/}
                <div className="clientNameSelect col">
                  <label htmlFor="cashDate">Cash Date</label>
                  <input
                    type="text"
                    name="cashDate"
                    id="cashDate"
                    placeholder="Enter Cash Date"
                    className="inputTextBox"
                  />
                </div>

                {/*Insurance*/}
                <div className="clientNameSelect col">
                  <label htmlFor="insurance">Insurance</label>
                  <input
                    type="text"
                    name="insurance"
                    id="insurance"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/*Bank Limit*/}
                <div className="clientNameSelect col">
                  <label htmlFor="bankLimit">Bank Limit</label>
                  <input
                    type="text"
                    name="bankLimit"
                    id="bankLimit"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/*Avg Dispense*/}
                <div className="clientNameSelect col">
                  <label htmlFor="avgDispense">Avg Dispense</label>
                  <input
                    type="text"
                    name="avgDispense"
                    id="avgDispense"
                    placeholder="Enter Avg Dispense"
                    className="inputTextBox"
                  />
                </div>

                {/*Site class*/}
                <div className="clientNameSelect col">
                  <label htmlFor="siteClass">Site class</label>
                  <input
                    type="text"
                    name="siteClass"
                    id="siteClass"
                    placeholder="Enter Site class"
                    className="inputTextBox"
                  />
                </div>

                {/* 0 Cassette1 */}
                <div className="clientNameSelect col">
                  <label htmlFor="Cassette1"> 0 Cassette1 </label>
                  <input
                    type="text"
                    name="Cassette1"
                    id="Cassette1"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* 0 Cassette2 */}
                <div className="clientNameSelect col">
                  <label htmlFor="Cassette2"> 0 Cassette2 </label>
                  <input
                    type="text"
                    name="Cassette2"
                    id="Cassette2"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* 0 Cassette3 */}
                <div className="clientNameSelect col">
                  <label htmlFor="Cassette3"> 0 Cassette3 </label>
                  <input
                    type="text"
                    name="Cassette3"
                    id="Cassette3"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* 0 Cassette4 */}
                <div className="clientNameSelect col">
                  <label htmlFor="Cassette4"> 0 Cassette4 </label>
                  <input
                    type="text"
                    name="Cassette4"
                    id="Cassette4"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* f Cassette1   */}
                <div className="clientNameSelect col">
                  <label htmlFor="exitPlaza">F Cassette1</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setCassette1();
                      changeCassette1();
                      setSelectedOption();
                    }}
                    options={options}
                    id="exitPlaza"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {cassette1 && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/* f Cassette2   */}
                <div className="clientNameSelect col">
                  <label htmlFor="exitPlaza">F Cassette2</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={() => {
                      setCassette2();
                      changeCassette2();
                      setSelectedOption();
                    }}
                    options={options}
                    id="exitPlaza"
                    classNamePrefix="reactSelectBox"
                    placeholder="Select"
                  />
                  {cassette2 && (
                    <p className="text-danger font-size9">
                      Enter a correct input
                    </p>
                  )}
                </div>

                {/* F Cassette3 */}
                <div className="clientNameSelect col">
                  <label htmlFor="FCassette3"> F Cassette3 </label>
                  <input
                    type="text"
                    name="FCassette3"
                    id="FCassette3"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* F Cassette4 */}
                <div className="clientNameSelect col">
                  <label htmlFor="FCassette4"> F Cassette4 </label>
                  <input
                    type="text"
                    name="FCassette4"
                    id="FCassette4"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* Current Balance */}
                <div className="clientNameSelect col">
                  <label htmlFor="currentBal"> Current Balance </label>
                  <input
                    type="text"
                    name="currentBal"
                    id="currentBal"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* Current Balance */}
                <div className="clientNameSelect col">
                  <label htmlFor="currentBalOn"> Current Balance on </label>
                  <input
                    type="text"
                    name="currentBalOn"
                    id="currentBalOn"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* Flag Status */}
                <div className="clientNameSelect col">
                  <label htmlFor="flagStatus"> Flag Status </label>
                  <input
                    type="text"
                    name="flagStatus"
                    id="flagStatus"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* Indent Status */}
                <div className="clientNameSelect col">
                  <label htmlFor="IndentStatus"> Indent Status </label>
                  <input
                    type="text"
                    name="IndentStatus"
                    id="IndentStatus"
                    placeholder="Enter"
                    className="inputTextBox"
                  />
                </div>

                {/* empty field */}
                <div className="emptyfield"></div>

                {/* Address */}
                <div className="clientNameSelect col6 ">
                  <label htmlFor="address"> Address </label>
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Address"
                    className="inputTextAreaBox inputArea"
                  />
                </div>

                {/* Remarks */}
                <div className="clientNameSelect col6 ">
                  <label htmlFor="remarks"> Remarks </label>
                  <textarea
                    type="text"
                    name="remarks"
                    id="remarks"
                    placeholder="Enter"
                    className="inputTextAreaBox inputArea"
                  />
                </div>
              </div>
              <div className="text-center btnsBtm terminalBtns">
                <button type="button" className="btnPrimaryOutline">
                  Clear
                </button>
                <button type="button" className="btnPrimary ms-2">
                  Update
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Save Filters */}
            {referenceNo && (
              <Modal
                show={referenceNo}
                onHide={() => setReferenceNo(!referenceNo)}
                centered
                className="defaultThemeModal saveFiltersModal unmatchedTableModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fontSize16-sm letterSpacing-2">
                    Transaction ID Details
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      EJ Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      SW Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      Network Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SVCB0001</td>
                          <td>01/02/2022, 06:35:00 PM</td>
                          <td>459115XXXXXX5716</td>
                          <td>203218001138</td>
                          <td>6100.00</td>
                          <td>00</td>
                          <td>N</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-100 table-responsive">
                    <p className="fontWeight-600 colorBlack unmatchedModalHeading">
                      GL Details
                    </p>
                    <table className="table table-striped table-hover table-borderless align-middle">
                      <thead>
                        <tr>
                          <th scope="col">
                            Terminal ID
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Date & Time
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Card No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reference No.
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Txn Amount
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Response Code
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                          <th scope="col">
                            Reversal Flag
                            <Link to="/">
                              <span className="icon-Sort-icon"></span>
                            </Link>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="7">
                            <em>No record(s) found...</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalMasterDataWindow;
