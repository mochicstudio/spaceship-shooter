export class PlayGame extends Phaser.Scene {
	constructor(){
		super('playGame');
	}

	create(data){
		this.enemies = [];
		this.lasers = [];
		this.setKeyEvents();
		this.setBackground();
		this.initPlayer(data);
		this.setCollisionEvents();
		this.spawnEnemy();
	}

	update(){
		/* Move the player */
		if(this.left.isDown){
			if(this.player.x > 0)
				this.player.setX(this.player.x - 25);
		}
		/* Move the player */
		if(this.right.isDown){
			if(this.player.x < this.game.config.width)
				this.player.setX(this.player.x + 25);
		}

		this.enemies.forEach(enemy => {
			enemy.setPosition(enemy.x, enemy.y + 5, 0, 0);
			if(enemy.y > this.game.config.height) enemy.destroy();
		});

		this.lasers.forEach(laser => {
			laser.setPosition(laser.x, laser.y - 15, 0, 0);
			if(laser.y < 0) laser.destroy();
		});
	}

	/* Get a random X coordinate to spawn the enemies. */
	getRandomX(){
		return Math.floor(Math.random() * Math.floor(this.game.config.width));
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
	initPlayer(data){
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height - 50;

		this.player = this.physics.add.image(0, 0, data.playerName);
		this.player.setPosition(playerX, playerY, 0, 0);
	}

	/* Launch Laser to attack enemies */
	playerAttack(){
		const playerX = this.player.x;
		const playerY = this.player.y - 25;
		this.lasers.push(this.physics.add.image(playerX, playerY, 'player_laser_blue'));
	}

	spawnEnemy(){
		this.enemies.push(this.physics.add.image(this.getRandomX(), 0, 'enemy_blue_one'));
	}

	setKeyEvents(){
		this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		/* Player Attack */
		this.input.keyboard.on('keydown-SPACE', () => {
			this.playerAttack();
		});
	}

	setCollisionEvents(){
		/* Enemy Dies */
		this.physics.add.collider(this.lasers, this.enemies, (laser, enemy) => {
			laser.destroy();
			enemy.destroy();
		});
	}
}
