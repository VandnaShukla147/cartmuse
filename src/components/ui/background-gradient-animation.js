// Safe background layer that doesn't affect layout flow
import React from "react";
import "./background-gradient-animation.css";

export function BackgroundGradientAnimation({ children }) {
  return (
    <>
      {/* fixed, animated gradient behind everything */}
      <div id="app-gradient-bg" aria-hidden="true" />

      {/* your normal app layout */}
      <div className="app-shell">
        {children}
      </div>
    </>
  );
}
