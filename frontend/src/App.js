// App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import './App.css';
import Books from '../src/pages/books';
import Add from './pages/Add';
import '../src/style.css';
import Login from './pages/Login';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/book" /> : <Login />}
          />
          <Route
            path="/add"
            element={isAuthenticated ? <Add /> : <Navigate to="/" />}
          />
          <Route
            path="/book"
            element={isAuthenticated ? <Books /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AuthApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AuthApp;
