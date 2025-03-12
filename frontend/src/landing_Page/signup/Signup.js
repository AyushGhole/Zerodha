import * as React from "react";

function SignUp() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const sendData = async () => {
    try {
      const response = await fetch("https://zerodha-i94e.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed!");
      }

      const data = await response.json();
      console.log("Signup successful:", data);

      // ✅ Redirect to another React app
      window.location.href = "https://zerodha-dashboard-x7sl.onrender.com"; // URL of second React app
    } catch (error) {
      console.error("Network Error:", error.message);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center fs-1 text-muted mt-5 mb-3">
          Open a free demat and trading account online
        </h1>
        <p className="text-center text-muted fs-5 mb-5 ">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>

        <div className="row mt-5">
          <div className="col p-3 mt-5 mb-5 ">
            <img src="images/signup.png" alt="Sign Up" />
          </div>
          <div className="col p-3 mt-5 mb-5 ">
            <h1 className="text-muted">SignUp now </h1>
            <p className="text-muted fs-5 mt-3 mb-4 ">
              Or track your existing application
            </p>
            <h5 className="mt-4 text-muted">
              <label htmlFor="username">Enter Your Name:</label>
            </h5>
            <div className="input-group input-group-lg">
              <input
                type="text"
                id="username"
                className="form-control"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <h5 className="mt-4 text-muted">
              <label htmlFor="password">SetUp Password:</label>
            </h5>
            <div className="input-group input-group-lg">
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary mt-4 p-2 fs-5"
              onClick={sendData}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
