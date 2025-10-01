// src/pages/Cart.js
import React from "react";

function Cart() {
  // For now, dummy items (later you can hook to state or backend)
  const cartItems = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 199,
      qty: 2,
      image: "/images/apples.jpg",
    },
    {
      id: 2,
      name: "Organic Spinach",
      price: 99,
      qty: 1,
      image: "/images/spinach.jpg",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="cart-page container py-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="lead">Your cart is empty.</p>
      ) : (
        <div className="row">
          {/* Left: Cart items */}
          <div className="col-lg-8">
            <div className="list-group shadow-sm">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="list-group-item d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div>
                      <h5 className="mb-1">{item.name}</h5>
                      <p className="mb-0 text-muted">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-semibold">Qty: {item.qty}</span>
                    <span className="fw-bold">₹{item.price * item.qty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-4">
              <h5 className="fw-bold mb-3">Order Summary</h5>
              <p className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Delivery</span>
                <span>₹40</span>
              </p>
              <hr />
              <p className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{subtotal + 40}</span>
              </p>
              <button className="btn btn-success w-100 mt-3 rounded-pill">
                Checkout →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
