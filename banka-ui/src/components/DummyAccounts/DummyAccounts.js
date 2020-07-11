import React from "react";

import "./DummyAccounts.css";
export default function DummyAccounts() {
  const copyTextToClipBoard = (event) => {
    const nextSibling = event.target.nextSibling;
    setTimeout(() => {
      nextSibling.style.visibility = "visible";
    });

    setTimeout(() => {
      nextSibling.style.visibility = "hidden";
    }, 3000);

    event.target.nextSibling.style.visibility = "visible";
    const getElementsId = event.target.previousSibling.id;
    const inputElement = document.getElementById(getElementsId);
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  return (
    <div className="dummy-accounts">
      <div className="signup-logo">
        <h3>
          <a href="/dashboard">
            Banka&nbsp;
            <i className="fa fa-university logo-icon" aria-hidden="true"></i>
          </a>
        </h3>
      </div>
      <h3 className="dummy-accounts-h3">Dummy Accounts</h3>
      <p>
        Below are some functional account numbers that you can send money to:
      </p>
      <div className="clipboard-div">
        <input
          type="text"
          value="0123456789"
          className="clip-board-input"
          id="input-text-1"
          readOnly
        />
        <button
          onClick={copyTextToClipBoard}
          className="clipboard-btn"
          id="clipboard-btn-1"
        >
          Copy To Clip Board
        </button>
        <i
          className="fa fa-thumbs-up clipboard-thumbs-up"
          aria-hidden="true"
          id="clipboard-thumbs-up-1"
        ></i>
      </div>

      <div className="clipboard-div">
        <input
          type="text"
          value="1012345999"
          className="clip-board-input"
          id="input-text-2"
          readOnly
        />
        <button onClick={copyTextToClipBoard} className="clipboard-btn">
          Copy To Clip Board
        </button>
        <i
          className="fa fa-thumbs-up clipboard-thumbs-up"
          aria-hidden="true"
          id="clipboard-thumbs-up-2"
        ></i>
      </div>
    </div>
  );
}
