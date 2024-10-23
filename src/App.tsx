import React from 'react';
import InputTask from './components/inputTask';
import FilterTask from './components/filterTasks';
import Tasks from './components/tasks';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #131313;
  }

  ul, li {
    list-style: none;
    color: #d0d0d0;
    font-size: 27px;
  }

  button {
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
    border: 2px solid #2eb52e;
    font-size: 20px;
    color: #adadad;
    &:hover {
    border: 2px solid #718b39df;
    box-shadow: 0 0 10px #88b3b8;
    }
    &:active {
    box-shadow: 
    0 0 10px 5px #88b3b8;
    border: 2px solid #2dd906df;
    color: #d9d9d9;
    }
  }

  input {
    padding: 5px;
    border-radius: 4px;
    border: 2px solid #2eb52e;
    color:gray;
    height: 40px;
    font-size: 24px;
    &:hover {
      box-shadow: 0 0 10px #88b3b8;
      border: 2px solid #718b39df;;
    }
    &:focus {
      outline: none;
      color: #d9d9d9;
      border: 2px solid #2dd906df;
      border-radius: 4px;
      box-shadow: 0 0 14px 5px #88b3b8;
    }
    
  }
  p {
      color: white;
    }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <InputTask />
    </>
  );
}

export default App;
