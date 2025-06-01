import React from "react";
import "./Contact.css";
import decoFrame from "../assets/images/frame-image.webp"; // Ensure this path is correct!

function Contact() {
  return (
   <section className="contact-section">
  <div className="contact-frame-wrapper">
    {/* Frame as background */}
    <img src={decoFrame} alt="Deco Frame" className="contact-frame" />

    {/* This div sits on top of the frame */}
    <div className="contact-form-overlay">
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
