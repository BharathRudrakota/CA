import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharteredAccountants from './pages/CharteredAccountants';
import AccountantDetails from './pages/AccountantDetails';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Accountants" element={<CharteredAccountants />} />
        <Route path="/accountant/:id" element={<AccountantDetails />} />
      </Routes>
    </div>
  );
};

export default App;