import React from "react";
import "./Note.css";
import Button from "../Button/Button";

const Product = () => {
  return (
    <div className="get-product">
      <div className="btn-sec">
        <Button variant="percent">-33%</Button>
      </div>
      <div className="product-sec">
        <p>Product of the month</p>
        <h2>Weekly Planner Notebook</h2>
        <h4 className="product-price">
          10.49$
          <span className="crossed-price"> 15.49$</span>
        </h4>
        <p className="product-p">
          Stay organized and on top of your schedule with our Weekly Planner
          Notebook. This meticulously designed notebook offers a convenient
          layout to help you plan your week effectively. With dedicated sections
          for each day of the week, you can easily jot down appointments, tasks,
          and reminders, ensuring that nothing falls through the cracks.
        </p>
        <Button variant="go-to">Go to product</Button>
      </div>
    </div>
  );
};

export default Product;
