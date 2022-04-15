import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';
import './style.css';


export default function App()
{
    return (
        <>
        <Nav />
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    );
}
ReactDOM.render(<App />, document.getElementById('root'))