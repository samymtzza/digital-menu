import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";
import logo from "../images/logo.png";
import Acordeon from './Acordeon';

function Section() {
  const { urlPath } = useParams();
  const navigate = useNavigate();
  const [selectedDish, setSelectedDish] = useState(null);

  // Buscamos la sección correspondiente en el menúData
  const section = menuData.find((s) => s.urlPath === urlPath);

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const closeModal = () => {
    setSelectedDish(null);
  };

  function scrollToActiveNavItem() {
    const activeNavItem = document.querySelector(".nav-items a.active");
    if (activeNavItem) {
      activeNavItem.scrollIntoView({ inline: "center", behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToActiveNavItem();
  }, [urlPath]);

  if (!section) {
    return <div>Sección no encontrada</div>;
  }

  return (
    <>
      <div className="logo-container">
        <img
          src={logo}
          alt="Restaurante Italiano"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <nav className="section-nav">
        <div className="nav-items">
          {menuData.map((sec, index) => (
            <Link
              key={index}
              to={`/${sec.urlPath}`}
              className={urlPath === sec.urlPath ? "active" : ""}
            >
              {sec.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="section">
    <h1>{section.name}</h1>

    {/* Verificar si existen subsections */}
    {section.subsections && section.subsections.length ? (
        section.subsections.map((subsection) => (
            <React.Fragment key={subsection.name}>
                <Acordeon title={subsection.name}>
                    <ul>
                        {subsection.dishes && subsection.dishes.map((dish, index) => (
                            <li
                                key={index}
                                className="dish-item"
                                onClick={() => handleDishClick(dish)}
                            >
                                <div className="dish-name">{dish.name}</div>
                                <div className="dish-price">{dish.price}</div>
                            </li>
                        ))}
                    </ul>

                    {/* Si estamos en la subsection 'Vinos', renderizamos las vinosections aquí */}
                    {subsection.name === "Vinos" && subsection.vinosections && subsection.vinosections.length > 0 && 
                        subsection.vinosections.map((vinosection) => (
                            <React.Fragment key={vinosection.name}>
                                <Acordeon title={vinosection.name}>
                                    <ul>
                                        {vinosection.dishes && vinosection.dishes.map((dish, index) => (
                                            <li
                                                key={index}
                                                className="dish-item"
                                                onClick={() => handleDishClick(dish)}
                                            >
                                                <div className="dish-name">{dish.name}</div>
                                                <div className="dish-price">{dish.price}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </Acordeon>
                            </React.Fragment>
                        ))
                    }
                </Acordeon>
            </React.Fragment>
        ))
    ) : (
        // Si no hay subsections, renderizar los dishes directamente
        <ul>
            {section.dishes && section.dishes.map((dish, index) => (
                <li
                    key={index}
                    className="dish-item"
                    onClick={() => handleDishClick(dish)}
                >
                    <div className="dish-name">{dish.name}</div>
                    <div className="dish-price">{dish.price}</div>
                </li>
            ))}
        </ul>
    )}

    {/* Modal para mostrar detalles del plato seleccionado */}
    {selectedDish && (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedDish.name}</h2>
                <p>{selectedDish.description}</p>
            </div>
        </div>
    )}
</div>



    </>
  );
}

export default Section;

