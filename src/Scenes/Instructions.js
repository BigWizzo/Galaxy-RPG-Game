import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(config.width / 2, 50, 'Instructions', { fontSize: 30 });
    this.text.setOrigin(0.5);
    this.instructions = this.add.text(config.width / 2, 150, 'Use the arrow keys\nto move Thor about the galaxy,\nDestroy as many enemy power\nballs as you can. Avoid\ncolliding with the burning\nmeteoroid. Good Luck!', { fontSize: 20 });
    this.instructions.setOrigin(0.5);

    this.menuButton = new Button(this, config.width / 2, 300, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}