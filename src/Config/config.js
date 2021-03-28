import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 800,
  physics: {
    default: "arcade",
    arcade:{
        debug: false
    }
  }
};
