import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5 ">
            <img src={imageUrl} alt=".." />
          </div>
          <div className="col-6 p-5 ">
            <h1 className="text-muted">{productName}</h1>
            <p className="fs-4">{productDescription}</p>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp;
            <a
              href={learnMore}
              style={{ marginLeft: "1rem;", textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
            <div className="mt-5">
              <a href={googlePlay}>
                <img src="images/googlePlayBadge.svg" alt="googlePlayBadge" />
              </a>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <a href={appStore}>
                <img src="images/appStoreBadge.svg" alt="appStoreBadge" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
