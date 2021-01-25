export class Paused extends Phaser.Scene {
	constructor(){
		super('paused');
	}

	create(){
		this.setText();
		this.setKeyboardEvents();
	}

	setText(){
		let accumulateY = 0;

		this.paused = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2,
			'Paused',
			{ font: '3em Arial' }
		).setOrigin(0.5);
		accumulateY += this.paused.height;

		this.returnToGame = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2 + accumulateY,
			'Please enter to resume the game',
			{ font: '2em Arial' }
		).setOrigin(0.5);
	}

	resumeGame(){
		this.scene.stop();
		this.scene.resume('playGame');
	}

	setKeyboardEvents(){
		this.input.keyboard.on('keydown-ENTER', () => { this.resumeGame(); });
	}
}
