import React from 'react';
import Card from './Card';
import './Row.css'
import facial from '../assets/facial.png';
import led from '../assets/led.png';
import fat1 from '../assets/fat.png';
import gf from '../assets/gf.png';
import harmony from '../assets/harmony.png';
import af from '../assets/af.png';

export default function CardList(props) {
  var data = [
 
    {
      image: facial,
      imageName: 'facial',
      text: 'Anti Wrinkle Treatment',
      option: 'Anti Wrinkle Treatmen'
    },
    {
      image: led,
      imageName: 'led',
      text: 'LED',
      option: 'LED'
    }, {
      image: fat1,
      imageName: 'fat1',
      text: 'Fat Dissolve',
      option: 'Fat Dissolve'
    }, {
      image: gf,
      imageName: 'gf',
      text: 'Growth Factors',
      option: 'Growth Factors'
    },
    {
      image: harmony,
      imageName: 'harmony',
      text: 'HarmonyCA',
      option: 'HarmonyCA'
    },
    {
      image: af,
      imageName: 'af',
      text: 'SecretRF',
      option: 'SecretRF'
    },
  ];
  return (
    
    <div className='forma'>
      <div className="card-list"> <h2>Choose Options</h2>
        {data.map((item, index) => (
          <Card key={index} image={item.image} text={item.text} imageName={item.imageName} option={item.option} stage={props.stage} updateStage={props.updateStage}/>
        ))}
      </div>
    </div>
  );
};

