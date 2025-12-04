import React from "react";

/**
 * Reusable Card wrapper to centralize styles for rounded border, background and hover
 * props:
 * - className: additional classes to merge
 * - hoverScale: boolean to add subtle scale on hover (default true)
 */
const Card = ({ children, className = "", hoverScale = true, ...rest }) => {
  const base = "border border-gray-200 dark:border-[#324d67] rounded-2xl overflow-hidden bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-sm shadow-sm transition";
  const hover = hoverScale ? "hover:shadow-md hover:scale-[1.01] transform-gpu" : "hover:shadow-md";

  return (
    <div className={[base, hover, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
};

export default Card;
