import React from "react";
import "./Contact.css";
import frameImage from "../assets/images/frame-image.webp"; // update path if needed

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-frame-wrapper">
        <img src={frameImage} alt="Deco Frame" className="contact-frame" />

        <div className="contact-form-content">
          <h2>Let’s Connect</h2>
          <form name="contact" method="POST" data-netlify="true" className="contact-form">
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" required />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" autoComplete="off" required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
