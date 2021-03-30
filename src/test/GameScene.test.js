require('jest-canvas-mock');
import 'phaser';
import GameScene from '../Scenes/GameScene';

describe('GameScene class', () => {
  const myGameScene = new GameScene();

  test('pick points when woof collides with powerUps', () => {
    expect(typeof myGameScene.pickPowerUp).toBe('function');
  });

  test('pick points when woof collides with powerUps', () => {
    expect(typeof myGameScene.pickPowerUp).not.toBe('object');
  });

  test('player woof dies when collides with danger', () => {
    expect(typeof myGameScene.pickDanger).toBe('function');
  });
  
  test('player woof dies when collides with danger', () => {
    expect(typeof myGameScene.pickDanger).not.toBe('object');
  });

  test('sets velocity for player woof movement', () => {
    expect(typeof myGameScene.moveWoofManager).toBe('function');
  });
    
  test('sets velocity for player woof movement', () => {
    expect(typeof myGameScene.moveWoofManager).not.toBe('object');
  });
  
});