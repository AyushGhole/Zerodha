import React from "react";

function Stats() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-5 mt-5 ">
            <h1>Trust with confidence</h1>
            <h4 className="fs-3  mt-5">Customer-first always</h4>
            <p style={{ opacity: "0.75" }}>
              That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+
              lakh crore worth of equity investments.
            </p>

            <h4 className="fs-3  mt-5">No spam or gimmicks</h4>
            <p style={{ opacity: "0.75" }}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h4 className="fs-3 mt-5">The Zerodha universe</h4>
            <p style={{ opacity: "0.75" }}>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h4 className="fs-3  mt-5">Do better with money</h4>
            <p style={{ opacity: "0.75" }}>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-6 mt-5 ">
            <img
              src="images/ecosystem.png"
              style={{ width: "95%", height: "100%" }}
            />
            <span>
              <a
                href="/"
                className="fs-5  mb-5"
                style={{ textDecoration: "none" }}>
                Explore our products <i class="fa-solid fa-arrow-right"></i>
              </a>
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>
              <a
                href="/"
                className="fs-5  mb-5"
                style={{ textDecoration: "none" }}>
                Try Kite demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            </span>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center mt-5 mb-5">
          <img src="images/pressLogos.png" />
        </div>
      </div>
    </>
  );
}

export default Stats;
