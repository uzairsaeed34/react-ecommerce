import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Product from "../Products/Products";


const Home = () => {
    return (
    <div className="home">
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category />
                <Product headingText="Popular Products"/>    
            </div>
        </div>
    </div>
    )
};

export default Home;
