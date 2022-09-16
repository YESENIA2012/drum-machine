import React from 'react';
import PianoMoodContainer from './pianoKit';
import informationInstrument from './utils';

let elementClicked = null;
let sound = null;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentMood: true,
      buttonClicked: ' ',
    };

    this.handleMoodClick = this.handleMoodClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.playSound = this.playSound.bind(this);
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
    this.playSound(this.state.instrumentMood, this.state.buttonClicked);
  }

  playSound(instrumentMood, buttonClicked) {
    if (instrumentMood) {
      sound = new Audio(buttonClicked.soundBankUrl);
      sound.play();
    } else {
      sound = new Audio(buttonClicked.soundPainoUrl);
      sound.play();
    }
  }

  render() {
    const { instrumentMood, buttonClicked } = this.state;

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
