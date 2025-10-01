// src/components/ProductCard.js
import React from "react";

function ProductCard({ name, price, img, badge }) {
  return (
    <div className="col-6 col-sm-4 col-md-3 mb-4">
      <div className="product-card h-100 position-relative">
        {/* Discount Badge */}
        {badge && <span className="badge-sale">{badge}</span>}

        {/* Product Image */}
        <img
          src={img}
          alt={name}
          className="product-media"
        />

        {/* Content */}
        <div className="card-body text-center">
          <h6 className="fw-bold mb-1">{name}</h6>
          <p className="price mb-2">{price}</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
