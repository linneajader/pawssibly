import React, { Component } from 'react';
import styled from 'styled-components';

import TinderFeedComponent from './TinderFeedComponent'

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: fit-content;
    padding: 10rem 0;
    background-color: #E5989B;
`;
const NoMoreDogs = styled.div`
    font-size: 35rem;
`;

class App extends Component {
  render() {
      const {appState, setAppState} = this.props;
      const child = appState.dogDB[this.props.appState.dogNr]
          ? <TinderFeedComponent {...{appState, setAppState}}/>
          : <NoMoreDogs> För tilfället finns det inga fler annonser :(</NoMoreDogs>;
    return (
      <ComponentContainer id="tinder-container">
          {child}
      </ComponentContainer>
    );
  }
}

export default App;
