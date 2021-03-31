export default class Model {
  constructor() {
    this.mySoundOn = true;
    this.myMusicOn = true;
    this.myBgMusicPlaying = false;
  }

  set musicOn(value) {
    this.myMusicOn = value;
  }

  get musicOn() {
    return this.myMusicOn;
  }

  set soundOn(value) {
    this.mySoundOn = value;
  }

  get soundOn() {
    return this.mySoundOn;
  }

  set bgMusicPlaying(value) {
    this.myBgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.myBgMusicPlaying;
  }
}
