import React from 'react';
const {string} = React.PropTypes;

import './EmpCard.scss';
const EmpCard = props => {
  return (
    <div className="emp-card d-flex justify-content-center judges col-lg-3 col-md-6 col-sm-12">
      <img className="judge-profile img-responsive" src={props.imgSrc}/>
      <div className="judge-detail">
        <span className="emp-name">
          {props.empName}
        </span>
        <span className="emp-des">
          {props.empDes}
        </span>
      </div>
    </div>
  );
};

EmpCard.propTypes = {
  imgSrc: string.isRequired,
  empName: string.isRequired,
  empDes: string.isRequired
};

EmpCard.defaultProps = {
  imgSrc: '/app/assets/person1.jpg',
  empName: 'Mr.Lorem',
  empDes: 'FE Developer'
};

export default EmpCard;
