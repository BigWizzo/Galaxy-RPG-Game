import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';
import { scoreBoard, sortScores } from '../Api/scoreBoard';

export default class Scores extends Phaser.Scene {
  constructor() {
    super('Scores');
  }

  displayLeaders(list) {
    for (let i = 1; i < 6; i += 1) {
      if (i >= list.length) {
        break;
      }
      this.add.text(
        config.width / 2,
        70 + 25 * i,
        `${list[i].user}   ${list[i].score}`, {
          fill: '#ffff00',
          fontSize: '24px',
          fontFamily: 'Georgias, Times, serif',
        },
      ).setOrigin(0.5);
    }
  }

  async create() {
    this.text = this.add.text(
      config.width / 2,
      50,
      'Galaxy', {
        fill: '#fff',
        fontSize: '32px',
        fontFamily: 'Georgias, Times, serif',
      },
    );
    this.text.setOrigin(0.5);
    this.menuButton = new Button(this, config.width / 2, 300, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    const scores = await scoreBoard();
    this.displayLeaders(sortScores(scores));
  }
}