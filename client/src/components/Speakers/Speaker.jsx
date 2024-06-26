import "./Speakers.scss";
import React from 'react';
import prod1 from "../../assets/products/speaker-prod-1.webp"
import prod2 from "../../assets/products/speaker-prod-2.webp"
import prod3 from "../../assets/products/speaker-prod-3.webp"
import prod4 from "../../assets/products/speaker-prod-4.webp"
import prod5 from "../../assets/products/speaker-prod-5.webp"

const Speaker = () => {
  return (
    <>
    <div className="speakers">
      <div className="speakers_container">
        <div className="speakers_container_title">
          <h1>Speakers</h1>
        </div>
        <div className="speakers_container_products">
          <div className="products">
            <div className="pro-img">
              <img src={prod1} alt="" />
            </div>
            <div className="pro_details">
              <h3>Elite 1000 sound bars</h3>
              <h3>750$</h3>
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
              <h3>Audionic Optima Sound bar</h3>
              <h3>600$</h3>
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
              <h3>Mega 40 bluetooth speakers</h3>
              <h3>950$</h3>
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
              <h3>YOYO bluetooth speakers</h3>
              <h3>850$</h3>
            </div>
            <div className="btn">
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="products">
            <div className="pro-imgCategories">
              <img src={prod5} alt="" />
            </div>
            <div className="pro_details">
              <h3>Lava bluetooth speakers</h3>
              <h3>500$</h3>
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

export default Speaker