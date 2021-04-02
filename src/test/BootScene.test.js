import 'phaser';
import BootScene from '../Scenes/BootScene';

require('jest-canvas-mock');

describe('BootScene class', () => {
  const myBootScene = new BootScene();

  test('BootScene is an Object', () => {
    expect(typeof myBootScene).toBe('object');
  });

  test('BootScene is not a function', () => {
    expect(typeof myBootScene).not.toBe('function');
  });
});