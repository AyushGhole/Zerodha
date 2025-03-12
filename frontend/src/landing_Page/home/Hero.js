import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container mb-5">
        <div className="row text-center ">
          <img src="images/homeHero.png" alt="Home-image" className="mb-5" />
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stock, derivatives, mutual funds and
            more
          </p>
          <Link to="/signup">
            <button
              className="btn btn-primary p-2  mb-5"
              style={{
                width: "18%",
                margin: "0 auto",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}>
              SignUp Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
