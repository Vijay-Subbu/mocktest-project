import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './LoginStyle.css'; 

const LoginForm = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://84647cba-f971-41da-8bed-a90d774bac9b-00-kozq80yd89n5.sisko.replit.dev/api/login', values);
      const data = response.data;
      if (response.status >= 200 && response.status < 300) {
        // Successful login, redirect to dashboard
        navigate('/dashboard');
      } else {
        setError(data.message || 'Failed to login');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Failed to login');
    }
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
