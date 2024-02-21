import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginPage/LoginForm';
import RegisterForm from './RegisterPage/RegisterForm';
import Dashboard from './DashboardPage/Dashboard';
import MocktestDetails from './MockTest/MocktestDetails';
import TestPage from './TestPage/TestPage';
import TestInstructionPage from './TestPage/TestInstructionPage';
import Home from './Homepage/Home';
import Profile from './ProfileCard/Profile';
import Security from './ProfileCard/Security';

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>⚡ Neet Prep ⚡ </h1> 
          <h4>One stop solution for all your NEET preparations</h4>
        </main> 
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mocktests" element={<Dashboard />} />
        {/* <Route path="/mock-test/:id" element={<MocktestDetails />} /> */}
        <Route path="/testpage" element={<TestPage />} />
        <Route path="/testinstructionpage" element={<TestInstructionPage />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/home/profile/security" element={<Security />} />
      </Routes>
      </div>
  </Router>
  );
};

export default App;