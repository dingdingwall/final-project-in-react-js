import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const { login } = useAuth(); // Use login function from useAuth
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        setLoginMessage('Login successful!');
        login(); // Call the login function to update authentication status
        navigate('/book');
      } else {
        const error = await response.json();
        console.error('Error signing in:', error.message);
        setLoginMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
      setLoginMessage(`Error: ${error.message}`);
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="card bg-dark text-white p-4" style={{ borderRadius: '1rem' }}>
          <h2 className="fw-bold mb-4 text-center">Login</h2>

          {loginMessage && (
            <div className={`alert ${loginMessage.includes('successful') ? 'alert-success' : 'alert-danger'}`} role="alert">
              {loginMessage}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="typeEmailX"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="typePasswordX"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-outline-light btn-lg w-100" type="submit">
              Login
            </button>
          </form>
          <div className="text-center mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
