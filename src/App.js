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

        <div class = "meny">
          <div class = "tinder">
            <div class = "doggo">
            </div>
            <p>( ͡° ͜ʖ ͡° )</p>
         </div>
            
            <br/>
            <div>
         <ul class="menybar">
           <li class="ruta">1</li>
           <li class="ruta2">2</li>
           <li class="ruta3">3</li>
           <li class="ruta2">4</li>
           <li class="ruta">5</li>
         </ul>
         </div>

         </div>
      </AppContainer>
    );
  }
}

export default App;
