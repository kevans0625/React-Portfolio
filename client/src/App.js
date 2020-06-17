import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Skills from './Pages/Skills/skills';

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar />
       <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
           <Footer />
    </div>
    </Router>
  );
}

export default App;
