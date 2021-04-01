import Phaser from 'phaser';
import background from '../assets/game/background.jpg';
import woof from '../assets/game/woof.png';
import power from '../assets/game/power.png';
import danger from '../assets/game/danger.png';
import explosion from '../assets/game/explosion.png';
import config from '../Config/config';
import { setScore } from '../Api/scoreBoard';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.gameOver = false;
  }

  preload() {
    this.load.image('background', background);
    this.load.spritesheet('power', power, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet('danger', danger, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('woof', woof, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('explosion', explosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'background');
    this.bg.setOrigin(0, 0);

    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('power', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'gray',
      frames: this.anims.generateFrameNumbers('power', {
        start: 2,
        end: 3,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'green',
      frames: this.anims.generateFrameNumbers('danger', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.physics.world.setBoundsCollision();

    this.powerUps = this.physics.add.group();
    this.dangers = this.physics.add.group();

    const maxPowers = 10;
    for (let i = 0; i <= maxPowers; i += 1) {
      const powerUp = this.physics.add.sprite(16, 16, 'power-up');

      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0, 0, config.width, config.height);

      if (Math.random() > 0.5) {
        powerUp.play('red');
      } else {
        powerUp.play('gray');
      }

      powerUp.setVelocity(50, 50);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    }

    const maxDangers = 2;
    for (let i = 0; i <= maxDangers; i += 1) {
      const danger = this.physics.add.sprite(16, 16, 'danger');

      this.dangers.add(danger);
      danger.setRandomPosition(0, 0, config.width, config.height);
      danger.play('green');
      danger.setVelocity(50, 50);
      danger.setCollideWorldBounds(true);
      danger.setBounce(1);
    }

    this.anims.create({
      key: 'woof_anim',
      frames: this.anims.generateFrameNumbers('woof', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.woof = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, 'woof');
    this.woof.play('woof_anim');

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.woof.setCollideWorldBounds(true);

    this.physics.add.overlap(this.woof, this.powerUps, this.pickPowerUp, null, this);
    this.physics.add.collider(this.woof, this.dangers, this.pickDanger, null, this);

    window.score = 0;
    this.scoreLabel = this.add.text(20, 20, 'Ships Destroyed', {
      font: '25px Arial',
      fill: 'yellow',
    });
  }

  pickPowerUp(woof, powerUp) {
    powerUp.disableBody(true, true);
    window.score += 10;
    this.scoreLabel.text = `Ships Destroyed ${window.score}`;
    console.log(window.score)
    console.log(window.playerName)
    if (window.score === 110) {
      setScore(window.playerName, window.score);
      this.physics.pause();
      this.woof.setTint(0xf8f8ff);
      this.gameWonText = this.add.text(400, 300, 'You Won Click to see MENU', {
        font: '25px Arial',
        fill: 'yellow',
      });
      this.gameWonText.setOrigin(0.5);
      this.input.on('pointerdown', () => this.scene.start('Preloader'));
    }
  }

  pickDanger() {
    this.physics.pause();
    this.woof.setTint(0xff0000);
    this.gameOver = true;
    setScore(window.playerName, window.score);
    this.gameOverText = this.add.text(400, 300, 'Game Over Click to see MENU', {
      font: '25px Arial',
      fill: 'yellow',
    });
    this.gameOverText.setOrigin(0.5);
    this.input.on('pointerdown', () => this.scene.start('Preloader'));
  }

  update() {
    this.moveWoofManager();
    this.bg.tilePositionY -= 0.2;
  }

  moveWoofManager() {
    this.woof.setVelocity(0);

    if (this.cursorKeys.left.isDown) {
      this.woof.setVelocityX(-50);
    } else if (this.cursorKeys.right.isDown) {
      this.woof.setVelocityX(50);
    }

    if (this.cursorKeys.up.isDown) {
      this.woof.setVelocityY(-50);
    } else if (this.cursorKeys.down.isDown) {
      this.woof.setVelocityY(50);
    }
  }
}
