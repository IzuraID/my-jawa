import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini nantinya kamu bisa menambahkan logika pengiriman email,
    // misalnya menggunakan layanan seperti EmailJS atau Formspree.
    alert('Form dikirim! Namun fitur pengiriman email belum dikonfigurasi.');
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>
            <div>
              <h3 className="content__title">Call Me</h3>
              <span className="contact__subtitle">+62 8xx-xxxx-xxxx</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>
            <div>
              <h3 className="content__title">Email</h3>
              <span className="contact__subtitle">randidwinur@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>
            <div>
              <h3 className="content__title">Location</h3>
              <span className="contact__subtitle">Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <form className="contact__form grid" onSubmit={handleSubmit}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">Name</label>
              <input type="text" id="name" name="name" className="contact__input" required />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">Email</label>
              <input type="email" id="email" name="email" className="contact__input" required />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="project" className="contact__label">Subject</label>
            <input type="text" id="project" name="subject" className="contact__input" required />
          </div>
          <div className="contact__content">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea name="message" id="message" cols="0" rows="7" className="contact__input" required></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex" style={{ border: 'none', cursor: 'pointer' }}>
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;