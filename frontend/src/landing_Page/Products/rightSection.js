import React from "react";

function RightSection({ productName, productDescription, imageUrl, tryDemo }) {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5 mt-5">
            <h1 className="text-muted">{productName}</h1>
            <p className="fs-4 mt-4 ">{productDescription}</p>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="col-6 pb-4 ">
            <img src={imageUrl} alt=".." />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
