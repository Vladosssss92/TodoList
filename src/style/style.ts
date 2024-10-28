import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

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
  }

  input:checked + .task {
    text-decoration: line-through;
  }

  .task {
    padding: 8px;
    color: white;
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
export const InputS = styled.input`
    width: 80%;
    min-width: 180px;
    max-width: 450px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #2eb52e;
    color:gray;
    font-size: 15px;
    &:hover {
      box-shadow: 0 0 10px #88b3b8;
      border: 2px solid #25e44b;
    }
    &:focus {
      outline: none;
      color: #d9d9d9;
      border: 2px solid #33ec45;
    }
`
export const ButtonS = styled.button`
    padding: 8px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #2eb52e;
    font-size: 15px;
    color: #adadad;
    &:disabled {
      cursor: not-allowed;
      color: gray;
      border: 2px solid #808080;
      &:hover {
        box-shadow: none;
        border: 2px solid #808080;
      }
      &:active {
        color: gray;
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
