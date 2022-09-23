import instrumentsData from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const PianoMoodContainer = (props) => {
  const {
    instrumentType,
    urlToPlay,
    handleInstrumentTypeClick,
    handleButtonClick,
    onChangeVolume,
    soundVolume,
    powerButton,
    buttonOnOrOff,
  } = props;

  function drawMusicalBoard() {
    return instrumentsData.map(({ keyCode, keyTrigger }, index) => {
      return (
        <div
          key={keyCode}
          className="element"
          onClick={(e) => {
            handleButtonClick(index);
          }}
        >
          {keyTrigger}
        </div>
      );
    });
  }

  const item = drawMusicalBoard();

  let stateInstrument = null;
  let title = null;
  let nameSound = null;

  if (!buttonOnOrOff) {
    nameSound = null;
  } else if (instrumentType) {
    title = 'Heater Kit';
    nameSound = urlToPlay.nameSoundBank;
  } else {
    title = 'Smooth Piano Kit';
    nameSound = urlToPlay.nameSoundPiano;
  }

  if (buttonOnOrOff) {
    stateInstrument = 'ON';
  } else {
    stateInstrument = 'OFF';
  }

  return (
    <div className="elements-container">
      <div className="items-container">{item}</div>
      <div className="container-button-and-title">
        <button className="buttonOnOrOff" onClick={powerButton}>
          {stateInstrument}
        </button>
        <div className="icon-container">
          FFC <FontAwesomeIcon icon={faFreeCodeCamp} />{' '}
        </div>
        <div className="mood-title">{title}</div>
        <div className="sound-title">{nameSound}</div>
        <div className="volume-slider">
          <input
            className="slider"
            type="range"
            step="0.01"
            min="0"
            max="1"
            value={soundVolume}
            onChange={onChangeVolume}
          />
        </div>
        <button className="button" onClick={handleInstrumentTypeClick}>
          Change Type
        </button>
      </div>
    </div>
  );
};

export default PianoMoodContainer;
