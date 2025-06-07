import React from 'react';
import Footer from "./components/Footer/Footer.jsx";
import './App.css';
import Header from './components/Header/Header.jsx';
import Category from './components/Sections/Category.jsx';
import Note from './components/Sections/Note.jsx';
import Product from './components/Sections/Product.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <Note/>
      <Product/>
      <Footer />
    </div>
  );
}

export default App;
