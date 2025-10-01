// src/components/CategorySection.js
import React from "react";
import { motion } from "framer-motion";

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
          <motion.div
            className="col-6 col-md-3"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div
              style={{
                backgroundImage: `url(${cat.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "25px",
                height: "280px",
                position: "relative",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                overflow: "hidden",
              }}
            >
              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15))",
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
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
                    padding: "4px 1px",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                  }}
                >
                  {cat.discount}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
