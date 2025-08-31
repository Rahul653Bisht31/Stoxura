import React from "react";

function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo2.png" style={{ width: "50%" }} alt="" />
            <p>
              ©2010-2024, Not Stoxura Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a className="footer-link text-muted" href="">About</a>
            <a className="footer-link text-muted" href="">Products</a>
            <a className="footer-link text-muted" href="">Pricing</a>
            <a className="footer-link text-muted" href="">Referal Programme</a>
            <a className="footer-link text-muted" href="">Careers</a>
            <a className="footer-link text-muted" href="">Stoxura.tech</a>
            <a className="footer-link text-muted" href="">Press & media</a>
            <a className="footer-link text-muted" href="">Stoxura cares (CSR)</a>
          </div>
          <div className="col">
            <p>Support</p>
            <a className="footer-link text-muted" href="">Contact</a>
            <a className="footer-link text-muted" href="">Support portal</a>
            <a className="footer-link text-muted" href="">Z-Connect blog</a>
            <a className="footer-link text-muted" href="">List of Charges</a>
            <a className="footer-link text-muted" href="">Downloads & resources</a>
          </div>
          <div className="col">
            <p>Account</p>
            <a className="footer-link text-muted" href="">Open an account</a>
            <a className="footer-link text-muted" href="">Fund transfer</a>
            <a className="footer-link text-muted" href="">60 day challenge</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Stoxura Booking Ltd.: Member of NSE & BSE - SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Stoxura Securities
            Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Stoxura Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@Stoxura.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procudure to file a complaint on SEBI SCORES:Register on SCORES
            portal. Mandatory details for filling complaints on SCORES:
            Name,PAN,Address,Mobile Number,Communication,Speedy redressal of the
            grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the documents carefully brfore investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile.email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registerd intermediary
            (broker, DP, Mutual Funds etc.), you need not undergo the same
            process again when you apporach another intermediary.Please write
            the Bank account Number and sign the IPO application from to
            authorize your bank to make payment in case of allotement. In case
            of non allotement the funds will remain in your bank account. As a
            business we don't give stock tips, and have not authorize anyone to
            trade on behalf of others. If you find anyone claiming to be part of
            Stoxura and offering such services, please create a ticket here."
          </p>
        </div>
        <div className="footer-bottom mb-4">
          <a className="footer-link2 text-muted" href="">NSE</a>
          <a className="footer-link2 text-muted" href="">BSE</a>
          <a className="footer-link2 text-muted" href="">MCX</a>
          <a className="footer-link2 text-muted" href="">Terms & conditions</a>
          <a className="footer-link2 text-muted" href="">Policies & procedures</a>
          <a className="footer-link2 text-muted" href="">Privacy policy</a>
          <a className="footer-link2 text-muted" href="">Disclosure</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
