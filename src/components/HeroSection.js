import React from "react";
import { motion } from "framer-motion";
import farmersMarket from "../assets/images/farmers_market.jpg"; // ✅ import image

function HeroSection() {
  return (
    <div className="hero-section position-relative">
      {/* Background overlay with imported image */}
      <div
        className="hero-bg-overlay"
        style={{ backgroundImage: `url(${farmersMarket})` }}
      ></div>

      <div className="row g-4 align-items-center position-relative z-2">
        {/* Left Text Section */}
        <motion.div
          className="col-lg-7"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Fresh & Healthy</h2>
          <h1 className="display-5 text-white">Fruits & Vegetables</h1>
          <p className="lead">
            Starting at just ₹199. Organic & fresh daily delivered to your
            doorstep.
          </p>
          <button className="btn btn-dark px-4">
            Shop Now <span className="ms-2">→</span>
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="col-lg-5 text-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/full-paper-bag-seasonal-vegetable.png"
            alt="Fresh groceries"
            className="img-fluid rounded shadow floating"
          />
        </motion.div>
      </div>

      {/* Side promos */}
      <div className="row mt-5 g-4 position-relative z-2">
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="promo-card h-100">
            <div className="d-flex align-items-center gap-3">
              <span style={{ fontSize: "3rem" }}>🍎</span>
              <div>
                <h5 className="mb-1">Fresh Fruits</h5>
                <p className="text-muted mb-0">Up to 30% off on select items</p>
              </div>
            </div>
            <button className="btn btn-outline-dark btn-sm mt-3">
              Shop Now →
            </button>
          </div>
        </motion.div>

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="promo-card h-100">
            <div className="d-flex align-items-center gap-3">
              <span style={{ fontSize: "3rem" }}>🥦</span>
              <div>
                <h5 className="mb-1">Organic Vegetables</h5>
                <p className="text-muted mb-0">Farm fresh, pesticide-free produce</p>
              </div>
            </div>
            <button className="btn btn-outline-dark btn-sm mt-3">
              Shop Now →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
