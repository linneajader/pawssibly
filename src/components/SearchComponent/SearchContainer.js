import React, { Component } from 'react';
import styled, {css} from 'styled-components';

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
  render() {
    return (
      <ComponentContainer>
          <InfoText>Just nu är hemsidan bara utvecklad som en prototyp och har därför ingen sökfunktion ännu.</InfoText>
      </ComponentContainer>
    );
  }
}

export default App;
