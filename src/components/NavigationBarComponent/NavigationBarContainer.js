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
    max-width: 1000px;
`;

class App extends Component {
    render() {
        const {appState, setAppState} = this.props;
        return (
            <ComponentContainer>
                <NavigationButtonComponent nr={1} image={image1} {...{appState, setAppState}}/>
                <NavigationButtonComponent nr={2} even image={image2} {...{appState, setAppState}}/>
                <NavigationButtonComponent nr={3} center image={image3} {...{appState, setAppState}}/>
                <NavigationButtonComponent nr={4} even image={image4} {...{appState, setAppState}}/>
                <NavigationButtonComponent nr={5} image={image5} {...{appState, setAppState}}/>
            </ComponentContainer>
        );
    }
}

export default App;
