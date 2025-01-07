import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/Mentions Legales";

import HeaderNav from './components/Header';
import Footer from "./components/Footer";
import './assets/style/style.css';




function App() {
  return (
    <div className="App">
     <HeaderNav/>
     <Routes> 
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/Services" element={<Services />}>Services</Route>
          <Route path="/Portfolio" element={<Portfolio />}>Portfolio</Route>
          <Route path="/Contact" element={<Contact />}>Contact</Route>
          <Route path="/Mentions Legales" element={<MentionsLegales />}>MentionsLegales</Route>
          
      </Routes>
      <Footer/>
      
    
     </div> 
     );
}


export default App