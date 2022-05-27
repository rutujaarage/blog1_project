
import React from "react";
import Header from "./Component/Header";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Component/Home";
import { DataContext } from "./Component/Blog_Context";
import Display from "./Component/Display";
import Article from "./Component/Article";
import "./Component/Style.css"
import Footer from "./Component/Footer";
import Logo from "./Component/Logo";

const App = () => {
    return(
        <>
        <DataContext>
        <div>
            <Router>
                <Logo />
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/category/:selected" element={<Display />}>
                        
                    </Route>
                    <Route path="/category/:selected/:selectedID" element={<Article />}/>
                </Routes>
                <Footer />
            </Router>
        </div>
        </DataContext>
        </>
    );
};

export default App;