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
    padding: 10rem 0;
    background-color: #e7e7e7;
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

class App extends Component {
  render() {
    return (
      <ComponentContainer>
          <InfoText>Du har inte likeat någon voffsing än. Go swipe!</InfoText>
      </ComponentContainer>
    );
  }
}

export default App;
