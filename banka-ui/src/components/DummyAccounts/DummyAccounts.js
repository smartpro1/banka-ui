import React, { useState, useEffect } from "react";
import axios from "axios";

// import LoadSpinner from "../LoadSpinner/LoadSpinner";
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

  const [accounts, setAccounts] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDummyAccounts();
    let dummyAccounts = "";
    async function getDummyAccounts() {
      dummyAccounts = await axios.get(`/api/v1/users/get-dummy-accounts`);
      setAccounts(dummyAccounts.data);
    }
  }, []);

  let isLoader = "";
  let val1 = "no dummy account found";
  let val2 = val1;

  // if (isLoading) {
  //   isLoader = <LoadSpinner />;
  // }

  if (accounts.length > 0) {
    val1 = accounts[0].accountNumber;
    val2 = accounts[1].accountNumber;
  }
  // console.log(accounts[0].accountNumber);
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
          value={val1}
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
          value={val2}
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
      {isLoader}
    </div>
  );
}
