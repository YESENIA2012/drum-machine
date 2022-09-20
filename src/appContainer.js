import React from 'react';
import PianoMoodContainer from './pianoKit';
import instrumentsData from './utils';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentType: true,
      soundVolume: 0.3,
      urlToPlay: '',
    };

    this.handleInstrumentTypeClick = this.handleInstrumentTypeClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.playSound = this.playSound.bind(this);
    this.onChangeVolume = this.onChangeVolume.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInstrumentTypeClick() {
    this.setState({
      instrumentType: !this.state.instrumentType,
    });
  }

  handleButtonClick(index) {
    let elementClicked = null;

    instrumentsData.map(({ id }) => {
      if (index === id) {
        elementClicked = instrumentsData[id];
      }
      return elementClicked;
    });

    const { instrumentType, soundVolume } = this.state;
    this.playSound(instrumentType, elementClicked, soundVolume);
  }

  playSound(instrumentType, elementClicked, soundVolume) {
    const sound = new Audio(
      instrumentType
        ? elementClicked.soundBankUrl
        : elementClicked.soundPainoUrl
    );
    sound.play();
    sound.volume = soundVolume;

    this.setState({
      urlToPlay: elementClicked,
    });
  }

  onChangeVolume(event) {
    this.setState({
      soundVolume: Number(event.target.value),
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, true);
  }

  handleKeyPress(e) {
    const { instrumentType, soundVolume } = this.state;

    let clickedButton = null;

    for (let index = 0; index < instrumentsData.length; index++) {
      if (e.keyCode === instrumentsData[index].keyCode) {
        clickedButton = instrumentsData[index];
        break;
      }
    }

    const sound = new Audio(
      instrumentType ? clickedButton.soundBankUrl : clickedButton.soundPainoUrl
    );
    sound.play();
    sound.volume = soundVolume;

    this.setState({
      urlToPlay: clickedButton,
    });
  }

  render() {
    const { instrumentType, buttonClicked, soundVolume, urlToPlay } =
      this.state;

    return (
      <div className="component-container">
        <PianoMoodContainer
          buttonClicked={buttonClicked}
          instrumentType={instrumentType}
          handleInstrumentTypeClick={this.handleInstrumentTypeClick}
          handleButtonClick={this.handleButtonClick}
          urlToPlay={urlToPlay}
          onChangeVolume={this.onChangeVolume}
          soundVolume={soundVolume}
        />
      </div>
    );
  }
}

export default AppContainer;
