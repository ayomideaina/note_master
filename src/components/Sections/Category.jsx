import React from "react";
import "./Category.css";
import Button from "../Button/Button";

const Category = () => {
  return (
    <div className="category-section">
      <div className="cat-head">
        <h2>Categories</h2>
      </div>
      <div className="categories">
        {[
          {
            title: "Memoir Collection",
            img: "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_11/m694er4i/element_1307/rwdMode_1/540x540/product-1.webp",
          },
          {
            title: "Masterpiece Collection",
            img: "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_9/m694eql2/element_1307/rwdMode_1/540x540/product-6.webp",
          },
          {
            title: "Inspire Collection",
            img: "https://m0r5p0.yourbrand.studio/files/dynamicContent/sites/m0r5p0/images/en/productpage_12/m694ermi/element_1307/rwdMode_1/540x540/product-3.webp",
          },
        ].map((c) => (
          <div className="category" key={c.title}>
            <div className="div-wrapper">
              <img src={c.img} alt={c.title} />
            </div>
            <div className="image-text">
              <p>{c.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cat-head">
        <h2>Best Sellers</h2>
      </div>
      <Button variant="nr">NR 1</Button>
    </div>
  );
};

export default Category;
