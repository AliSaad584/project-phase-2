import React from "react";
function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="col-lg-6 login-left">
          <h1>Diner King</h1>
          <h2>Grilling is the New Trend</h2>
          <p>
            Sign in and discover our latest burgers,
            steaks, offers, and exclusive rewards.
          </p>
        </div>
        <div className="col-lg-6 login-right">
          <h1>Welcome Back</h1>
          <form>
            <input
              type="email"
              placeholder="Email Address"
            />
            <input
              type="password"
              placeholder="Password"
            />
            <button type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;