require('jest-canvas-mock');
import 'phaser';
import OptionsScene from '../Scenes/OptionsScene';

describe('OptionsScene class', () => {
  const myOptionsScene = new OptionsScene();

  test('OptionsScene is an Object', () => {
    expect(typeof myOptionsScene).toBe('object');
  });
  
  test('OptionsScene is not a function', () => {
    expect(typeof myOptionsScene).not.toBe('function');
  });
  
});