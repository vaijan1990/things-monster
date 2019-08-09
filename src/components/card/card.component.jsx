import React from 'react';
import './card-styles.css';
export const Card = props => (
  <div className="card-container">
  <img alt="thing" src={`https://robohash.org/'+${props.thing.id}?set=set2`} />
    <h1> {props.thing.name} </h1>
    <h2>
    <p> {props.thing.email} </p>
    </h2>
  </div>
);
