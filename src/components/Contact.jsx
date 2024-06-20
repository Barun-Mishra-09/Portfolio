import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="container contact" id="Contact">
        <h1 className="contact_h1">CONTACT ME</h1>
        <div className="contact_icon">
          <a href="https://gmail.com" className="items">
            <SiGmail className="icons" />
          </a>
          <a href="https://github.com" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="https://instagram.com" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://facebook.com" className="items">
            <FaFacebook className="icons" />
          </a>

          <a href="https://linkedin.com" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://x.com" className="items">
            <FaTwitter className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
