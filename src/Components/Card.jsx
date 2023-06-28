import React from "react";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ dentist, deleteFav }) => {
  const { favDispatch } = useGlobalStates();

  const handleFavAction = () => {
    if (deleteFav) {
      deleteFav();
    } else {
      favDispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <div className="card">
      <img className="imgdoctor" src="/images/doctor.jpg" alt="imagen del doctor" />
      <h3>{dentist.name}</h3>
      <h4>{dentist.username}</h4>
      <p>{dentist.id}</p>
      <button onClick={handleFavAction} className="favButton">
        {deleteFav ? 'Eliminar Fav ⭐' : 'Agregar Fav ⭐'}
      </button>
    </div>
  );
};

export default Card;