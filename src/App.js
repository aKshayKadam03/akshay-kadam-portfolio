import React from 'react'
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
