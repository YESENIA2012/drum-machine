import React from 'react';
import PianoMoodContainer from './pianoKit';
import InstrumentsData from './utils';

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

    InstrumentsData.map(({ id }) => {
      if (index === id) {
        elementClicked = InstrumentsData[id];
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

    InstrumentsData.forEach(({ keyCode }, index) => {
      if (e.keyCode === keyCode) {
        const sound = new Audio(
          instrumentType
            ? InstrumentsData[index].soundBankUrl
            : InstrumentsData[index].soundPainoUrl
        );
        sound.play();
        sound.volume = soundVolume;
      }
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
