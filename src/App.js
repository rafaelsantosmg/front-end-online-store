import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
