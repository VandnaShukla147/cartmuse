// src/components/Footer.js
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [otp, setOtp] = useState(["","","","","",""]);
  const inputs = useRef([]);

  const onChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;          // allow single digit
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) inputs.current[i+1]?.focus();
  };

  const onKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i>0) {
      inputs.current[i-1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")} (wire up later)`);
  };

  return (
    <footer className="footer pt-5">
      <div className="container pb-4">
        <div className="row g-4">
          <div className="col-md-5">
            <h6 className="mb-3">Sign up with OTP</h6>
            <p className="mb-3">Get exclusive deals and instant checkout with phone OTP.</p>
            <form onSubmit={handleVerify} className="mb-3">
              <div className="mb-3 d-flex gap-2">
                <input className="form-control" placeholder="Your phone number" />
                <button type="button" className="btn btn-light">Send OTP</button>
              </div>
              <div className="otp-box mb-3">
                {otp.map((d, i) => (
                  <input
                    key={i}
                    className="otp-input"
                    inputMode="numeric"
                    maxLength={1}
                    value={d}
                    ref={el => inputs.current[i]=el}
                    onChange={(e)=>onChange(i, e.target.value)}
                    onKeyDown={(e)=>onKeyDown(i, e)}
                  />
                ))}
              </div>
              <button type="submit" className="btn btn-outline-light px-4">Verify & Create Account</button>
            </form>
            <small className="opacity-75">By continuing you agree to our <Link to="/terms">Terms</Link> & <Link to="/privacy">Privacy</Link>.</small>
          </div>

          <div className="col-md-3">
            <h6 className="mb-3">Contact</h6>
            <ul className="list-unstyled">
              <li>📍 221B Green Street, Pune</li>
              <li>☎️ +91-98765-43210</li>
              <li>✉️ support@grocerymart.in</li>
              <li>⏰ 7AM – 11PM, all days</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/offers">Offers</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Support</Link></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="mb-3">We Deliver</h6>
            <ul className="list-unstyled">
              <li>Breads & Dairy</li>
              <li>Fruits & Veggies</li>
              <li>Snacks & Beverages</li>
              <li>Household & More</li>
            </ul>
          </div>
        </div>

        <hr className="border-light border-opacity-25 mt-4" />
        <div className="d-flex justify-content-between align-items-center py-3">
          <p className="mb-0 small">© {new Date().getFullYear()} GroceryMart. All rights reserved.</p>
          <div className="d-flex gap-3 small">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/refund">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
