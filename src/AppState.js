import { Component } from 'react';
import image1 from "./pictures/cute-dog-shiba.jpg";
import image2 from "./pictures/short-nosed-golden.jpg";

class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStage: 3,
            dogDB: [
                {
                    image: image1,
                    name: 'Kurt',
                    age: '5 år',
                    breed: 'Shiba Inu',
                    gender: 'Hane',
                    info: 'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...' +
                        'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...' +
                        'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...' +
                        'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...' +
                        'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...' +
                        'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...' +
                        'Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...Mer info...'
                },
                {
                    image: image2,
                    name: 'Chippan',
                    age: '3 mån',
                    breed: 'Golden Retriver',
                    gender: 'Hona',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                }
            ],
            likedDogs: [1]
        };
    }

    setAppState = (updater) => {
        this.setState(updater);
    };

    render() {
        return this.props.children({
            appState: this.state,
            setAppState: this.setAppState,
            nextProp: this.props.nextProps
        });
    }
}

export default AppState;