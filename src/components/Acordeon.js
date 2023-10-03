// Acordion.js
import React, { useState } from 'react';
import './Acordeon.css';

function Acordeon({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="acordeon">
      <div className="acordeon-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div className={`acordeon-content ${isOpen ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Acordeon;

