import 'phaser';
import TitleScene from '../Scenes/TitleScene';

require('jest-canvas-mock');

describe('TitleScene class', () => {
  const myTitleScene = new TitleScene();

  test('TitleScene is an Object', () => {
    expect(typeof myTitleScene).toBe('object');
  });

  test('TitleScene is not a function', () => {
    expect(typeof myTitleScene).not.toBe('function');
  });
});