import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import check from "./image/check.svg";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #131313;
  }
  
  ul, li {
    list-style: none;
    color: #d0d0d0;
    font-size: 16px;
  }
  
  label {
    display: flex;
    gap: 8px;
  }

  .checkbox {
    width: 0;
    height: 0;
    position: absolute;
  }

  .checkbox:focus + .custom-checkbox {
    box-shadow: 0 0 4px #88b3b8;
    border: 2px solid #21d1c9;
  } 
  .checkbox:hover + .custom-checkbox {
    box-shadow: 0 0 10px #88b3b8;
    border: 2px solid #21d1c9;
  } 
  

  
  .task {
    color: #d9d9d9;
    padding-top: 2px;
  }
  .custom-checkbox {
    display: inline-block;
    position: relative;
    width: 26px;
    height: 26px;
    background-color: #000000;
    border-radius: 50%;
    border: 2px solid  #88b3b8;
    vertical-align: sub;
  }
  
  .custom-checkbox::before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #2eb52e;
    background-image: url(${check});
    background-repeat: no-repeat;
    position: absolute;
    top: 1%;
    left: 2%;
    transform: scale(0);
    transition: 70ms ease-in;
  }
  
  .checkbox:checked + .custom-checkbox::before { 
    transform: scale(1);
  }
  .checkbox:checked ~ .task {
    text-decoration: line-through;
  }
  `
  export const InputS = styled.input`
      width: 80%;
      min-width: 180px;
      max-width: 385px;
      padding: 5px;
      border-radius: 10px;
      border: 2px solid #35a9b3;
      color:gray;
      font-size: 15px;
      &:hover {
        box-shadow: 0 0 10px #88b3b8;
        border: 2px solid #21d1c9;
      }
      &:focus {
        outline: none;
        color: #d9d9d9;
        border: 2px solid #51e3dc;
      }
  `

export const WrapFilterTask = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 10px;
  margin-right: 10px;
`
export const WrapTask = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 10px 20px;
`
export const WrapButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

export const TitleS = styled.h1`
  color: #539153;
  font-size: 30px;
  text-align: center;
  padding: 10px;
  `

export const TitleTasks = styled.h1`
  color: #437443;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  `

export const Wrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  `

export const WrapInputTask = styled.div`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  gap: 15px;
  margin-bottom: 20px;
`
export const LiS = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`
export const ButtonS = styled.button`
    padding: 6px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #2eb52e;
    font-size: 12px;
    color: #adadad;
    &:disabled {
      cursor: not-allowed;
      color: gray;
      border: 2px solid #808080;
      &:hover {
        box-shadow: none;
        border: 2px solid #808080;
      }
    }
    &:hover {
      border: 2px solid #25e44b;
      box-shadow: 0 0 10px #88b3b8;
    }
    &:active {
      box-shadow: 
      0 0 10px 5px #88b3b8;
      border: 2px solid #2dd906df;
      color: #d9d9d9;
    } 
`
