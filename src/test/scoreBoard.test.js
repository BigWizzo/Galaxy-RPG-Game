import 'phaser';
import { scoreBoard, setScore, sortScores } from '../Api/scoreBoard';

require('jest-canvas-mock');

test('scoreBoard is a function', () => {
  expect(typeof scoreBoard).toBe('function');
});

test('scoreBoard is not an object', () => {
  expect(typeof scoreBoard).not.toBe('object');
});

test('sortScores is a function', () => {
  expect(typeof sortScores).toBe('function');
});

test('sortScores is not an object', () => {
  expect(typeof sortScores).not.toBe('object');
});

test('setScore is a function', () => {
  expect(typeof setScore).toBe('function');
});
  
test('setScore is not an object', () => {
  expect(typeof setScore).not.toBe('object');
});
