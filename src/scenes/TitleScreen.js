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
		this.background = this.add.image(0, 0, 'background').setDisplayOrigin(0, 0);
		const size = this.background.displayWidth;

		for(let x = 0; x <= this.game.config.width; x += size){
			for(let y = 0; y <= this.game.config.height; y += size){
				this.add.image(x, y, 'background').setDisplayOrigin(0, 0);
			}
		}
	}

	setTitle(){
		this.add.text(
			this.game.config.width/2 - 50,
			this.game.config.height/4,
			'Spaceship Shooter',
			{ font: '25px Arial', fill: 'orange' }
		);
		this.add.text(
			this.game.config.width/2 - 50,
			this.game.config.height/4 + 25,
			'GameOff 2020'
		);
		this.add.text(
			this.game.config.width/2 - 50,
			this.game.config.height/4 + 50,
			'Press Spacebar to Start'
		);
	}
}
