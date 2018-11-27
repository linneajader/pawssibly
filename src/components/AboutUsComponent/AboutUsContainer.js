import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import vendla from "../../pictures/AboutUs/vendla.png";
import linnea from "../../pictures/AboutUs/linnea.JPG";
import mattias from "../../pictures/AboutUs/mattias.jpg";

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
    height: 100rem;
    width: 100rem;
    object-fit: cover;
    border-radius: 50rem;
`;
const Header = styled.h2`
    align-self: flex-start;
    margin: 5px 10%;
    margin-bottom: 10px; 
    font-size: 20px;
`;
const NameText = styled.p`
    align-self: flex-start;
    margin: 5rem 10%;
    margin-bottom: 10px; 
    font-size: 15px;
    font-weight: normal;
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
          <Header> Vilka är vi?</Header>
          <ImageContainer src={vendla} alt="vendla"/>
          <NameText> V E N D L A</NameText>
          <InfoText> Ålder: 18 <br/> Pronomen: Hon <br/> Vendla föredrar en innekväll med katten och hunden över en kväll ute. När hon inte är i skolan och studerar vänder hon sig gärna åt det estetiska ämnena. Hon läser bl.a. bild och form på kulturskolan. Vendla är stolt matte till en energisk blandras mellan Yorkshire terrier, Lhasa apso och Tibitansk terrier. </InfoText>
          <ImageContainer src={linnea} alt="linnea"/>
          <NameText> L I N N E A</NameText>
          <InfoText> Ålder: 18 <br/> Pronomen: Hon <br/> Linnea är en glad tjej som ständigt vill se sig själv utvecklas. När hon inte studerar jobbar hon som skridskotränare, spenderar tid med sin hund eller tid på scouterna samt umgås med nära och kära. Linnea är stolt matte till en energisk skogsblandning mellan Jämnthund och Karelisk Björnhund.</InfoText>
          <ImageContainer src={mattias} alt="mattias"/>
          <NameText> M A T T I A S</NameText>
          <InfoText> Roll: Rådgivare <br/> Pronomen: Han <br/> För att få hjälp och lära oss om programmering vände vi oss till vår rådgivare Mattias Norling. Mattias har i två år jobbat som konsulent på företaget HiQ med just programmering och specialicerar sig på just programmering. Det är tack vare honom vi har lyckats lära oss om programmering och fått ihop detta program. Utan hans rådgivning och smarta ideér hade vi inte lyckats nå så långt som vi nått, och vi är extremt tacksamma för all hans hjälp! </InfoText>
      </ComponentContainer>
    );
  }
}

export default App;
