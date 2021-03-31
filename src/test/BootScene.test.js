require('jest-canvas-mock');
import 'phaser';
import BootScene from '../Scenes/BootScene';

describe('BootScene class', () => {
  const myBootScene = new BootScene();

  test('BootScene is an Object', () => {
    expect(typeof myBootScene).toBe('object');
  });
  
  test('BootScene is not a function', () => {
    expect(typeof myBootScene).not.toBe('function');
  });
  
});