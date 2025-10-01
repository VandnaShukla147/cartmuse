// src/pages/Contact.js
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact-page full-bleed">
      <div className="contact-card">
        <div className="row g-4 align-items-center">
          {/* Left: form */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="contact-eyebrow mb-1">Contact Us</p>
            <h2 className="contact-title mb-4">We’d love to hear from you</h2>

            <form>
              <motion.div
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="form-label contact-label">Name</label>
                <input
                  className="form-control input-soft"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="form-label contact-label">Company</label>
                <input
                  className="form-control input-soft"
                  placeholder="Your company name"
                />
              </motion.div>

              <motion.div
                className="mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label className="form-label contact-label">Email address</label>
                <input
                  type="email"
                  className="form-control input-soft"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className="form-label contact-label">Message</label>
                <textarea
                  rows="4"
                  className="form-control input-soft"
                  placeholder="Tell us a little about your request…"
                />
              </motion.div>

              <motion.button
                className="btn btn-primary-alt px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </form>
          </motion.div>

          {/* Right: illustration */}
          <motion.div
            className="col-lg-6 d-flex justify-content-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-illustration">
              <img
                src="/images/contact.png"
                alt="Contact illustration placeholder"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
