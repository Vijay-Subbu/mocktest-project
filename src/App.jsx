import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginPage/LoginForm';
import RegisterForm from './RegisterPage/RegisterForm';

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>⚡Neet Prep</h1> 
        </main> 
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      </Routes>
      </div>
  </Router>
  );
};

export default App;