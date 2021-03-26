import 'phaser';
import diamond from '../assets/game/diamond.png';
import platform from '../assets/game/platform.png';
import sky from '../assets/game/sky.png';
import woof from '../assets/game/woof.png';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('diamond', diamond);
    this.load.image('platform', platform);
    this.load.image('sky', sky);
    this.load.image('woof', woof);
  }

  create () {
    // this.physics.startSystem(Phaser.Physics.ARCADE)
    let bg = this.add.sprite(0, 0, 'sky');
    bg.setOrigin(0,0);
  }
};
