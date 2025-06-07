import React from 'react';
import './Category.css';


const Category = () => {
  return (
    <div className="category-section">
        <div className="cat-head">
            <h2>Categories</h2> 
        </div>
         <div className='categories'>
            <div className="category">
                <div className="div-wrapper">    
                    <img 
                    src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_11/m694er4i/element_1307/rwdMode_1/540x540/product-1.webp" 
                    alt="" />
                </div>
                <div className="image-text">
                    <p>Memoir Collection</p>
                </div>
            </div>
            <div className="category">
                <div className="div-wrapper">
                    <img 
                    src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_9/m694eql2/element_1307/rwdMode_1/540x540/product-6.webp" 
                    alt="" 
                    />
                </div>
                <div className="image-text">
                    <p>Masterpiece Collection</p>
                </div>
            </div>
            <div className="category">
                <div className="div-wrapper">
                    <img 
                    src="https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_12/m694ermi/element_1307/rwdMode_1/540x540/product-3.webp" 
                    alt="" />
                </div>
                <div className="image-text">
                    <p>Inspire Collection</p>
                </div>
            </div>
        </div>
        <div className="cat-head">
            <h2>Best Sellers</h2> 
        </div>
        <button className='btn-nr'>NR 1</button>
   </div>
  );
};

export default Category;
