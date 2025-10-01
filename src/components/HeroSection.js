import React from "react";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <h2 className="fw-bold">Fresh & Healthy</h2>
          <h1 className="display-5 text-white">Fruits & Vegetables</h1>
          <p className="lead">Starting at just ₹199. Organic & fresh daily delivered to your doorstep.</p>
          <button className="btn btn-dark px-4">
            Shop Now
            <span className="ms-2">→</span>
          </button>
        </div>
        <div className="col-lg-5 text-center">
          <img
            src="/images/full-paper-bag-seasonal-vegetable.png"
            alt="Fresh groceries"
            className="img-fluid rounded shadow floating"
          />
        </div>
      </div>

      {/* Side promos with gradient accents */}
      <div className="row mt-5 g-4">
        <div className="col-md-6">
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
        </div>
        <div className="col-md-6">
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
        </div>
      </div>
    </div>
  );
}

export default HeroSection;