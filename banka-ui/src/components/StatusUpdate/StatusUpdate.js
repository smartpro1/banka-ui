import React from "react";
import { Link } from "react-router-dom";
import StatusInfo from "./StatusInfo";

import "./StatusUpdate.css";
export default function StatusUpdate({ description, status }) {
  let statusUpdateLinkClassName = "status-update-link";
  let statusUpdateBtnText = "OK";

  if (status === "error" || status === "Error") {
    statusUpdateLinkClassName += " error";
    statusUpdateBtnText = "Try Again";
  }

  return (
    <div className="status-update">
      <StatusInfo status={status} />
      <p className="status-update-description">{description}</p>
      <Link to="/" className={statusUpdateLinkClassName}>
        {statusUpdateBtnText}
      </Link>
    </div>
  );
}
