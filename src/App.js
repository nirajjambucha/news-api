import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Fetch from './component/Fetch';

function App() {
    const [searchNews, setSearchNews] = useState("");

    return (
        <BrowserRouter>
            <Navbar setSearchNews={setSearchNews} searchNews={searchNews} />
            <Routes>
                <Route path='/' element={<Fetch category="general" searchNews={searchNews} />} />
                <Route path='/business' element={<Fetch category="business" searchNews={searchNews} />} />
                <Route path='/entertainment' element={<Fetch category="entertainment" searchNews={searchNews} />} />
                <Route path='/health' element={<Fetch category="health" searchNews={searchNews} />} />
                <Route path='/science' element={<Fetch category="science" searchNews={searchNews} />} />
                <Route path='/sports' element={<Fetch category="sports" searchNews={searchNews} />} />
                <Route path='/technology' element={<Fetch category="technology" searchNews={searchNews} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
