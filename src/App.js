import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import NavigationBarComponent from './components/NavigationBarComponent/NavigationBarContainer';
import TinderFeedComponent from './components/TinderFeedComponent/TinderFeedContainer';
import LikedComponent from './components/LikedComponent/LikedContainer';
import SearchComponent from './components/SearchComponent/SearchContainer';
import AboutUsComponent from './components/AboutUsComponent/AboutUsContainer';
import ChatComponent from './components/ChatComponent/ChatContainer';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 105rem);
    width: 100%;
    max-width: 500px;
    padding: 15rem 0 90rem;
    background-color: #E5989B;
    overflow-x: hidden;
    ${props => props.center && css`
        background-color: #e7e7e7;
    `}
`;

class App extends Component {
    onClick = () => {
    window.alert('Hej Linnea!');
    };
    render() {
        const {appState, setAppState} = this.props;
        const searchComponent = this.props.appState.activeStage === 1 ? <SearchComponent {...{appState, setAppState}}/> : null;
        const likedComponent = this.props.appState.activeStage === 2 ? <LikedComponent {...{appState, setAppState}}/> : null;
        const tinderFeedComponent = this.props.appState.activeStage === 3 ? <TinderFeedComponent {...{appState, setAppState}}/> : null;
        const chatComponent = this.props.appState.activeStage === 4 ? <ChatComponent {...{appState, setAppState}}/> : null;
        const aboutUsComponent = this.props.appState.activeStage === 5 ? <AboutUsComponent {...{appState, setAppState}}/> : null;
        return (
            <AppContainer id='app-container' center={this.props.appState.activeStage === 3}>
                {searchComponent}
                {likedComponent}
                {tinderFeedComponent}
                {chatComponent}
                {aboutUsComponent}
                <NavigationBarComponent {...{appState, setAppState}}/>
            </AppContainer>
        );
    }
}

export default App;
