import Phaser from 'phaser';
import galaxy from '../assets/galaxy_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', galaxy);
  }

  create() {
    this.scene.start('Preloader');
  }
}