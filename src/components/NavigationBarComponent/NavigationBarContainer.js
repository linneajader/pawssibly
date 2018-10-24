import React, { Component } from 'react';
import styled from 'styled-components';
import image3 from "../../pictures/NavigationBar/paw.png";

import NavigationButtonComponent from './NavigationButtonComponent';

const ComponentContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    height: 80px;
    width: 100%;
`
const BackgroundGIF = styled.img`
    width: 100vw;
`;

class App extends Component {
  onClick = () => {
    window.alert('Hej Linnea!');
  }
  render() {
    return (
      <ComponentContainer>
        <NavigationButtonComponent/>
        <NavigationButtonComponent even/>
        <NavigationButtonComponent center image={image3}/>
        <NavigationButtonComponent even/>
        <NavigationButtonComponent/>
      </ComponentContainer>
    );
  }
}

export default App;
