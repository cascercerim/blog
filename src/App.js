import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
      <Logo />
    </div>
  );
}

export default App;
