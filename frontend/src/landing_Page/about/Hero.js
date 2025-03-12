import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row py-5 ">
          <h2 className="mt-5 mb-5  text-center" style={{ opacity: "0.9" }}>
            <h2> We pioneered the discount broking model in India.</h2>
            Now, we are breaking ground with our technology.
          </h2>

          <hr className="mt-5 mb-5" />

          <div className="col mt-5 mb-5 fs-5">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="mt-5">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p className="mt-5">
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col mt-5 mb-5 " style={{ fontSize: "1.2rem" }}>
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="mt-3">
              <span>
                <Link to="#" style={{ textDecoration: "none" }}>
                  Rainmatter
                </Link>
              </span>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p className="mt-3">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <Link to="#" style={{ textDecoration: "none" }}>
                blog{" "}
              </Link>
              or see what the media is{" "}
              <Link to="#" style={{ textDecoration: "none" }}>
                saying about us{" "}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
