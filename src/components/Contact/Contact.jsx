import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2 className="section-title neon-text">Contact Me</h2>
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+91 7871560486 </p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>ramasubrmaniyan.k12@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;