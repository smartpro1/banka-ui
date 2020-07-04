import React from "react";

export default function ChangePin() {
  return (
    <div className="signup">
      <div className="signup-logo">
        <h3>
          <a href="/">
            Banka&nbsp;
            <i className="fa fa-university logo-icon" aria-hidden="true"></i>
          </a>
        </h3>
      </div>
      <h2 id="signup-h2" className="fgt-password">
        Change Pin
      </h2>
      <form className="">
        <div className="signup-container">
          <input
            className="signup-input"
            type="password"
            placeholder="enter your valid pin"
            minLength="4"
            maxLength="4"
            required
          />
        </div>

        <div className="signup-container">
          <input
            className="signup-input"
            type="password"
            placeholder="enter new pin"
            minLength="4"
            maxLength="4"
            required
          />
        </div>

        <div className="signup-container">
          <input
            className="signup-input"
            type="password"
            placeholder="confirm new pin"
            minLength="4"
            maxLength="4"
            required
          />
        </div>
        <button type="submit" className="register-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
