export class PlayGame extends Phaser.Scene {
	constructor(){
		super('playGame');
	}

	create(){
		this.player_blue_one = this.add.image(this.game.config.width/2, this.game.config.height/2, 'player_blue_one');
		this.enemy_black_one = this.add.image(this.game.config.width/4, this.game.config.height/4, 'enemy_black_one');

		this.add.text(20, 20, 'Playing game', { font: '25px Arial', fill: 'yellow' });
	}
}
