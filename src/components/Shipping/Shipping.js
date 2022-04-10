import React, { useState } from "react";

const Shipping = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setAddress] = useState("");
  const [confirmPass, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleShipping = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Procced Shipping</h2>
        <form onSubmit={handleShipping}>
          <div className="input-groups">
            <label className="d-block" htmlFor="name">
              Your Name
            </label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="name"
              placeholder="Type Your Name"
              required
            />
          </div>
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
            <label htmlFor="address">Your Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id="address"
              placeholder="Type Your Address"
              required
            />
          </div>
          <div className="input-groups">
            <label htmlFor="phone">Your Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id="phone"
              placeholder="Type Your Contact Number"
              required
            />
          </div>
          <input className="form-submit" type="submit" value="Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
