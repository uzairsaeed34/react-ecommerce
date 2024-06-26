import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Headphone from "./components/Headphones/Headphone";
import Speaker from "./components/Speakers/Speaker";
import Watches from "./components/Watches/Watches";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/"element ={<Home />}/>
                    <Route path="/category/:id"element ={<Category />}/>
                    <Route path="/product/:id"element ={<SingleProduct />}/>
                    <Route path="/headphones" element={<Headphone/>}/>
                    <Route path="/Speakers" element={<Speaker/>}/>
                    <Route path="/watches" element={<Watches/>}/>
                </Routes>
                <Newsletter/>
                <Footer />
            </AppContext>
        </BrowserRouter>
    )
}

export default App;
