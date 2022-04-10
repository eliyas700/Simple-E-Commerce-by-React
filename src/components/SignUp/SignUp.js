import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Sign Up</h2>
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
              placeholder="Type Your Password"
              required
            />
          </div>
          <div className="input-groups">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Re-type Your Password"
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <Link className="text-warning my-2 text-decoration-none" to="/login">
            {" "}
            LogIn
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
        <button className="form-submit bg-white border mt-2 border-2">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
