import React from 'react';
import './Category.css';


const Category = () => {
  return (
    <div className="category-section">
        <div className="cat-head">
            <h1>Categories</h1> 
        </div>
         <div className='categories'>
            <div className="category">
                <img 
                src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_11/m694er4i/element_1307/rwdMode_1/540x540/product-1.webp" 
                alt="" />
            </div>
            <div className="category">
                <img 
                src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_12/m694ermi/element_1307/rwdMode_1/540x540/product-3.webp" 
                alt="" />
            </div>
            <div className="category">
                <img 
                src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_9/m694eql2/element_1307/rwdMode_1/540x540/product-6.webp" 
                alt="" 
                />
            </div>
        </div>
   </div>
  );
};

export default Category;
