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
    height: 239rem;
    object-fit: cover;
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
const LikeTextContainer = styled.div`
    position: absolute;
    top: 40rem;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 70rem);
`;
const LikeText = styled.p`
    font-size: 20rem;
    color: red;
    padding: 5rem;
    border: 3rem solid red;
    border-radius: 6rem;
    transform: rotate(15deg);
    opacity: 0;
    ${props => props.like && css`
        transform: rotate(-15deg);
        color: #16ec16;
        border: 3rem solid #16ec16;
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
    padding: 13rem;
    border-radius: 25rem;
    background-color: #16ec16;
    font-size: 10rem;
    cursor: pointer;
    z-index: 10;
    ${props => props.left && css`
        background-color: red;
        padding: 15rem;
    `}
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogNr: 0
        };
    }
    onLike = () => {
        const likedDogs = JSON.parse(JSON.stringify(this.props.appState.likedDogs));
        likedDogs.push(this.props.appState.dogNr);
        this.props.setAppState({likedDogs: likedDogs, dogNr: this.props.appState.dogNr + 1});
    };
    onDislike = () => {
        this.props.setAppState({dogNr: this.props.appState.dogNr + 1});
    };

    swipeStart = (e) => {
        this.swipeX = e.changedTouches[0].clientX;
        this.swipeY = e.changedTouches[0].clientY;
    };
    swipeMove = (e) => {
        //If diagonal swipe the longest swipe is primary:
        this.swipeEndX = e.changedTouches[0].clientX;
        this.swipeEndY = e.changedTouches[0].clientY;

        if(Math.abs(this.swipeX - this.swipeEndX)
            > Math.abs(this.swipeY - this.swipeEndY))
        {
            this.swipeY = false;
        }

        // //Swipe down:
        // if(this.swipeY
        //     && (document.getElementById('50').scrollTop === 0)
        //     && (this.swipeY + 15) < e.changedTouches[0].clientY
        //     && !this.scroll)
        // {
        //     if(toggleCalendar){
        //         this.toggleCalendar();
        //     }
        // }
        //Swipe right:
        if(!this.swipeY && (this.swipeX) < e.changedTouches[0].clientX){
            document.getElementById('tinder-container').style.right = this.swipeX - this.swipeEndX + 'px';
            document.getElementById('tinder-container').style.transform = 'rotate(' + (this.swipeX - this.swipeEndX) / 15 + 'deg)';
            document.getElementById('like').style.opacity = Math.abs((this.swipeX - this.swipeEndX) / 200);

        }
        if(!this.swipeY && (this.swipeX) > e.changedTouches[0].clientX){
            document.getElementById('tinder-container').style.right = this.swipeX - this.swipeEndX + 'px';
            document.getElementById('tinder-container').style.transform = 'rotate(' + (this.swipeX - this.swipeEndX) / 15 + 'deg)';
            document.getElementById('nope').style.opacity = Math.abs((this.swipeX - this.swipeEndX) / 200);
        }
        document.getElementById('like-button-container').style.opacity = 1 - Math.abs((this.swipeX - this.swipeEndX) / 100);
    };
    swipeEnd = () => {
        if((this.swipeEndX - this.swipeX) >= (this.viewportWidth/2)){
            this.onLike();
            this.swipeEndX = 0;
            this.swipeEndY = 0;
        }
        if((this.swipeX - this.swipeEndX) >= (this.viewportWidth/2)){
            this.onDislike();
            this.swipeEndX = 0;
            this.swipeEndY = 0;
        }
        document.getElementById('tinder-container').style.right = '0px';
        document.getElementById('tinder-container').style.transform = 'rotate(0deg)';
        if(document.getElementById('like')){
            document.getElementById('like').style.opacity = 0;
            document.getElementById('nope').style.opacity = 0;
            document.getElementById('like-button-container').style.opacity = 1;
        }
    };
    componentDidMount(){
        document.getElementById('tinder-container').style.position = 'relative';

        this.viewportWidth = document.getElementById('app-container').getBoundingClientRect().width;

        document.getElementById('tinder-component').addEventListener('touchstart', this.swipeStart, false);
        document.getElementById('tinder-component').addEventListener('touchmove', this.swipeMove, false);
        document.getElementById('tinder-component').addEventListener('touchend', this.swipeEnd, false);
    }
  render() {
      const {appState} = this.props;
      const dog = appState.dogDB[this.props.appState.dogNr];
    return (
      <ComponentContainer id="tinder-component">
          <PictureContainer src={dog.image} alt="image"/>
          <LikeTextContainer>
              <LikeText id='like' like>Like</LikeText>
              <LikeText id='nope'>Nope</LikeText>
          </LikeTextContainer>
          <LikeButtonContainer id='like-button-container'>
              <LikeButton onClick={this.onDislike} left>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 460.775 460.775">
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                </svg>
              </LikeButton>
              <LikeButton onClick={this.onLike}>
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 78.369 78.369">
                      <g>
                          <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
                                c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
                                C78.477,17.894,78.477,18.586,78.049,19.015z"/>
                      </g>
                  </svg>
              </LikeButton>
          </LikeButtonContainer>
          <NameTextContainer>
              <NameText>{dog.name}</NameText>
              <NameText>{dog.age}</NameText>
          </NameTextContainer>
          <InfoText>Ras: {dog.breed}</InfoText>
          <InfoText>Kön: {dog.gender}</InfoText>
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
