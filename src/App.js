import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
    </>
  );
}

export default App;
