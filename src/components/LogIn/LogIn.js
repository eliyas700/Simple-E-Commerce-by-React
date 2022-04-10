import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handlePasswordBlur = (event) => setPassword(event.target.value);
  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // if (user) {
  //   navigate("/shop");
  // }
  user && navigate(from, { replace: true });
  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleSignIn}>
          <div className="input-groups">
            <label className="d-block" htmlFor="email">
              Email
            </label>
            <input
              onBlur={handleEmailBlur}
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
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Type Your Password"
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
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
