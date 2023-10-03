import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import menuData from "../data/menuData";
import "../styles/styles.css";

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Restaurante Italiano" />
      <h2>MENU</h2>
      <ul>
        {menuData.map((section, index) => (
          <li key={index}>
            <Link to={`/${section.urlPath}`} className="section-card">
              <div>{section.name}</div>
            </Link>
          </li>
        ))}
      </ul>
      <footer className="home-footer">
        <h2>HORARIOS</h2>
        <p>Lunes a Jueves • 13 PM - 11 PM</p>
        <p>Viernes y Sábado • 13 PM - 13 AM</p>
        <p>Domingo • 13 PM - 10 PM</p>
        <br />
        <div class="instagram-container">
          <h2>SÍGUENOS EN</h2>
          <i class="bi bi-instagram"></i>
        </div>
        <p>@ROMAGUSTO_</p>
      </footer>{" "}
    </div>
  );
}

export default Home;
