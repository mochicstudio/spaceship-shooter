export class GameOver extends Phaser.Scene {
	constructor(){
		super('gameOver');
	}

	create(data){
		this.gameOver = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2,
			'Game Over',
			{ font: '3em Arial' }
		).setOrigin(0.5);

		this.scoreText = this.add.text(
			this.game.config.width / 2,
			this.game.config.height / 2 + this.gameOver.height,
			'Your score: ' + data.score,
			{ font: '2em Arial' }
		).setOrigin(0.5);
	}
}
