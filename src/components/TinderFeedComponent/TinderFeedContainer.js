import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import image from "../../pictures/cute-dog-shiba.jpg";

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: fit-content;
    padding: 10px 0;
    background-color: #E5989B;
`
const PictureContainer = styled.img`
    width: 85vw;
    height: 85vw;
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

class App extends Component {
  render() {
    return (
      <ComponentContainer>
          <PictureContainer src={image} alt="image"/>
          <NameTextContainer>
              <NameText>Kurt</NameText>
              <NameText>5år</NameText>
          </NameTextContainer>
          <InfoText>Ras: Shiba Inu</InfoText>
          <InfoText>Kön: Hane</InfoText>
          <InfoText marginTop>Mer info...</InfoText>
      </ComponentContainer>
    );
  }
}

export default App;
