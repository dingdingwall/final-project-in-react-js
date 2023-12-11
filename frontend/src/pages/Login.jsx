import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';

const Login = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="card bg-dark text-white p-4" style={{ borderRadius: '1rem' }}>
          <h2 className="fw-bold mb-4 text-center">Login</h2>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" id="typeEmailX" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="typePasswordX" placeholder="Password" />
            </div>
            <button className="btn btn-outline-light btn-lg w-100" type="submit">
              Login
            </button>
          </form>
          <div className="text-center mt-4">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
