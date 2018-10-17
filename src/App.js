import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    height: 100vh;
    width: 100vw;
    background-color: black;
    color: white;
    font-size: 30px;
`

const PracticeCentering = styled.div`
    height: 10vh;
    width: 40vw;
    background-color: white;
    color: blue;
    
    padding-top: 20vh;
    padding-left:

`
const Text1 = styled.div`

`


class App extends Component {
  onClick = () => {
    window.alert('Hej Linnea!');
  }
  render() {
    return (
      <AppContainer>
        <Text1>Det är inte lätt när det är svårt... Framför allt inte med Windwos</Text1>
      </AppContainer>
    );
  }
}

export default App;
