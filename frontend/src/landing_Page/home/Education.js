import React from "react";

function Eduction() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-6 mt-5 ">
            <img src="images/education.svg" alt="education" />
          </div>

          <div className="col-6">
            <h2 className="mb-5  mt-5">Free and open market education</h2>
            <p className="mb-3 mt-2" style={{ opacity: "0.75" }}>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <span>
              <a
                href="/"
                className="fs-5 mb-5"
                style={{ textDecoration: "none" }}>
                Varsity <i class="fa-solid fa-arrow-right"></i>
              </a>
            </span>

            <p className="mb-3 mt-5" style={{ opacity: "0.75" }}>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <span>
              <a
                href="/"
                className="fs-5  mb-5"
                style={{ textDecoration: "none" }}>
                TradingQ&A <i class="fa-solid fa-arrow-right"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eduction;
