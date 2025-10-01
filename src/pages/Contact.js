// src/pages/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section className="contact-page full-bleed">
      <div className="contact-card">
        <div className="row g-4 align-items-center">
          {/* Left: form */}
          <div className="col-lg-6">
            <p className="contact-eyebrow mb-1">Contact Us</p>
            <h2 className="contact-title mb-4">We’d love to hear from you</h2>

            <form>
              <div className="mb-3">
                <label className="form-label contact-label">Name</label>
                <input className="form-control input-soft" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label contact-label">Company</label>
                <input className="form-control input-soft" placeholder="Your company name" />
              </div>
              <div className="mb-3">
                <label className="form-label contact-label">Email address</label>
                <input type="email" className="form-control input-soft" placeholder="your@email.com" />
              </div>
              <div className="mb-4">
                <label className="form-label contact-label">Message</label>
                <textarea rows="4" className="form-control input-soft" placeholder="Tell us a little about your request…" />
              </div>

              <button className="btn btn-primary-alt px-4">Contact</button>
            </form>
          </div>

          {/* Right: illustration */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="contact-illustration">
              <img src="/images/contact.png" alt="Contact illustration placeholder" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
