import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './RegisterStyle.css'; 

const RegisterForm = () => {
  const [error, setError] = useState('');
  const [isRegistered, setRegistered] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    if (isRegistered) {
      const redirectTimer = setTimeout(() => {
        navigate('/login');
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [isRegistered, navigate]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://84647cba-f971-41da-8bed-a90d774bac9b-00-kozq80yd89n5.sisko.replit.dev/api/register', values);
      const data = response.data;
      if (response.status >= 200 && response.status < 300) {
        setRegistered(true);
      } else {
        setError(data.message || 'Failed to register');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Failed to register');
    }
    setSubmitting(false);
  };

  return (
    <div className="register-wrapper">
    {isRegistered && (
      <div className="alert">Registration successful! Redirecting to login page...</div>
    )}
    <div className="register-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
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
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
    </div>  
  );
};

export default RegisterForm;
