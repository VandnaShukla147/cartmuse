// src/components/CategorySection.js
import React from "react";

function CategorySection() {
  const categories = [
    { name: "Eggs", items: "154 items", discount: "30% OFF", img: "/images/categories/eggs.jpg" },
    { name: "Fruits", items: "320 items", discount: "15% OFF", img: "/images/categories/fruits.webp" },
    { name: "Bakery", items: "65 items", discount: "10% OFF", img: "/images/categories/bakery.jpg" },
    { name: "Vegetables", items: "546 items", discount: "15% OFF", img: "/images/categories/vegetables.webp" },
    { name: "Dairy & Milk", items: "48 items", discount: "10% OFF", img: "/images/categories/dairy.webp" },
    { name: "Snacks & Spices", items: "59 items", discount: "5% OFF", img: "/images/categories/spices.jpg" },
  ];

  return (
    <section className="section-spacing text-center">
      <h2 className="gradient-text mb-3">Shop by Category</h2>
      <p className="text-muted mb-5">Explore our wide range of fresh products</p>

      <div className="row g-4 justify-content-center">
        {categories.map((cat, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
            <div
              style={{
                backgroundImage: `url(${cat.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                height: "240px",
                position: "relative",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="category-box"
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2))",
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <h6 className="fw-bold mb-1">{cat.name}</h6>
                <small className="d-block">{cat.items}</small>
                <span
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                  }}
                >
                  {cat.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
