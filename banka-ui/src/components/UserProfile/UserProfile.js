import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div className="userProfile">
        <div className="userProfile-img">
          <img src="" alt="profile image" />
        </div>
        <div className="userProfile-details">
          <p>
            <strong>Name:</strong>{" "}
          </p>
          <p>
            <strong>Email:</strong>{" "}
          </p>
          <p>
            <strong>Phone: </strong>
          </p>
        </div>
        <form className="userProfile-form"></form>
      </div>
    );
  }
}

export default UserProfile;
