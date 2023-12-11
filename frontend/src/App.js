import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Books from '../src/pages/books'
import Add from "./pages/Add";

import "../src/style.css"
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/add" element={<Add/>} />
       <Route path="/book" element={<Books/>} />
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
