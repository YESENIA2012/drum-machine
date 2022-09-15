import React from 'react';
import PianoMoodContainer from './pianoKit';
import informationInstrument from './utils';
/* import useSound from 'use-sound'; */
/* import mySound from '../assets/sounds/yourSound.mp3'; */

let elementClicked = null;
/* let sound = null;
const [play] = null; */

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentMood: true,
      buttonClicked: ' ',
    };

    this.handleMoodClick = this.handleMoodClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleMoodClick() {
    this.setState({
      instrumentMood: !this.state.instrumentMood,
    });
  }

  handleButtonClick(e) {
    const event = e.target.className.split('-');
    const idClicked = Number(event[1]);

    informationInstrument.map(({ id }) => {
      if (idClicked === id) {
        elementClicked = informationInstrument[id];
      }
      return elementClicked;
    });
    this.setState({
      buttonClicked: elementClicked,
    });
  }

  render() {
    const { instrumentMood, buttonClicked } = this.state;

    /*  let nameSound = '';
    let soundPlay = ''; */

    /* let nameSound = buttonClicked.nameSoundBank;
    let soundPlay = buttonClicked.soundBankUrl; */

    /* if (instrumentMood) {
      nameSound = buttonClicked.nameSoundBank;
      soundPlay = buttonClicked.soundBankUrl;
    } else if (!instrumentMood) {
      nameSound = buttonClicked.nameSoundPiano;
      soundPlay = buttonClicked.soundPainoUrl;
    } */

    return (
      <div className="container-component">
        <PianoMoodContainer
          buttonClicked={buttonClicked}
          instrumentMood={instrumentMood}
          handleMoodClick={this.handleMoodClick}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default AppContainer;
