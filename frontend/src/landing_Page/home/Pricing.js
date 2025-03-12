import React from "react";

function Pricing() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="mb-3">Unbeatable pricing</h1>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <span>
              <a
                href="/"
                className="fs-5  mb-5"
                style={{ textDecoration: "none" }}>
                See Pricing <i class="fa-solid fa-arrow-right"></i>
              </a>
            </span>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className="row text-center ">
              <div className="col-6 p-3 border ">
                <h1 className="mb-3"> ₹0</h1>
                <p className="mt-3">Free Equity and Direct Mutual Funds</p>
              </div>
              <div className="col-6 p-3 border ">
                <h1 className="mb-3"> ₹20</h1>
                <p className="mt-3">Free Equity and Direct Mutual Funds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
