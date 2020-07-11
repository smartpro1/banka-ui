import React, { Component } from "react";

import img1 from "../../assets/images/img1.PNG";
import "./UserProfile.css";
class UserProfile extends Component {
  render() {
    return (
      <div className="userProfile">
        <div className="signup-logo">
          <h3>
            <a href="/dashboard">
              Banka&nbsp;
              <i className="fa fa-university logo-icon" aria-hidden="true"></i>
            </a>
          </h3>
        </div>
        <h3 className="dummy-accounts-h3">Profile Page</h3>
        <div className="userProfile-img">
          <img src={img1} alt="profile image" id="profile-image" />
        </div>
        <div className="userProfile-details">
          <p>
            <strong>Name</strong> : Akeni Promise
          </p>
          <p>
            <strong>Email</strong> : ***ni.prom***@yahoo.com
          </p>
          <p>
            <strong>Phone</strong>: **0629313**
          </p>

          <p>
            <strong>Username</strong>: **ar*
          </p>
        </div>
        <form className="userProfile-form"></form>
      </div>
    );
  }
}

export default UserProfile;
