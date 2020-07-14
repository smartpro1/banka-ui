import React, { useState, useEffect } from "react";
import axios from "axios";

import LoadSpinner from "../LoadSpinner/LoadSpinner";
import StatusUpdate from "../StatusUpdate/StatusUpdate";

export const ConfirmRegistration = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("success");
  const [description, setDescription] = useState("registration successful");

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    console.log(props);
    const token = props.location.search.substr(7);
    console.log(token);
    let message = "";
    try {
      message = await axios.post(
        `/api/v1/users/confirm-registration?token=${token}`
      );
      console.log(message);
      console.log(message.data);

      if (message.data !== "registration successful") {
        setStatus("error");
        setDescription(
          "Oops!\n An error occurred, may be the server is down or you took more than 30mins to confirm registration."
        );
      }
      // return message;
    } catch (err) {
      console.log("There was an error: " + err);
    }
  };

  return (
    <div className="confirm-registration">
      <h1 style={{ textAlign: "center" }}>Confirm Registration</h1>
      <StatusUpdate description={description} status={status} />
    </div>
  );
};
