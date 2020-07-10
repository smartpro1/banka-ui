import React, { useState, useEffect } from "react";
import axios from "axios";

import LoadSpinner from "../LoadSpinner/LoadSpinner";
import StatusUpdate from "../StatusUpdate/StatusUpdate";

export const ConfirmRegistration = (props) => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [confirmRegistrationMessage, setConfirmRegistrationMessage] = useState(
  //     ""
  //   );

  //   useEffect(() => {
  //     getMessage();
  //   }, []);

  //   const getMessage = async () => {
  //     console.log(props);
  //     const token = props.location.search.substr(7);
  //     console.log(token);
  //     let message = "";
  //     try {
  //       message = await axios.post(
  //         `/api/v1/users/confirm-registration?token=${token}`
  //       );
  //       console.log(message);
  //       console.log(message.data);

  //       setIsLoading(false);
  //       setConfirmRegistrationMessage(message.data);
  //       // return message;
  //     } catch (err) {
  //       console.log("There was an error: " + err);
  //     }
  //   };

  // displayMessage = "";
  // let displayMessage = <LoadSpinner />;
  // if (isLoading) {
  //   displayMessage = confirmRegistrationMessage;
  // }

  const description =
    "An error occurred, your registration wasn't confirmed, may be the server is down or the link has expired.";
  const status = "error";
  return (
    <div className="confirm-registration">
      <h1 style={{ textAlign: "center" }}>Loading...</h1>
      <StatusUpdate description={description} status={status} />
    </div>
  );
};
