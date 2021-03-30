import Phaser from 'phaser';
import Button from '../Objects/Button';
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
        game.config.width / 2,
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
    this.add.text(
      143,
      25,
      'Ice & Fire', {
        fill: '#fff',
        fontSize: '32px',
        fontFamily: 'Georgias, Times, serif',
      },
    );
    this.menuButton = new Button(this, 210, 300, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    const scores = await scoreBoard();
    console.log(scores);
    this.displayLeaders(sortScores(scores));
  }
}