require('jest-canvas-mock');
import 'phaser';
import InstructionsScene from '../Scenes/Instructions';

describe('InstructionsScene class', () => {
  const myInstructionsScene = new InstructionsScene();

  test('InstructionsScene is an Object', () => {
    expect(typeof myInstructionsScene).toBe('object');
  });
  
  test('InstructionsScene is not a function', () => {
    expect(typeof myInstructionsScene).not.toBe('function');
  });
  
});