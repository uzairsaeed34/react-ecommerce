import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import prod2 from "../../../assets/products/earbuds-prod-2.webp"
import prod3 from "../../../assets/products/earbuds-prod-3.webp"
import prod4 from "../../../assets/products/earbuds-prod-4.webp"
import prod5 from "../../../assets/products/earbuds-prod-5.webp"
import prod6 from "../../../assets/products/headphone-prod-1.webp"
import prod7 from "../../../assets/products/headphone-prod-2.webp"
import prod8 from "../../../assets/products/headphone-prod-3.webp"
const Product = () => {
    return (
        <>
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Ear Buds </span>
                <span className="price"> 50$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod2} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Custom Ear Buds</span>
                <span className="price"> 70$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod3} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Boat Ear Buds </span>
                <span className="price"> 30$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod4} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Xiaomi Ear Buds </span>
                <span className="price"> 30$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod5} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Boat 2 </span>
                <span className="price"> 35$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod6} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Logitech pro gaming Headphones</span>
                <span className="price"> 250$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod7} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">RedDragon Gaming Headphones</span>
                <span className="price"> 400$</span>
            </div>
        </div>
				<div className="product-card">
            <div className="thumbnail">
                <img src={prod8} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">RedDragon X pro Gaming headphones</span>
                <span className="price"> 550$</span>
            </div>
        </div>
        </>
    )
};

export default Product;
