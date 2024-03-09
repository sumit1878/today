import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Signupform from './components/signupform/signupform';
import Loginform from "./components/loginform/loginform";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/signupform" element={<Signupform />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
