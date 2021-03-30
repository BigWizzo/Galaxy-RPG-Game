import GameScene from '../Scenes/GameScene';

describe('GameScene class', () => {
  const myGameScene = new GameScene();

  test('initial display of tabs', () => {
    expect(typeof Tabs).toBe('function');
  });
  
});