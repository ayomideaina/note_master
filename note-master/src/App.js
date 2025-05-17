import React from 'react';
import Footer from "./components/Footer/Footer.jsx";
import './App.css';
import Header from './components/Header/Header.jsx';
import Category from './components/Category/Category.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <Footer />
    </div>
  );
}

export default App;
