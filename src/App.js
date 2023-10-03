import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/home';
import Section from './components/section'; 
import QRCode from 'qrcode.react';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/:urlPath" element={<Section />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




