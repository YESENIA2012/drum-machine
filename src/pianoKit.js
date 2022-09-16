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
              className={`element-${index}`}
              onClick={handleButtonClick}
            >
              {keyTrigger}
            </div>
          );
        } else {
          return (
            <div
              key={keyCode}
              className={`element-${index}`}
              onClick={handleButtonClick}
            >
              {keyTrigger}
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
      <div className="contenedor-items">{items}</div>
      <div>
        <div>{title}</div>
        <div>{nameSound}</div>
        <button onClick={handleMoodClick}>Click Me</button>
      </div>
    </div>
  );
};

export default PianoMoodContainer;
