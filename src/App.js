import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';

function App() {

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
