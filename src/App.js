//import styled from 'styled-components';
import React from 'react';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './Components/Header';
import AuthForm from './Components/AuthForm';
import About from './Components/About';

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin: 30px 0 10px;
// width: 100%;
// background-color: lightblue;
// `;

// const Header = styled.span`
// color: black;
// font-size: 25px;
// font-weight: bold;
// `;

const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<AuthForm/>} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
