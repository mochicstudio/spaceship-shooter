export class TitleScreen extends Phaser.Scene {
	constructor(){
		super('titleScreen');
	}

	create(){
		this.setKeyEvents();

		this.background = this.add.image(this.game.config.width/2, this.game.config.height/2, 'background');

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

	setKeyEvents(){
		this.input.keyboard.on('keyup-SPACE', () => {
			this.scene.start('playGame');
		});
	}
}
