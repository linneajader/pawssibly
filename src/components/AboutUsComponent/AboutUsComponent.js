import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import image from "../../pictures/cute-dog-shiba.jpg";

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100rem;
    padding: 10rem;
    margin-bottom: 10rem;
    background-color: #e7e7e7;
    overflow: hidden;
    ${props => props.expand && css`
        height: auto;
    `}
`;
const ShortInfoContainer = styled.div`
    display: flex;
    min-height: 100rem;
`;
const PictureContainer = styled.img`
    height: 100rem;
    object-fit: contain;
`;
const TextContainer = styled.div`
  
`;
const NameText = styled.p`
    align-self: flex-start;
    margin: 0 5rem;
    margin-bottom: 5rem; 
    font-size: 20rem;
`;
const InfoText = styled.p`
    align-self: flex-start;
    font-size: 15rem;
    font-weight: bold;
    margin: 0 5rem;
    margin-bottom: 5rem; 
    ${props => props.marginTop && css`
        margin-top: 10px;
        font-weight: normal;
    `}
`;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }
    onClick = () => {
        const expanded = JSON.parse(JSON.stringify(this.state.expanded));
        this.setState({expanded: !expanded});
    };
    render() {
        const {appState, setAppState} = this.props;
        const us = this.props.us;
        return (
            <ComponentContainer onClick={this.onClick} expand={this.state.expanded}>
                <ShortInfoContainer>
                    <PictureContainer src={us.image} alt="image"/>
                    <TextContainer>
                        <NameText>{us.name}</NameText>
                        <NameText>{us.age}</NameText>
                        <InfoText>Pronomen: {us.gender}</InfoText>
                    </TextContainer>
                </ShortInfoContainer>
                <InfoText marginTop>{us.info}</InfoText>
            </ComponentContainer>
        );
    }
}

export default App;
