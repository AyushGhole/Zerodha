import React from "react";
import { a } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className=" p-5 " id="supportWrapper">
          <h4>Support Portal</h4>
          <a to="#">Track tickets</a>
        </div>

        <div className="row p-5 mb-4 mx-5">
          <div className="col-6  ">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder="Eg. How do I acctivate F&O..." />
            <div>
              <a to="#">Track account opening</a> &nbsp;
              <a to="#">Track segment activation</a>&nbsp;
              <a to="#"> Intraday margins</a>&nbsp;<br></br>
              <a to="#">Kite user manual</a>
            </div>
          </div>
          <div className="col-6 ">
            <h1 className="fs-3">Features</h1>
            {"1.)"}{" "}
            <a to="#">Latest Intraday leverages and Square-off timings</a>
            <br></br>
            <br></br>
            {"2."} <a to="# ">Surveillance measure on scrips - March 2025</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
