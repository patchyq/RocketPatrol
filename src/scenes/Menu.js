class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        // load background music
        this.load.audio('sfx_background', './assets/Background 3.wav');
        // New explosions
        this.load.audio('sfx_explosion2', './assets/explosion2.wav');
        this.load.audio('sfx_explosion3', './assets/explosion3.wav');
        this.load.audio('sfx_explosion4', './assets/explosion4.wav');
        this.load.audio('sfx_explosion5', './assets/explosion5.wav');
        this.load.image('backgroundPhoto', './assets/Background.png');

        }

    create() {
        //menuConfig.fixedWidth = 0;
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show text menu
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize -
        borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use <- -> arrows to move and (F) to fire', 
        menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize +
        borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5); 

        // Menu screen image
        this.bg = this.add.tileSprite(0, 0, 940, 788, 'backgroundPhoto').setOrigin(0,0);
        this.bg.scaleX = 0.68085106383;
        this.bg.scaleY = 0.60913705583;

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // Background Music
        let music = this.sound.add('sfx_background', {loop: true});
        music.play();
        }

        update() {
            if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
              // easy mode
              game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000    
              }
              this.sound.play('sfx_select');
              this.scene.start('playScene');    
            }
            if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
              // hard mode
              game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000    
              }
              this.sound.play('sfx_select');
              this.scene.start('playScene');    
            }
          }
}