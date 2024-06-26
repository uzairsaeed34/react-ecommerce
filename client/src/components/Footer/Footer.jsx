import "./Footer.scss";
import React from 'react';
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Welcome to TechTrove, your one-stop shop for the latest and greatest in technology! Our mission is to provide tech enthusiasts and everyday users with a curated selection of cutting-edge gadgets, reliable electronics, and innovative solutions that enhance your digital lifestyle. From the newest smartphones and laptops to smart home devices and accessories, we strive to offer high-quality products at competitive prices.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">34 K block Shaheer St. Johar Town, Lahore 54000</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +92 303 4827076</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: uzairsaeed34k@gmial.com</div>
                    </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
								<span className="text">Headphones</span>
								<span className="text">Smart Watches</span>
								<span className="text">Bluetooth Speakers</span>
								<span className="text">Wireless Earbuds</span>
								<span className="text">Home Theatre</span>
								<span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
								<span className="text">Home</span>
								<span className="text">About</span>
								<span className="text">Privacy Policy</span>
								<span className="text">Returns</span>
								<span className="text">Terms & Conditions</span>
								<span className="text">Contact Us</span>
            </div>
        </div>
				<div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
						TECHTROVE 2024 CREATED BY UZAIR. PREMIUM E-COMMERCE SOLUTION. 
						</span>
                    <img src={Payment} />
                </div>
            </div>
    </footer>;
};

export default Footer;
