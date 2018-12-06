import React, { Component } from 'react';
import styled, {css} from 'styled-components';

import LikedComponent from './LikedComponent'

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InfoText = styled.p`
    align-self: flex-start;
    margin: 0 15%; 
    margin-bottom: 5px; 
    font-size: 20px;
    font-weight: bold;
    ${props => props.marginTop && css`
        margin-top: 10px;
        font-weight: normal;
    `}
`;
class App extends Component {
    renderLikedDogs = (appState, setAppState) => {
        return(
            this.props.appState.likedDogs.map((dog, idx)=>{
                return <LikedComponent key={idx} dog={this.props.appState.dogDB[dog]} {...{appState, setAppState}}/>
            })
        )
    };
  render() {
      const {appState, setAppState} = this.props;
      const likedDogs = appState.likedDogs.length === 0
          ? <InfoText>Du har inte Lajkat någon fyrbenting än. Go swipe!</InfoText>
          : this.renderLikedDogs(appState, setAppState);
    return (
      <ComponentContainer>
          {likedDogs}
      </ComponentContainer>
    );
  }
}

export default App;
