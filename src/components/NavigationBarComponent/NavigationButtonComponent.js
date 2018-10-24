import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const ComponentContainer = styled.div`
    height: 100%;
    width: 18.75%;
    background-color: #FFCDB2;
    ${props => props.even && css`
        background-color: #FFB4A2;
    `}
    ${props => props.center && css`
        align-self: flex-end;
        width: 25%;
        height: calc(100% + 15px);
    `}
`
const ImageContainer = styled.img`
    padding: 15%;
    width: calc(100% - 30%);
`;

class App extends Component {
  onClick = () => {
    window.alert('Hej Linnea!');
  }
  render() {
    return (
      <ComponentContainer onClick={this.onClick} even={this.props.even} center={this.props.center}>
        <ImageContainer src={this.props.image} alt="image"/>
      </ComponentContainer>
    );
  }
}

export default App;
