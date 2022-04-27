import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <Link to="/">
              <p>41-eatery</p>
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/products"> Products </Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
          <div className="details">
            <ul>
              <li>
                <a href="/#">Tel : +234-812-345-6789</a>
              </li>
              <li>
                <a href="/#">Email : support@41-Eatery.com</a>
              </li>
              <li>
                <a href="/#">Instagram : @41-Eatery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          All Rights Reserved ©️ 2022 | Capstone Project By{" "}
          <Link to="/">Group 41</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
