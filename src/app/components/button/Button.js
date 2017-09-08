import React from 'react';
import './button.scss'; 
const {string} = React.PropTypes;

const Button = props => {
    let button = ''; 
    let classNames = '';
    // add the css classes based on the properties passed from parent component
    classNames = `btn ${props.classNames}`;
    button = (<button className={classNames}>
                {props.value}
            </button>);
    return(
      <div className="btn-container d-inline-block">
        {button}
      </div>
    );
};

Button.propTypes = {
  value: string.isRequired,
  className: string // additional provision to add another class
};

export default Button;
