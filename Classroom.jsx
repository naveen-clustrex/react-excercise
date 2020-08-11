import React, { useState, useContext } from 'react';
import {orderContext} from './index';

export const Classroom = () => {
  
  const foods = useContext(orderContext);
  
  return(
      <ul>
      {
        foods.map(e => <li key = {e}>{e}</li>)
      }
      </ul>
  )
}

