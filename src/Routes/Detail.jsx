import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dentistState, dentistDispatch, getDentist } = useGlobalStates();

  useEffect(() => {
    getDentist(id);
  }, [id]);

  return (
    <div className="light detail">
      <h1>Detail Dentist {id}</h1>
      <div className="card">
        <img className="imgdoctor" src="/images/doctor.jpg" alt="" />
        <h3>{dentistState.dentistDetail.name}</h3>
        <h4>{dentistState.dentistDetail.email}</h4>
        <p>{dentistState.dentistDetail.phone}</p>
        <p>{dentistState.dentistDetail.website}</p>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
        
      </button>
    </div>
  );
};

export default Detail;