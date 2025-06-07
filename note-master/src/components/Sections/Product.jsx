import React from 'react';
import './Note.css';


const Product = () => {
  return (
    <div className="get-product">
      <div className="btn-sec">
        <button className='btn-percent'>-33%</button>
      </div>
      <div className="product-sec">
        <p>Product of the month</p>
        <h2>Weekly Planner Notebook</h2>
        <h4 className="product-price">10.49$ 15.49$</h4>
        <p className="product-p">
          Stay organized and on top of your schedule with our Weekly Planner Notebook. 
          This meticulously designed notebook offers a convenient layout to help you plan your week effectively. 
          With dedicated sections for each day of the week, 
          you can easily jot down appointments, tasks, and reminders, ensuring that nothing falls through the cracks.
        </p>
        <button className="go-to">Go to product</button>
      </div>
      
    </div>
  );
};

export default Product;
