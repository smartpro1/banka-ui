import React from "react";

import "./StatusInfo.css";
export default function StatusInfo({ status }) {
  let displayStatusMark = <div className="status-info-success-mark"></div>;
  let statusText = "Success";
  let statusInfoCircleClassName = "status-info-circle";
  let statusTextClass = "status-info-header";

  if (status === "error" || status === "Error") {
    displayStatusMark = <div className="status-info-error-mark"></div>;
    statusText = "Error";
    statusTextClass += " error";
    statusInfoCircleClassName += " error";
  }
  return (
    <div className="status-info">
      <div className={statusInfoCircleClassName}>{displayStatusMark}</div>
      <h4 className={statusTextClass}> {statusText}</h4>
    </div>
  );
}
