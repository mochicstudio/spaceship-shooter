export class TitleScreen extends Phaser.Scene {
	constructor(){
		super('titleScreen');
	}

	create(){
		/* Setup Title Screen */
		this.setKeyEvents();
		this.setBackground();
		this.setTitle();
	}

	setKeyEvents(){
		/* Start Game! */
		this.input.keyboard.on('keyup-SPACE', () => {
			this.scene.start('playGame');
		});
	}

	/* Instead of scaling one image, we set an image each size step.
	 * It looks better. */
	setBackground(){
		this.background_title = this.add.image(0, 0, 'background_title').setDisplayOrigin(0, 0);
		const size = this.background_title.displayWidth;

		for(let x = 0; x <= this.game.config.width; x += size){
			for(let y = 0; y <= this.game.config.height; y += size){
				this.add.image(x, y, 'background_title').setDisplayOrigin(0, 0);
			}
		}
	}

	setTitle(){
		this.add.text(
			this.game.config.width/2,
			this.game.config.height/4,
			'Spaceship Shooter',
			{ font: '25px Arial', fill: 'orange' }
		).setOrigin(0.5);
		this.add.text(
			this.game.config.width/2,
			this.game.config.height/4 + 25,
			'GameOff 2020'
		).setOrigin(0.5);
		this.add.text(
			this.game.config.width/2,
			this.game.config.height/4 + 50,
			'Press Spacebar to Start'
		).setOrigin(0.5);
	}
}
