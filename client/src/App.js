import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Home/>
    </>
  );
}

export default App;
