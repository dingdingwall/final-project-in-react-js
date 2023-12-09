import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Books from '../src/pages/books'
import Add from "./pages/Add";

import "../src/style.css"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Books/>} />
       <Route path="/add" element={<Add/>} />
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
