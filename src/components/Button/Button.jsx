import React from "react";
import "./Button.css";

const Button = ({
  variant,
  children,
  className = "",
  type = "button",
  onClick,
  disabled,
  ...props
}) => {
  const classes = ["btn", variant ? `btn--${variant}` : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
