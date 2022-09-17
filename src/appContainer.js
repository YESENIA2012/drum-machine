import React from 'react';
import PianoMoodContainer from './pianoKit';
import informationInstrument from './utils';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentType: true,
      volumeSlider: 0.3,
      urlToPlay: '',
    };

    this.handleInstrumentTypeClick = this.handleInstrumentTypeClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.volume = this.volume.bind(this);
  }

  handleInstrumentTypeClick() {
    this.setState({
      instrumentType: !this.state.instrumentType,
    });
  }

  handleButtonClick(index) {
    let elementClicked = null;

    informationInstrument.map(({ id }) => {
      if (index === id) {
        elementClicked = informationInstrument[id];
      }
      return elementClicked;
    });

    const { instrumentType, volumeSlider } = this.state;
    this.playSound(instrumentType, elementClicked, volumeSlider);
  }

  playSound(instrumentType, elementClicked, volumeSlider) {
    let sound = null;

    if (instrumentType) {
      sound = new Audio(elementClicked.soundBankUrl);
      sound.play();
      sound.volume = volumeSlider;
    } else {
      sound = new Audio(elementClicked.soundPainoUrl);
      sound.play();
      sound.volume = volumeSlider;
    }

    this.setState({
      urlToPlay: elementClicked,
    });
  }

  volume(event) {
    this.setState({
      volumeSlider: Number(event.target.value),
    });
  }

  render() {
    const { instrumentType, buttonClicked, volumeSlider, urlToPlay } =
      this.state;

    return (
      <div className="container-component">
        <PianoMoodContainer
          buttonClicked={buttonClicked}
          instrumentType={instrumentType}
          handleInstrumentTypeClick={this.handleInstrumentTypeClick}
          handleButtonClick={this.handleButtonClick}
          urlToPlay={urlToPlay}
          volume={this.volume}
          volumeSlider={volumeSlider}
        />
      </div>
    );
  }
}

export default AppContainer;
