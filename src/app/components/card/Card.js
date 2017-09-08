import React from 'react';
import './card.scss';

const Card = (props) => (
    <div className="card-container">
      <div className="card-image">
       <img src="http://placekitten.com/g/400/200" width="100px"/>
      </div>
      <div className="card-title">
        Lorem ipsum dolor
      </div>
      <div className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quam consectetur quibusdam magni minus aut modi aliquid.
      </div>

        
    </div>
  );

export default Card;
