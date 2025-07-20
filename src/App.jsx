import React from "react";
import './App.css';
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import images from "../public/assets/Motwor Logo Final - Red BG (1).jpg";


function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo-container">
          <h1 className="logo">PureOils</h1>
          <a href="#home"><img src={images} alt="PureOils Logo" className="logo-image" width="50rem" height="50rem" /></a>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="home"><Home /></section>
        <section id="products"><Products /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contacts /></section>
      </main>

      <footer className="footer">
        &copy; 2025 Motwor PureOils. All rights reserved.
        <a href="#home" className="scroll-to-top" title="Back to top">↑</a>
      </footer>
    </div>
  );
}

export default App;
