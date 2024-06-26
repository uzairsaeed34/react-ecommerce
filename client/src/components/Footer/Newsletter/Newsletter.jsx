import "./Newsletter.scss";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
    return (
		<div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">SignUp for latest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button onClick={() => alert("You have Subscribed")}>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <a href="https://www.facebook.com/profile.php?id=61554666693970">
                        <FaFacebook size={14} />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.instagram.com/uzair_037/">
                        <FaInstagram size={14}/>
                    </a>
                </div>
                <div className="icon">
									<a href="https://x.com/Rao_Uzair_?s=09">
                    <FaTwitter size={14}/>
									</a>
                </div>
                <div className="icon">
									<a href="https://www.linkedin.com/in/uz%CE%B1%C3%AFr-%C5%A1%CE%B1%CE%B5%CE%B5d/">
                    <FaLinkedinIn size={14}/>
									</a>
                </div>
            </div>
        </div>
    </div>
		)
};

export default Newsletter;
