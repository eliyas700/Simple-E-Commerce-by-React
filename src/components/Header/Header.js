import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const signOutUser = () => {
    signOut(auth);
  };
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button onClick={signOutUser} className="signOutbtn">
            SignOut
          </button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
