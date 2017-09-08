import React from 'react';
import './journies.scss';
import Carousel from '../carousel/Carousel';

const Journies = () => (
    <div className="journies-section jumbotron jumbotron-fluid">
     <div className="container">
      <h1 className="display-3">Previous Hackathon’s Journies</h1>
      <p className="lead">We know you have got talent and we want you to show it! </p>
     </div>
     <Carousel/>
   </div>
  );

export default Journies;