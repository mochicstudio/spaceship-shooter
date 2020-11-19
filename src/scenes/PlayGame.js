export class PlayGame extends Phaser.Scene {
	constructor(){
		super('playGame');
	}

	create(){
		this.enemies = [];
		this.setBackground();
		this.initPlayer();
	}

	update(){}

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

	/* Set initial coordinates for the player. */
	initPlayer(){
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height - 50;

		this.player = this.add.image(0, 0, 'player_blue_one');
		this.player.setPosition(playerX, playerY, 0, 0);
	}

	/* Get a random X coordinate to spawn the enemies. */
	getRandomX(){
		return Math.floor(Math.random() * Math.floor(this.game.config.width));
	}
}
