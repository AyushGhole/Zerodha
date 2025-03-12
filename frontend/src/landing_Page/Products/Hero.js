import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container text-center mt-5 mb-5 p-5">
        <h1 className="mt-5 fs-1 mb-3">Technology</h1>
        <h3 className="text-muted mt-3">
          Sleep , modern and inituitive trading platforms.
        </h3>
        <p className="mt-3 fs-5 mb-5">
          Check out our{" "}
          <Link to="#" style={{ textDecoration: "none" }}>
            investment offering <i class="fa-solid fa-arrow-right"></i>
          </Link>{" "}
        </p>
      </div>

      <hr className="mt-5 mb-5" />
    </>
  );
}

export default Hero;
