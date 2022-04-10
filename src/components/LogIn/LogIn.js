import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Log In</h2>
        <form>
          <div className="input-groups">
            <label className="d-block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type Your Email"
              required
            />
          </div>
          <div className="input-groups">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Type Your Password"
            />
          </div>
          <input className="form-submit" type="submit" value="Log In" />
        </form>
        <p className="text-center mt-2">
          New to Ema-John?{" "}
          <Link className="text-warning my-2 text-decoration-none" to="/signup">
            {" "}
            Create an account
          </Link>
        </p>

        <div className="or-section">
          <div>
            <hr />
          </div>
          <span className="text-secondary px-4">or</span>
          <div>
            <hr />
          </div>
        </div>
        <button className="form-submit bg-white border mt-5 border-2">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
