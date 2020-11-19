export class PlayGame extends Phaser.Scene {
	constructor(){
		super('playGame');
	}

	create(){
		this.setBackground();
		this.player_blue_one = this.add.image(this.game.config.width/2, this.game.config.height/2, 'player_blue_one');
		this.enemy_black_one = this.add.image(this.game.config.width/4, this.game.config.height/4, 'enemy_black_one');

		this.add.text(20, 20, 'Playing game', { font: '25px Arial', fill: 'yellow' });
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
}
