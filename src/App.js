import React from 'react';
import { BrowserRouter, Routes , Route } from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';
import SearchPage from './pages/SearchPage';




function App () {
  return (
    // <SearchPage />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
