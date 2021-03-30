import 'phaser';
import diamond from '../assets/game/diamond.png';
import platform from '../assets/game/platform.png';
import sky from '../assets/game/sky.png';
import background from '../assets/game/background.jpg';
import woof from '../assets/game/woof.png';
// import dragon from '../assets/game/dragonorrange.png';
// import ship2 from '../assets/game/ship2.png';
import power from '../assets/game/power.png';
import danger from '../assets/game/danger.png';
import explosion from '../assets/game/explosion.png';
import config from '../Config/config';

const gameSettings = {
  playerSpeed: 200,
  maxPowerups: 2,
  powerUpVel: 50,
}


export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('diamond', diamond);
    this.load.image('platform', platform);
    this.load.image('background', background);
    // this.load.image('dragon', dragon);
    // this.load.spritesheet('ship2', ship2, {
      // frameWidth: 16,
      // frameHeight: 16
    // });
    this.load.spritesheet('power', power, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('danger', danger, {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.spritesheet('woof', woof, {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.spritesheet('explosion', explosion, {
      frameWidth: 32,
      frameHeight: 32
    });
  }

  create () {
    // this.physics.startSystem(Phaser.Physics.ARCADE)

    // let bg = this.add.sprite(0, 0, 'background');
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.bg.setOrigin(0,0);

    // this.woof = this.add.sprite(64, 64, 'woof')
    // this.ship2 = this.add.sprite(140, 180, 'ship2')
    // this.dragon1 = this.add.sprite(100, 100, 'dragon')
    // this.dragon2 = this.add.sprite(32, 32, 'dragon')
    // this.dragon3 = this.add.sprite(150, 150, 'dragon')
    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power", {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "green",
      frames: this.anims.generateFrameNumbers("danger", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: "blue",
      frames: this.anims.generateFrameNumbers("danger", {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

    this.physics.world.setBoundsCollision();

    this.powerUps = this.physics.add.group();
    this.dangers = this.physics.add.group();

    var maxObjects = 8;
    for (var i = 0; i <= maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16, 16, "power-up");
      var danger = this.physics.add.sprite(16, 16, "danger");

      this.powerUps.add(powerUp);
      this.dangers.add(danger);
      powerUp.setRandomPosition(0, 0, config.width, config.height);
      danger.setRandomPosition(0, 0, config.width, config.height);

      // set random animation
      if (Math.random() > 0.5) {
        powerUp.play("red");
        danger.play("green");
      } else {
        powerUp.play("gray");
        danger.play("blue");
      }

      // setVelocity
      powerUp.setVelocity(50, 50);
      danger.setVelocity(50, 50);
      // 3.2
      powerUp.setCollideWorldBounds(true);
      danger.setCollideWorldBounds(true);
      // 3.3
      powerUp.setBounce(1);
      danger.setBounce(1);
    }

    this.anims.create({
      key: "woof_anim",
      frames: this.anims.generateFrameNumbers("woof", {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });

    this.woof = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "woof");
    this.woof.play("woof_anim");

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.woof.setCollideWorldBounds(true);

    // this.woof.add('left', [0], 10, true)
    // this.woof.add('right', [1], 10, true)
    // this.woof.add('up', [2], 10, true)
    // this.woof.add('down', [3], 10, true)

    this.physics.add.overlap(this.woof, this.powerUps, this.pickPowerUp, null, this);

    this.score = 0;
    this.scoreLabel = this.add.text(20, 20, "Ships Destroyed", {
      font: "25px Arial",
      fill: "yellow"
    });

  }

  pickPowerUp(woof, powerUp) {
    // make it inactive and hide it
    powerUp.disableBody(true, true);
    this.score += 1;
    this.scoreLabel.text = "Ships Destroyed " + this.score;
  }

  update() {
    // this.moveDragon(this.dragon1, 1);
    // this.moveDragon(this.dragon2, 2);
    // this.moveDragon(this.dragon3, 3);
    // this.moveDragon(this.ship2, 3);
    this.moveWoofManager();
    this.bg.tilePositionY -= 0.2;
  }

  moveWoofManager(){
    this.woof.setVelocity(0);
    // this.woof.play('left')

    if(this.cursorKeys.left.isDown){
      // this.woof.play('left')
      this.woof.setVelocityX(-50);
    }else if(this.cursorKeys.right.isDown){
      // this.woof.play('right')
      this.woof.setVelocityX(50);
    }

    if(this.cursorKeys.up.isDown){
      // this.woof.play('up')
      this.woof.setVelocityY(-50);
    }else if(this.cursorKeys.down.isDown){
      // this.woof.play('down')
      this.woof.setVelocityY(50);
    }
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
