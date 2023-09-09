import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './Row.css';
import facial from '../assets/facial.png';
import led from '../assets/led.png';
import fat1 from '../assets/fat.png';
import gf from '../assets/gf.png';
import harmony from '../assets/harmony.png';
import af from '../assets/af.png';

const ResultPage = (props) => {
  const {state} = useLocation();
  const { option, photo } = state; 

  // let data = route.params;
   const style1 = {marginLeft:34+'%'};
  const style2 = {marginTop: 20+'%'};
 
  console.log('image', photo)
  const handleChange =()=> {
    props.updateStage(1);
  }

  const showImage = (async) =>{
    console.log('photo in showimage', photo)
    if(photo === 'facial'){
      return facial;
    } 
     if( photo === 'af') {
      return af;
    }
     if(photo === 'fat1') {
      return fat1;
    } 
     if(photo === 'gf') {
      return gf;
    } 
     if(photo === 'harmony'){
      return harmony;
    }
    if(photo === 'led'){
      return led;
    }
  }

  return (
    <div className='forma'>
       
      <p style={{paddingTop: 50 + 'px'}}>Selected Option: {option}</p><br></br>
     
      <img 
        src={showImage()}
        width='25%'
        height='25%'
        style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 35 + '%'
        }}
        alt='Image'>

        </img>
         <Link to="/" type="button" style={{...style1,...style2}} class="btn btn-outline-info" onClick={handleChange}>Back to Options</Link>
      </div>
   
  );
}

export default ResultPage;
