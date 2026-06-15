import React from "react";
import "./AppCard.css";

const AppCard = ({
  title,
  image,
  children,
  rating = 0,
  className = "",
  ...props
}) => {
  return (
    <div
      className={["app-card", className].filter(Boolean).join(" ")}
      {...props}
    >
      {rating > 0 && (
        <div className="app-card-rating">
          {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fa fa-star" aria-hidden="true" />
          ))}
        </div>
      )}
      <div className="app-card-body">{children}</div>
      <div className="app-card-footer">
        {image && <img src={image} alt={title} className="app-card-image" />}
        {title && <h3 className="app-card-title">{title}</h3>}
      </div>
    </div>
  );
};

export default AppCard;
