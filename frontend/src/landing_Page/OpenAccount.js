import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <>
      <div className="container mb-5">
        <div className="row text-center ">
          <h1 className="mt-5">Open Zerodha OpenAccount</h1>
          <p className="text-muted mt-3 fs-4 ">
            Modern Platform and apps, &#8377;0 investments, and flat &#8377;20
            intraday and F&O trades.
          </p>
          <Link to="/signup">
            <button
              className="btn btn-primary p-2 mt-5 mb-5"
              style={{
                width: "18%",
                margin: "0 auto",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}>
              Sign up Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
