import React from 'react';
import './App.css';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/hero/Hero';
import Contact from './pages/Contact';

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Us" element={<Hero />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
