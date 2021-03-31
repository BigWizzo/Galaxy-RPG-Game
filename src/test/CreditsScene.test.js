require('jest-canvas-mock');
import 'phaser';
import CreditsScene from '../Scenes/CreditsScene';

describe('CreditsScene class', () => {
  const myCreditsScene = new CreditsScene();

  test('CreditsScene is an Object', () => {
    expect(typeof myCreditsScene).toBe('object');
  });
  
  test('CreditsScene is not a function', () => {
    expect(typeof myCreditsScene).not.toBe('function');
  });
  
});