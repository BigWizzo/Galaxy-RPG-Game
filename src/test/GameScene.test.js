require('jest-canvas-mock');
import 'phaser';
import GameScene from '../Scenes/GameScene';

describe('GameScene class', () => {
  const myGameScene = new GameScene();

  test('initial display of tabs', () => {
    expect(typeof myGameScene.pickPowerUp).toBe('function');
  });
  
});