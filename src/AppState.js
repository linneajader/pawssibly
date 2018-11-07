import { Component } from 'react';

class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStage: 3
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