import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Let’s Connect</h2>
      <form name="contact" method="POST" data-netlify="true" className="contact-form">
        {/* Netlify hidden input for backend handling */}
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
