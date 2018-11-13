import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import vendla from "../../pictures/placeholder.png";

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
const ImageContainer = styled.img`
    padding: 15%;
    width: calc(100% - 30%);
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
const NameTextV = styled.p`
    align-self: flex-end;
    margin: 5px 10%;
    margin-bottom: 10px; 
    font-size: 15px;
    font-weight: light;
`;
const VInfoText = styled.p`
    align-self: flex-end;
    margin: 5px 10%;
    margin-bottom: 10px; 
    font-size: 12px;
    font-weight: light;
`;
const NameTextL = styled.p`
    align-self: flex-start;
    margin: 5px 10%;
    margin-bottom: 10px; 
    font-size: 15px;
    font-weight: light;
`;
const LInfoText = styled.p`
    align-self: flex-start;
    margin: 5px 10%;
    margin-bottom: 10px; 
    font-size: 12px;
    font-weight: light;
`;
const InfoText = styled.p`
    align-self: flex-end;
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
          <NameText> Vilka är vi?</NameText>
          <ImageContainer src={this.props.image} alt="vendla"/>
          <NameTextV> V E N D L A</NameTextV>
          <VInfoText> Jag heter Vendla och sitter på min lektion och programerar</VInfoText>
          <NameTextL> L I N N E A</NameTextL>
          <LInfoText> Linnea sitter i labbet och jobbar med UF</LInfoText>
      </ComponentContainer>
    );
  }
}

export default App;