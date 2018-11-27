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
    width: 100rem;
    height: 100rem;
    object-fit: cover;
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
const DropdownArrow = styled.p`
    margin-left: auto;
    align-self: center;
`;
const Arrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    vertical-align: middle;
    transform: rotate(-135deg);
    ${props => props.down && css`
        transform: rotate(45deg);
    `}
`;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            down: true
        };
    }
    onClick = () => {
        const expanded = JSON.parse(JSON.stringify(this.state.expanded));
        this.setState({expanded: !expanded, down: !this.state.down});
    };
    render() {
        const {appState, setAppState} = this.props;
        console.log(appState.likedDogs);
        const dog = this.props.dog;
        return (
            <ComponentContainer onClick={this.onClick} expand={this.state.expanded}>
                <ShortInfoContainer>
                    <PictureContainer src={dog.image} alt='image'/>
                    <TextContainer>
                        <NameText>{dog.name}</NameText>
                        <NameText>{dog.age}</NameText>
                        <InfoText>Ras: {dog.breed}</InfoText>
                        <InfoText>Kön: {dog.gender}</InfoText>
                    </TextContainer>
                    <DropdownArrow><Arrow down={this.state.down}/></DropdownArrow>
                </ShortInfoContainer>
                <InfoText>   </InfoText>
                <InfoText>Mankhöjd: {dog.height}</InfoText>
                <InfoText>Vikt: {dog.weight}</InfoText>
                <InfoText>Kan bo med barn: {dog.livekids}</InfoText>
                <InfoText>Kan bo med hund: {dog.livedog}</InfoText>
                <InfoText>Kan bo med katt: {dog.livecat}</InfoText>
                <InfoText marginTop>{dog.info}</InfoText>
            </ComponentContainer>
        );
    }
}

export default App;
