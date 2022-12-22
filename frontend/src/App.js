import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Registraion from './components/Registraion';
import Products from './components/Products';
import Container from '@mui/material/Container';
import Login from './components/Login';

function App() {
  return (
      <>
        <Router>
          <Header/>
          <Container>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/registration' element={<Registraion />} />
              <Route path='/products' element={<Products />} />
            </Routes>
          </Container>
        </Router>
      </>
  );
}

export default App;
