export default function Contact() {
    return (
      <section className="contact">
        <h2>Contact</h2>
        <p>Reach me via email, GitHub, or raven if enchanted.</p>
      <form className="contact-form">
  <label>Name</label>
  <input type="text" name="name" required />

  <label>Email</label>
  <input type="email" name="email" required />

  <label>Message</label>
  <textarea name="message" rows="5" required></textarea>

  <button type="submit">Send Message</button>
</form>

     </section>
    );
  }

