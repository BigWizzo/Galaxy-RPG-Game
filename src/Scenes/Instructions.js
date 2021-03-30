import 'phaser';
import Button from '../Objects/Button';

export default class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(100, 50, 'How to play', { fontSize: 30 });
    this.instructions = this.add.text(50, 110, 'Move around the world with\nthe arrow keys. On battle,\nselect attack action on\nmenu with space bar or left\narrow key. Kill shadows\nand demons to score up.', { fontSize: 20 });


    this.menuButton = new Button(this, 210, 300, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}