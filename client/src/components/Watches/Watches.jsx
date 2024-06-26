import "./Watches.scss";
import React from 'react';
import prod1 from "../../assets/products/watch-prod-1.webp"
import prod2 from "../../assets/products/watch-prod-2.webp"
import prod3 from "../../assets/products/watch-prod-3.webp"

const Watches = () => {
  return (
    <>
    <div className="watches">
      <div className="watches_container">
        <div className="watches_container_title">
          <h1>Watches</h1>
        </div>
        <div className="watches_container_products">
          <div className="products">
            <div className="pro-img">
              <img src={prod1} alt="" />
            </div>
            <div className="pro_details">
              <h3>Apple Watch series 15</h3>
              <h3>950$</h3>
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
              <h3>Galaxy watch classic</h3>
              <h3>750$</h3>
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
              <h3>Apple watch SE</h3>
              <h3>250$</h3>
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

export default Watches