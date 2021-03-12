import React from "react";
import img1 from "../../assets/images/img1.PNG";
import img2 from "../../assets/images/img2.PNG";

import "./UserGuide.css";
export default function UserGuide() {
  return (
    <div className="user-guide">
      {
        // add logo
        // add documentation
      }
      <h2>Documentation</h2>
      <div className="user-guide-short">
        <h3>Summary</h3>
        <p className="user-guide-summary">
          TLDR;
          <br />
          There is a detailed description of how to use this app down the page
          but for impatient readers, below is a summary to help you get started
          asap.
        </p>
        <ul>
          <li>Sign up</li>
          <li>Activate your account by clicking the link sent to your email</li>
          <li>
            A four digit transfer pin(this is NOT your password) will be
            generated for you upon signing up, memorize or copy it as you'll
            later use it.
          </li>
          <li>You need to create new pin on the page the link takes you to</li>
          <li>
            If everything goes well, your account will be activated and credited
            with some money so you can test out the functionalities of this app.
            Without changing your pin, your account will not be activated which
            implies you can't make transfers but can still receive money.
          </li>

          <li>
            Now you can send money to some registered accounts called "Dummy
            Accounts"
          </li>
          <li>
            Now login with your credentials, this takes you to your dashboard,
            click on the hamburger menu and click "Dummy Accounts" link on the
            sidedrawer menu, this shows you few registered accounts that you can
            transfer money to, copy any ACCOUNT NUMBER and go back to the
            sidedrawer menu and click "Transfer Funds" link and perform your
            transaction.
            <p>
              <img src={img1} alt="description image" />
              <img src={img2} alt="description image" />
            </p>
          </li>
          <p id="transaction-alerts">Getting alerts</p>
          <li>
            You are supposed to be getting alerts everytime a transaction(you
            send or receive money) occurs on your account, this feature works
            but I'd have to register your number on my Twilio account and you
            need to send me the verification code sent to your number since I am
            using the free trial account. So as not to bug you with so much
            stress of registering, you will not be getting alerts. If you want
            to get alerts kindly let me know so I can register your phone number
            and the customized alerts will show up everytime a transaction
            occurs on your account. The drawback to this is that I have a
            limited amount of money for sms that Twilio gave me, if everybody
            used it, it will be exhausted in no time.
          </li>

          <li>
            If you want to receive money you could tell anyone you know who is
            registered to send you money or shoot me a mail
            akeni.promise@yahoo.com and I could send you money that would make
            you richer than Jeff Bezos lols.
          </li>
        </ul>
      </div>

      <p className="user-guide-bug">
        Should you find any vulnerability/bug please let me know so I can fix it
      </p>

      <div className="user-guide-detailed">
        <h3>Detailed Description</h3>
        <p className="user-guide-detailed-paragraph">
          This banking application is a demo application(needless to say
          though), naturally, when you register for an application like this and
          everything goes well, you are supposed to have (currency symbol
          here)0.00 account balance and you fund the account so that you can
          begin to make it operational.
        </p>

        <p className="user-guide-detailed-paragraph">
          So the first step here is to sign up with your valid credentials,
          please use valid credentials because a mail will be sent to you to
          activate your account after signing up.
        </p>
        <p className="user-guide-detailed-paragraph">
          Since this is a dummy account, we'll give you &#x20A6; 25,000.00 so
          you can test out functionalities of the application and you don't even
          need to thank us for this!
        </p>
        <p className="user-guide-detailed-paragraph">
          One question that might probably be going through your mind is,
          "Alright I understand, I now have the money in my account so who do I
          transfer to?".
        </p>
        <p className="user-guide-detailed-paragraph">
          Alright, we got you covered on that, we have created some functional
          accounts that can receive money. So on your dashboard, click on the
          hamburger menu(the three horizontal white lines) this shows the
          sidedrawer, navigate to the "Dummy Accounts" and copy any account
          number of your choice.
        </p>
        <p className="user-guide-detailed-paragraph">
          Go back to the dashboard and click the hamburger menu again and
          navigate to "Transfer Funds" link, click it and everything is user
          friendly from there.
        </p>
        <p className="user-guide-detailed-paragraph">
          In case you want to be getting alerts on transactions click{" "}
          <a href="#transaction-alerts">here</a>.
        </p>
      </div>
    </div>
  );
}
