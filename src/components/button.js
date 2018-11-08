import React from 'react';
import '../styles/main.scss';

const Button = props => {

  return(
    <div className="button">{props.title}</div>
  )
};

export default Button;