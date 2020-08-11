import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import {Hello} from './Hello';
import './style.css';

export const orderContext = React.createContext([]);

function App () {
  const [value, setValue] = useState("");
  const [orderList, setOrderList] = useState([]);

  const myChange = (e) => {
    setValue(e.target.value);
  }

  const mySubmit = (e) => {
    e.preventDefault();
    setOrderList(names => [...names, value]);
  }

  return(
    <>
     <h1 className = {"Main"}>WELCOME TO HOTEL TN</h1>
     <p className = {"Main"}>please order foods</p>
    <form className = {"App"} onSubmit = {mySubmit}>
      <input type = "text" value = {value} onChange = {myChange}/>
      <br/>
      <br/>
      <button type = "text">ORDER</button>
    </form>
    <orderContext.Provider value = {orderList}>
      <Hello/>
    </orderContext.Provider>
    </>
  )
}

render(<App />, document.getElementById('root'));
