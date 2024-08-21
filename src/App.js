import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
