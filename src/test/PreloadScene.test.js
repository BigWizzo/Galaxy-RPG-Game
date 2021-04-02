import 'phaser';
import PreloaderScene from '../Scenes/PreloaderScene';

require('jest-canvas-mock');

describe('PreloaderScene class', () => {
  const myPreloaderScene = new PreloaderScene();

  test('PreloaderScene is an Object', () => {
    expect(typeof myPreloaderScene).toBe('object');
  });

  test('PreloaderScene is not a function', () => {
    expect(typeof myPreloaderScene).not.toBe('function');
  });
});