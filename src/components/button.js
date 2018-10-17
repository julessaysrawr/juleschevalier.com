import React from 'react';
import '../styles/main.css';
import '../styles/queries.css';

const Button = props => {

  return(
    <div className="button">{props.title}</div>
  )
};

export default Button;