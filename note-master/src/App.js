import React from 'react';
import Footer from "./components/Footer/Footer.jsx";
import './App.css';
import Header from './components/Header/Header.jsx';
import Category from './components/Sections/category.jsx';
import Note from './components/Sections/Note.jsx';
import Product from './components/Sections/Product.jsx';
import Review from './components/Sections/reviews.jsx';
import Subscribe from './components/Sections/subscribe.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <Note/>
      <Product/>
      <Review/>
      <Subscribe/>
      <Footer />
    </div>
  );
}

export default App;
