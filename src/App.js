//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 400px;
  height: 60px;
  border-radius: 20px;
  outline: 0;
  border: 0; 
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="bubble speech">
          Hi, I'm Germey! Welcome to my lab!
          <br /> Are you a...
          <Button theme="pink"> 
           parent/guardian?
          </Button>
          <Button theme="blue">
            child?
          </Button>
        </p>
        <img src={process.env.PUBLIC_URL + '/images/germily.png'} style={{ position: 'absolute', bottom: '70px', left: '150px', width: '400px', height: '350px' }} />
      </header>
    </div>
  );
}

export default App;
