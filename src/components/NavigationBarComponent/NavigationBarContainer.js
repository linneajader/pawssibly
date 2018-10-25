import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from "../../pictures/NavigationBar/magnifying glass.png";
import image2 from "../../pictures/NavigationBar/image 3.1.png";
import image3 from "../../pictures/NavigationBar/paw.png";
import image4 from "../../pictures/NavigationBar/bubble.png";
import image5 from "../../pictures/NavigationBar/house.png";



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
        <NavigationButtonComponent image={image1}/>
        <NavigationButtonComponent even image={image2}/>
        <NavigationButtonComponent center image={image3}/>
        <NavigationButtonComponent even image={image4}/>
        <NavigationButtonComponent image={image5}/>
      </ComponentContainer>
    );
  }
}

export default App;
