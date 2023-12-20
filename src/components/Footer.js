import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styling/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Contact us</h2>
      <div className="icons">
        <a href="https://www.linkedin.com/company/slash-eg/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="iconsElements" />
        </a>
      </div>
      <hr></hr>
    </div>
  );
}

export default Footer;
