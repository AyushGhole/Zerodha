import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <h3 className="mt-5 mb-5 fs-4 text-muted text-center ">
          Want to know more about our technology stack? Check out the
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            Zerodha.tech{" "}
          </a>{" "}
          blog.
        </h3>

        <h1 className="text-muted text-center mt-5 mb-3 ">
          The Zerodha Universe
        </h1>

        <h4 className="text-muted text-center fs-5 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </h4>

        <div className="row mt-5 ">
          <div className="col text-center p-3">
            <img src="images/zerodhaFundHouse.png" height="70px" />
            <p className="mt-2 text-muted " style={{ fontSize: "1rem" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col text-center p-3 ">
            <img src="images/sensibullLogo.svg" height="50px" />
            <p className="mt-4 text-muted " style={{ fontSize: "1rem" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col text-center p-3">
            <img src="images/goldenpiLogo.png" height="70px" />
            <p
              className="mt-4 text-muted text-center"
              style={{ fontSize: "1rem" }}>
              {"    "}Investment research platform that offers detailed insights
              on stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col text-center p-3 ">
            <img src="images/streakLogo.png" height="70px" />
            <p className="mt-2 text-muted " style={{ fontSize: "1rem" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col text-center p-3">
            <img src="images/smallcaseLogo.png" height="70px" />
            <p
              className="mt-3 text-muted text-center "
              style={{ fontSize: "1rem" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col text-center p-3 ">
            {" "}
            <img src="images/dittoLogo.png" height="70px" />
            <p className="mt-2 text-muted " style={{ fontSize: "1rem" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <button
              className="btn btn-primary p-2 mt-5 mb-5"
              style={{
                width: "18%",
                margin: "0 auto",
                fontSize: "1.3rem",
                fontWeight: "700",
              }}>
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Universe;
