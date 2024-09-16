import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/routes/HomePage';
import About from '../src/routes/About';
import {PhotographyPage} from '../src/routes/PhotographyPage';
import Navigation from './components/Navigation';
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


