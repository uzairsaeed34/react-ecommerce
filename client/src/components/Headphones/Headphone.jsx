import "./Headphone.scss";
import React from 'react';
import prod1 from "../../assets/products/headphone-prod-1.webp"
import prod2 from "../../assets/products/headphone-prod-2.webp"
import prod3 from "../../assets/products/headphone-prod-3.webp"
import prod4 from "../../assets/products/headphone-prod-4.webp"
import prod5 from "../../assets/products/headphone-prod-5.webp"
import prod6 from "../../assets/products/headphone-prod-6.webp"

const Headphone = () => {
  return (
    <>
    <div className="headphones">
      <div className="headphones_container">
        <div className="headphones_container_title">
          <h1>Headphones</h1>
        </div>
        <div className="headphones_container_products">
          <div className="products">
            <div className="pro-img">
              <img src={prod1} alt="" />
            </div>
            <div className="pro_details">
              <h3>Logitech Studio 3 Wireless headphone</h3>
              <h3>450$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="products">
            <div className="pro-img">
              <img src={prod6} alt="" />
            </div>
            <div className="pro_details">
              <h3>Logitech Studio 3 Wireless headphone</h3>
              <h3>450$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="products">
            <div className="pro-img">
              <img src={prod2} alt="" />
            </div>
            <div className="pro_details">
              <h3>Logitech Studio 3 Wireless headphone</h3>
              <h3>450$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="products">
            <div className="pro-img">
              <img src={prod3} alt="" />
            </div>
            <div className="pro_details">
              <h3>Logitech Studio 3 Wireless headphone</h3>
              <h3>450$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="products">
            <div className="pro-img">
              <img src={prod4} alt="" />
            </div>
            <div className="pro_details">
              <h3>Logitech Studio 3 Wireless headphone</h3>
              <h3>450$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="products">
            <div className="pro-img">
              <img src={prod5} alt="" />
            </div>
            <div className="pro_details">
              <h3>Logitech Studio 3 Wireless headphone</h3>
              <h3>450$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>            
        </div>
      </div>
    </div>
    </>
  )
}

export default Headphone