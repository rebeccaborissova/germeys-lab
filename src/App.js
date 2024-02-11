//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import styled from "styled-components";
import ChatBot from 'react-simple-chatbot';

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

/*<br /> Are you a...
          <Button theme="pink"> 
           parent/guardian?
          </Button>
          <Button theme="blue">
            child?
          </Button>*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="bubble speech">
          Welcome to Germey's Lab!
        <header className="ChatBot"><ChatBot
          steps={[
            {
              id: '1',
              message: "Hi! Welcome to Germey's Lab! What is your name?",
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: "Hi {previousValue}, nice to meet you! I heard you're feeling ill, how can I help you?",
              trigger: '4',
            },
            {
              id: '4',
              user: true,
              trigger: '5',
            },
            {
              id: '5',
              message: "I'm very sorry to hear that. Having a bad cough can mean many things, like that you have a cold. Would you like me to explain what a cold is?",
              trigger: '6', 
            }, 
            {
              id: '6', 
              user: true, 
              trigger: '7',
            },
            {
              id: '7',
              message: "When you have a cold, it's like your body's little helpers are taking a nap because some sneaky germs got inside. Your body sends out special soldiers to chase away the germs and make you feel better. Sometimes, you might sneeze or have a runny nose, but that's just your body's way of getting rid of the germs. So rest up, drink water, and soon you'll be back to playing!",
              end: true,
            }
          ]}
        />
        </header>
        </p>
        <img src={process.env.PUBLIC_URL + '/images/germily.png'} style={{ position: 'absolute', bottom: '70px', left: '150px', width: '400px', height: '350px' }} />
      </header>
    </div>
  );
}

export default App;