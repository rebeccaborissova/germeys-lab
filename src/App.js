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
  font: 20px, Verdana;
  //padding: 20px 500px;
  width: 900px;
  height: 80px;
  border-radius: 20px;
  outline: 0;
  border: 0; 
  //text-transform: uppercase;
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
      <div class="thought"> Hi, I'm Germey! Welcome to my lab</div>
        <Button theme="pink">
          Click here if you're a parent/guardian!
        </Button>
        <Button theme="blue">
          Click here if you're a kid!
        </Button>
      </header>
    </div>
  );
}

export default App;
