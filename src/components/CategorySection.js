import React from "react";

const categories = [
  { name: "Eggs", items: "154", icon: "🥚", discount: null },
  { name: "Fruits", items: "320", icon: "🍎", discount: "30%" },
  { name: "Bakery", items: "65", icon: "🥖", discount: null },
  { name: "Vegetables", items: "548", icon: "🥦", discount: "15%" },
  { name: "Dairy & Milk", items: "48", icon: "🥛", discount: "10%" },
  { name: "Snacks & Spice", items: "59", icon: "🍪", discount: null },
];

function CategorySection() {
  return (
    <div className="row g-4 mt-5">
      {categories.map((cat, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-2">
          <div className="card text-center shadow-sm border-0 category-card h-100 position-relative">
            <div className="card-body">
              <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
              <h6 className="mt-2 fw-bold">{cat.name}</h6>
              <p className="text-muted small mb-0">{cat.items} items</p>
              {cat.discount && (
                <span className="badge bg-success position-absolute top-0 end-0 m-2">
                  {cat.discount}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
