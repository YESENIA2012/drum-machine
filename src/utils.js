const informationInstrument = [
  {
    id: 0,
    keyCode: 81,
    keyTrigger: 'Q',
    nameSoundBank: 'Heater-1',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    nameSoundPiano: 'Chord-1',
    soundPainoUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    id: 1,
    keyCode: 87,
    keyTrigger: 'W',
    nameSoundBank: 'Heater-2',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    nameSoundPiano: 'Chord-2',
    soundPainoUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    id: 2,
    keyCode: 69,
    keyTrigger: 'E',
    nameSoundBank: 'Heater-3',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    nameSoundPiano: 'Chord-3',
    soundPainoUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    id: 3,
    keyCode: 65,
    keyTrigger: 'A',
    nameSoundBank: 'Heater-4',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    nameSoundPiano: 'Shaker',
    soundPainoUrl:
      'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    id: 4,
    keyCode: 83,
    keyTrigger: 'S',
    nameSoundBank: 'Clap',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    nameSoundPiano: 'Open-HH',
    soundPainoUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    id: 5,
    keyCode: 68,
    keyTrigger: 'D',
    nameSoundBank: 'Open-HH',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    nameSoundPiano: 'Closed-HH',
    soundPainoUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    id: 6,
    keyCode: 90,
    keyTrigger: 'Z',
    nameSoundBank: "Kick-n'-Hat",
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    nameSoundPiano: 'Punchy-Kick',
    soundPainoUrl:
      'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    id: 7,
    keyCode: 88,
    keyTrigger: 'X',
    nameSoundBank: 'Kick',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    nameSoundPiano: 'Side-Stick',
    soundPainoUrl:
      'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    id: 8,
    keyCode: 67,
    keyTrigger: 'C',
    nameSoundBank: 'Closed-HH',
    soundBankUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    nameSoundPiano: 'Snare',
    soundPainoUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

export default informationInstrument;

/*  play(instrumentMood, buttonClicked) {
    if (instrumentMood) {
      sound = buttonClicked.soundBankUrl;
      [play] = useSound(sound);
    } else {
      sound = buttonClicked.soundPainoUrl;
      [play] = useSound(sound);
    }
  } */