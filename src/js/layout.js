// layout.js
import React from "react";
import ScrollToTop from "./component/scrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Nave } from "./views/nave";
import { Personaje } from "./views/personaje";
import { Planeta } from "./views/planeta";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/nave/:uid" element={<Nave />} />
                        <Route path="/personaje/:uid" element={<Personaje />} />
                        <Route path="/planeta/:uid" element={<Planeta />} /> 
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
