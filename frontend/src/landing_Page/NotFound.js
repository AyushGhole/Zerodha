import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="container mb-5">
        <div className="row text-center ">
          <h1 className="mt-5">404 Page Not Found</h1>
          <p className="text-muted mt-3 fs-4 ">
            Sorry the Page Your looking does not exists!!
          </p>
          <Link to="/">
            <button
              className="btn btn-primary p-2 mt-5 mb-5"
              style={{
                width: "18%",
                margin: "0 auto",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
