import React, { Component } from 'react';
import styled, {css} from 'styled-components';

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
const PictureContainer = styled.img`
    width: calc(100% - 20rem);
    height: 100%;
    object-fit: contain;
`;
const NameTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const NameText = styled.h2`
    align-self: flex-start;
    margin: 5px 10%;
    margin-bottom: 10px; 
    font-size: 20px;
`;
const InfoText = styled.p`
    align-self: flex-start;
    margin: 0 15%; 
    margin-bottom: 5px; 
    font-size: 15px;
    font-weight: bold;
    ${props => props.marginTop && css`
        margin-top: 10px;
        font-weight: normal;
    `}
`;
const LikeButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% + 30rem);
    margin-top: -25rem;
    margin-bottom: 20rem;
`;
const LikeButton = styled.button`
    width: 50rem;
    height: 50rem;
    margin-bottom: -25rem;
    border-radius: 25rem;
    background-color: green;
    font-size: 10rem;
    ${props => props.left && css`
        background-color: red;
    `}
`;

class App extends Component {
    onClick = () => {
        const likedDogs = JSON.parse(JSON.stringify(this.props.appState.likedDogs));
        likedDogs.push(0);
        this.props.setAppState({likedDogs: likedDogs})
    };
  render() {
      const {appState, setAppState} = this.props;
      const dog = appState.dogDB[0];
    return (
      <ComponentContainer>
          <PictureContainer src={dog.image} alt="image"/>
          <LikeButtonContainer>
              <LikeButton left>X</LikeButton>
              <LikeButton onClick={this.onClick}>X</LikeButton>
          </LikeButtonContainer>
          <NameTextContainer>
              <NameText>{dog.name}</NameText>
              <NameText>{dog.age}</NameText>
          </NameTextContainer>
          <InfoText>Ras: {dog.breed}</InfoText>
          <InfoText>Kön: {dog.gender}</InfoText>
          <InfoText marginTop>{dog.info}</InfoText>
      </ComponentContainer>
    );
  }
}

export default App;
