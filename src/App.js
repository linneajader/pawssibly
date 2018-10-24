import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from './pictures/lots-of-paws.png';

import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarContainer';
import TinderFeedComponent from './components/TinderFeedComponent/TinderFeedContainer';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    padding-top: 20px;
    font-size: 30px;
    background-color: #e7e7e7;
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
      <AppContainer>
        {/*<BackgroundGIF src={backgroundImage} alt="backgroundImage"/>*/}
        <TinderFeedComponent/>
        <NavigationBarComponent/>
      </AppContainer>
    );
  }
}

export default App;
