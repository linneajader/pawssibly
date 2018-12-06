import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const ComponentContainer = styled.div`
    height: 100%;
    width: 20%;
    background-color: #FFCDB2;
    overflow: hidden;
    cursor: pointer;
    ${props => props.even && css`
        background-color: #FFB4A2;
    `}
    ${props => props.active && css`
        transform: scale(1.2);
        transition: all ease-in-out .1s;
    `}
`;
const ImageContainer = styled.img`
    padding: 15%;
    width: calc(100% - 30%);
`;

class App extends Component {
    onClick = () => {
        this.props.setAppState({activeStage: this.props.nr});
    };
    render() {
        return (
            <ComponentContainer
                onClick={this.onClick}
                even={this.props.even}
                active={this.props.active}
            >
                <ImageContainer src={this.props.image} alt="image"/>
            </ComponentContainer>
        );
    }
}

export default App;
