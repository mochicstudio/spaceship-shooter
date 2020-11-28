export class PlayGame extends Phaser.Scene {
	constructor(){
		super('playGame');
	}

	create(){
		this.enemies = [];
		this.lasers = [];
		this.setKeyEvents();
		this.setBackground();
		this.initPlayer();
	}

	update(){
		this.lasers.forEach(laser => {
			laser.setPosition(laser.x, laser.y - 10, 0, 0);

			if(laser.y < 0) laser.destroy();
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

	/* Set initial coordinates for the player. */
	initPlayer(){
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height - 50;

		this.player = this.add.image(0, 0, 'player_blue_one');
		this.player.setPosition(playerX, playerY, 0, 0);
	}

	/* Launch Laser to attack enemies */
	playerAttack(){
		const winY = this.game.config.height;
		const playerX = this.player.x;
		const playerY = this.player.y - 20;
		this.lasers.push(this.add.image(playerX, playerY, 'player_laser'));
	}

	/* Get a random X coordinate to spawn the enemies. */
	getRandomX(){
		return Math.floor(Math.random() * Math.floor(this.game.config.width));
	}

	setKeyEvents(){
		/* Move Player */
		this.input.keyboard.on('keydown-LEFT', () => {
			this.player.setX(this.player.x - 25);
		});
		this.input.keyboard.on('keydown-RIGHT', () => {
			this.player.setX(this.player.x + 25);
		});

		/* Player Attack */
		this.input.keyboard.on('keydown-SPACE', () => {
			console.log('Player Attacked!');
			this.playerAttack();
		});
	}
}
