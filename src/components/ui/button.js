import React from "react";

const Button = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`inline-flex items-center justify-center rounded-md 
                  text-sm font-medium transition-colors 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 
                  disabled:opacity-50 disabled:pointer-events-none 
                  bg-indigo-600 text-white hover:bg-indigo-700 
                  h-10 px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button"; // ✅ now safe

export { Button };
