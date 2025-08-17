import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HeroSection from './components/HeroSection';
import SignIn from './pages/SignIn'; // Assuming you saved your SignIn in pages folder
import Register from './pages/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <HeroSection />
            <Home />
          </>
        } />
        
        {/* Sign In Route */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
