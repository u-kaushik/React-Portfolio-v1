import React from "react";
import "./contact.css";
import Separator from "../../common/separator/separator";
import SocialLinks from "../../common/social-links/social-links";
import Email from "./email"

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Let's connect</p>
          <SocialLinks />
        </div>
        <div className="send-email">
        <p className="send-email-title">Send A Message</p>
          <Email />
            <i class="fi-rr-e-mail download-icon" />
                     
        </div>
      </div>
    </div>
  );
}

export default Contact;
