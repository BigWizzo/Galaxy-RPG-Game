import 'phaser';
import Scores from '../Scenes/Scores';

require('jest-canvas-mock');

describe('Scores class', () => {
  const myScores = new Scores();

  test('Scores is an Object', () => {
    expect(typeof myScores).toBe('object');
  });

  test('Scores is not a function', () => {
    expect(typeof myScores).not.toBe('function');
  });

  test('display score leaders', () => {
    expect(typeof myScores.displayLeaders).toBe('function');
  });

  test('display score leaders', () => {
    expect(typeof myScores.displayLeaders).not.toBe('object');
  });
});