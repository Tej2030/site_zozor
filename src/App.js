import React, { useContext } from "react";
import './App.css';
import Header from './components/Header';
import Acceuil from './pages/accueil/pages/Accueil';
import Blog from './pages/blog/page/Blog';
import Contact from './pages/contact/page/Contact';
import Cv from './pages/cv/page/Cv';
import { ThemeContext } from "./Theme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/accueil" element={<Acceuil />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
