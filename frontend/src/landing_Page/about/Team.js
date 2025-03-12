import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row py-5 border-top">
          <h2 className="mt-5 text-center" style={{ opacity: "0.9" }}>
            People
          </h2>

          <div className="col mt-5 mb-3 text-center ">
            <img
              src="images/nithinKamath.jpg"
              alt=""
              style={{ height: "68%", width: "60%", borderRadius: "50%" }}
            />

            <h1 className="text-muted fs-3 mt-4">Nithin Kamath</h1>

            <p className="text-muted fs-4 ">Founder , CEO</p>
          </div>

          <div
            className="col mt-5 mb-3"
            style={{ fontSize: "1.3rem", opacity: "0.78" }}>
            <p className="mt-5">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="mt-3">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="mt-3">Playing basketball is his zen.</p>
            Connect on
            <Link to="#" style={{ textDecoration: "none" }}>
              {" "}
              Homepage / TradingQnA / Twitter{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
