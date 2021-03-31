require('jest-canvas-mock');
import 'phaser';
import GetName from '../Scenes/GetName';

describe('GetName class', () => {
  const myGetName = new GetName();

  test('GetName is an Object', () => {
    expect(typeof myGetName).toBe('object');
  });
  
  test('GetName is not a function', () => {
    expect(typeof myGetName).not.toBe('function');
  });
  
});