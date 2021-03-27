import 'phaser';
import diamond from '../assets/game/diamond.png';
import platform from '../assets/game/platform.png';
import sky from '../assets/game/sky.png';
import background from '../assets/game/background.jpg';
import woof from '../assets/game/woof.png';
import dragon from '../assets/game/dragonorrange.png';
import ship2 from '../assets/game/ship2.png';
import explosion from '../assets/game/explosion.png';
import config from '../Config/config';

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
    this.load.spritesheet('ship2', ship2, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.image('woof', woof);
  }

  create () {
    // this.physics.startSystem(Phaser.Physics.ARCADE)
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0,0);

    this.woof = this.add.sprite(64, 64, 'woof')
    this.ship2 = this.add.sprite(140, 180, 'ship2')
    this.dragon1 = this.add.sprite(100, 100, 'dragon')
    this.dragon2 = this.add.sprite(32, 32, 'dragon')
    this.dragon3 = this.add.sprite(150, 150, 'dragon')

    // const gameW = this.sys.config.height;
// 
    // console.log(gameW)
  }

  update() {
    this.moveDragon(this.dragon1, 1);
    this.moveDragon(this.dragon2, 2);
    this.moveDragon(this.dragon3, 3);
    this.moveDragon(this.ship2, 3);
  }

  moveDragon(dragon, speed) {
    dragon.y += speed;
    if (dragon.y > config.height) {
      this.resetDragonPos(dragon);
    }
  }

  resetDragonPos(dragon){
    dragon.y = 0;
    
    var randomX = Phaser.Math.Between(0, config.width);
    dragon.x = randomX;
  }
};
