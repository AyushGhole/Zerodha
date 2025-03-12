import React from "react";

function Awards() {
  return (
    <>
      <div className="container mt-5 mb-5 " style={{ gap: "20px" }}>
        <div className="row">
          <div className="col-6 mt-5 mb-5">
            <img src="images/largestBroker.svg" alt="largestBroker" />
          </div>
          <div className="col-6 mt-5">
            <h1 className="mt-3 fs-1 ">Largest stock broker in India.</h1>
            <p className="mb-5">
              2+ millions Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in :
            </p>
            <div className="row mb-2">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Futures and Options</p>{" "}
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPO</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Growth</p>
                  </li>
                </ul>
              </div>
            </div>

            <img
              src="images/pressLogos.png"
              alt="pressLogos"
              style={{ height: "1.3rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Awards;
