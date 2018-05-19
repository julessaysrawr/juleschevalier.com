import React from "react";
import '../styles/main.css'
import '../styles/queries.css'

const Now = props => {
  return (
    <div className="card-content">
      <h3 className="space-below">What I'm doing now</h3>
      <p>Letting go and finding I am happier with less</p>
      <p>Trying to live in the present moment</p>
      <p>Becoming a morning person</p>
      <p>Employed in software engineering</p>
      <p>Experimenting with 75% plant based diet.  Keto-ish.</p>
      <p className="space-above">Updated on: January 27, 2018</p>
    </div>
  );
};

export default Now;