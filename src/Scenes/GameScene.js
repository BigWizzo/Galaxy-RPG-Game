import 'phaser';
import diamond from '../assets/game/diamond.png';
import platform from '../assets/game/platform.png';
import sky from '../assets/game/sky.png';
import background from '../assets/game/background.jpg';
import woof from '../assets/game/woof.png';
import dragon from '../assets/game/dragonorrange.png';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('diamond', diamond);
    this.load.image('platform', platform);
    this.load.image('background', background);
    this.load.image('dragon', dragon);
    this.load.image('woof', woof);
  }

  create () {
    // this.physics.startSystem(Phaser.Physics.ARCADE)
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0,0);

    this.woof = this.add.sprite(64, 64, 'woof')
    this.dragon1 = this.add.sprite(100, 100, 'dragon')
    this.dragon2 = this.add.sprite(32, 32, 'dragon')
    this.dragon3 = this.add.sprite(150, 150, 'dragon')
  }

  update() {
    this.moveDragon(this.dragon1, 1);
    this.moveDragon(this.dragon2, 2);
    this.moveDragon(this.dragon3, 3);
  }

  moveDragon(dragon, speed) {
    dragon.y += speed;
  }
};
