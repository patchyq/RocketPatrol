let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// Patrick Queiroz
// Sources: Canva


// Points Breakdown:

// +5: Add your own (copyright-free) background music
// +10: Create 4 new explosion SFX and randomize which one plays on impact
// +10: Display the time remaining (in seconds) on the screen
// +10: Create a new title screen (e.g., new artwork, typography, layout)
// +20: Implement a new timing/scoring mechanism that adds time to the clock for successful hits
// Total: 55 points
