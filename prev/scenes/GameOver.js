export class GameOver extends Phaser.Scene {
	constructor(){
		super('gameOver');
	}

	create(data){
		this.setText(data.score);
		this.setKeyboardEvents(data);
	}

	setText(score){
		let accumulateY = 0;

		this.gameOver = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2,
			'Game Over',
			{ font: '3em Arial' }
		).setOrigin(0.5);
		accumulateY += this.gameOver.height;

		this.scoreText = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2 + accumulateY,
			'Your score: ' + score,
			{ font: '2em Arial' }
		).setOrigin(0.5);
		accumulateY += this.scoreText.height;

		this.playAgain = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2 + accumulateY,
			'Press Spacebar to Play Again',
			{ font: '2em Arial' }
		).setOrigin(0.5);
		accumulateY += this.playAgain.height;

		this.toTitleScreen = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2 + accumulateY,
			'Press Enter to Go to Title Screen',
			{ font: '2em Arial' }
		).setOrigin(0.5);
	}

	setKeyboardEvents(data){
		this.input.keyboard.on('keydown-SPACE', () => {
			this.scene.start('playGame', {
				playerName: data.playerName,
				laserName: data.laserName,
				playerType: data.playerType
			});
		});

		this.input.keyboard.on('keydown-ENTER', () => {
			this.scene.start('titleScreen');
		});
	}
}
