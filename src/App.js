import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maru from './Maru';

 export default class App extends React.Component{
  render(){
    return (
      <div className="App">
          <h1>Martand Dhamdhere (Adarsh){1+1}</h1>
          <Maru/>
      </div>
    );
  }
}

