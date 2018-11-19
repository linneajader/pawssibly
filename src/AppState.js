import { Component } from 'react';
import image1 from "./pictures/cute-dog-shiba.jpg";
import image2 from "./pictures/Doggos/short-nosed-golden.jpg";
import image3 from "./pictures/Doggos/tired-griffon.jpg";
import image4 from "./pictures/Doggos/sad-labrador.jpg";
import image5 from "./pictures/Doggos/boxer.jpg";

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
                    info: 'Brought to America from Japan as recently as 60 years ago, Shibas are growing in popularity in the West and are already the most popular breed in their homeland. Their white markings combined with their coloring (red, red sesame, or black and tan) and their alert expression and smooth stride makes them almost foxlike. They’re sturdy, muscular dogs with a bold, confident personality to match.'
                },
                {
                    image: image2,
                    name: 'Chippan',
                    age: '3 mån',
                    breed: 'Golden Retriver',
                    gender: 'Hona',
                    info: 'The Golden Retriever is one of the most popular dog breeds in the U.S. The breed’s friendly, tolerant attitude makes him a fabulous family pet, and his intelligence makes him a highly capable working dog. Golden Retrievers excel at retrieving game for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs. They’re also natural athletes, and do well in dog sports such as agility and competitive obedience.'
                },
                {
                    image: image3,
                    name: 'Kent',
                    age: '2 år',
                    breed: 'Griffon',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image4,
                    name: 'Bolle',
                    age: '8 år',
                    breed: 'Labrador',
                    gender: 'Hane',
                    info: 'The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, he earned his keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic. Today’s Labrador Retriever is as good-natured and hard working as his ancestors, and he’s America’s most popular breed. These days the Lab works as a retriever for hunters, assistance dog to the handicapped, show competitor, and search and rescue dog, among other canine jobs.'
                },
                {
                    image: image5,
                    name: 'Angus',
                    age: '3 år',
                    breed: 'Boxer',
                    gender: 'Hona',
                    info: 'Boxers were originally bred to be medium-size guard dogs. Today, although they are a part of the AKC’s Working Group, they mostly find homes as loving family companions. They’ve got the muscular build of the guard dogs they were bred to be, and they can look imposing until you realize that within those sturdy bodies, they’re bursting with playful joie de vivre.'
                }
            ],
            likedDogs: [1, 2, 3, 4]
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