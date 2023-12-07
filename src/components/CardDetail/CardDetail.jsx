import React, {useEffect, useState} from 'react';
import './styles.css';

const CardDetail = ({ show, setShow, cardData, children }) => {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  useEffect(() => {
    setIsPromptOpen(show);
  }, [show])
  window.detail = { show, isPromptOpen }

  const onClose = (e) => {
    e.stopPropagation();
    setShow(false);
    setIsPromptOpen(false);
  };
  const { name, location, origin, species, image, gender, status } = cardData
  return (
    <>
      {
        show && isPromptOpen
        ? (
          <div className="prompt-window">
            <div className="prompt-content">
                <div>
                  <img src={image} alt="Character" className="characterImage"/>
                </div>
                <div>
                  <h2> {name} </h2>
                  <ul>
                    <li>Especie: <strong> {species}</strong> </li>
                    <li>Género: <strong> {gender} </strong> </li>
                    <li>Ubicación: <strong> {location.name}</strong>  </li>
                    <li>Origen: <strong>{origin.name}</strong> </li>
                    <li>Estado: <strong>{status}</strong> </li>
                  </ul>
                </div>
              <span className="close-btn" onClick={onClose}>
                &times;
              </span>
              {children}
            </div>
          </div>
        ) : null
      }
    </>)
};

export default CardDetail;
