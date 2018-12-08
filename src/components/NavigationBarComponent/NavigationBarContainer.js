import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from "../../pictures/NavigationBar/magnifying glass.png";
import image2 from "../../pictures/NavigationBar/image 3.1.png";
import image3 from "../../pictures/NavigationBar/paw.png";
import image4 from "../../pictures/NavigationBar/bubble.png";
import image5 from "../../pictures/NavigationBar/house.png";



import NavigationButtonComponent from './NavigationButtonComponent';

const ComponentContainer = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    height: 60rem;
    width: 100%;
    max-width: 500px;
    z-index: 99999999;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 3
        };
    }
    render() {
        const {appState, setAppState} = this.props;
        return (
            <ComponentContainer>
                <NavigationButtonComponent
                    nr={1}
                    active={appState.activeStage === 1}
                    image={image1} {...{appState, setAppState}}/>
                <NavigationButtonComponent
                    nr={2}
                    active={appState.activeStage === 2}
                    even
                    image={image2} {...{appState, setAppState}}/>
                <NavigationButtonComponent
                    nr={3}
                    active={appState.activeStage === 3}
                    image={image3} {...{appState, setAppState}}/>
                <NavigationButtonComponent
                    nr={4}
                    active={appState.activeStage === 4}
                    even
                    image={image4} {...{appState, setAppState}}/>
                <NavigationButtonComponent
                    nr={5}
                    active={appState.activeStage === 5}
                    image={image5} {...{appState, setAppState}}/>
            </ComponentContainer>
        );
    }
}

export default App;
