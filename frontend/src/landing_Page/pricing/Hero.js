import React from "react";

function Hero() {
  return (
    <>
      <div className="container text-center mt-5 p-5">
        <h1 className="mt-5 fs-1 mb-3">Pricing</h1>
        <h4 className="text-muted mt-3 mb-5">List of all charges and taxes</h4>
      </div>

      <div className="row mt-5 mb-5 text-center">
        <div className="col p-5">
          <img src="images/pricingEquity.svg" height="50%" />
          <h3 className="text-muted mt-3 mb-4">Free equity delivery</h3>
          <p className="text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="images/intradayTrades.svg" height="50%" />
          <h3 className="text-muted mt-3 mb-4">Intraday and F&O trades</h3>
          <p className="text-muted text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="images/pricingEquity.svg" height="50%" />
          <h3 className="text-muted mt-3 mb-4">Free direct MF</h3>
          <p className="text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
