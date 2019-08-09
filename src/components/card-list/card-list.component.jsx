import React from 'react';
import './card-list.styles.css';
import {Card} from '../../components/card/card.component';

export const CardList = props => (
  <div  className="card-list">
  {props.things.map(thing => (
    <Card key={thing.id} thing={thing}/>
  ))}
  </div>
);
