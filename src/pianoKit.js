import informationInstrument from './utils';

let title = '';
let nameSound = '';

const PianoMoodContainer = (props) => {
  const { instrumentMood, buttonClicked, handleMoodClick, handleButtonClick } =
    props;

  function paintMusicalKeyboard(informationInstrument, instrumentMood) {
    const items = informationInstrument.map(
      ({ keyCode, keyTrigger, soundBankUrl, soundPainoUrl }, index) => {
        if (instrumentMood) {
          return (
            <div
              key={keyCode}
              className={`key-${index}`}
              onClick={handleButtonClick}
            >
              {keyTrigger}
              <audio controls src={soundBankUrl} autoPlay></audio>
            </div>
          );
        } else {
          return (
            <div
              key={keyCode}
              className={`key-${index}`}
              onClick={handleButtonClick}
            >
              {keyTrigger}
              <audio controls src={soundPainoUrl} autoPlay></audio>
            </div>
          );
        }
      }
    );
    return items;
  }

  var items = paintMusicalKeyboard(informationInstrument, instrumentMood);

  if (instrumentMood) {
    title = 'Heater Kit';
    nameSound = buttonClicked.nameSoundBank;
  } else {
    title = 'Smooth Piano Kit';
    nameSound = buttonClicked.nameSoundPiano;
  }

  return (
    <div className="container-elements">
      {title}
      <div>{items}</div>
      <div>{nameSound}</div>
      <button onClick={handleMoodClick}>Click Me</button>
    </div>
  );
};

export default PianoMoodContainer;
