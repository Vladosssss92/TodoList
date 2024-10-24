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

export const WrapFilterTask = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 10px 20px;
  justify-content: center;
`
export const WrapTask = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 10px 20px;
`
export const Wrap = styled.div`
`

export const TitleS = styled.h1`
  color: #539153;
  font-size: 50px;
  text-align: center;
  padding: 10px;
`

export const WrapInputTask = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
`
export const Li = styled.li`
  display: flex;
  gap: 15px;
  padding: 10px;
`