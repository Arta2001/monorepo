// Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Card(props) {
  const navigate = useNavigate();
  const navigateHome = (option, photo) => {
    props.updateStage(2);
    console.log('photo', photo)
    navigate('/display', { state: { option: option, photo: photo } });
  };

  return (
    <div className="card" onClick={() => navigateHome(props.option, props.imageName)}>
      <img src={props.image} width="35" height="40" alt='Card Image' className='card-image' />
      <p className="card-text">{props.text}</p>
    </div>
  );
};

