import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Password should contain minimum 6 Characters");
    }
    if (password !== confirmPass) {
      setError("Sorry! Password Did'nt match");
    }
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/shop");
    console.log(user);
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
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
              placeholder="Type Your Password"
              required
            />
          </div>
          <div className="input-groups">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassBlur}
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Re-type Your Password"
              required
            />
          </div>

          <p style={{ color: "red" }}>{error}</p>
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
