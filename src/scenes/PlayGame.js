export class PlayGame extends Phaser.Scene {
	constructor(){
		super('playGame');
	}

	create(data){
		this.enemies = [];
		this.lasers = [];
		this.miliseconds = 0;
		this.frameCount = 0;
		this.xSeconds = 3;
		this.scorePerShipKilled = 25;
		this.setKeyEvents();
		this.setBackground();
		this.setScoreText();
		this.initPlayer(data);
		this.setCollisionEvents();
	}

	update(time, delta){
		/* Spawn enemies every x seconds */
		this.miliseconds += delta;
		let seconds = Math.round(this.miliseconds / 1000);

		if(this.frameCount === 0 && seconds % this.xSeconds === 0){
			this.score.setText(Number(this.score.text) + seconds);
			this.frameCount++;
			this.spawnEnemies();
		}else if(seconds % this.xSeconds !== 0){
			this.score.setText(Number(this.score.text) + seconds);
			this.frameCount = 0;
		}

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

	setScoreText(){
		this.score = this.add.text(20, 20, 0, { font: '2em Arial', color: 'yellow' });
	}

	/* Set initial coordinates for the player. */
	initPlayer(data){
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height - 50;

		this.player = this.physics.add.image(0, 0, data.playerName);
		this.player.setPosition(playerX, playerY, 0, 0);
		this.laser = data.laserName;
		this.playerType = data.playerType;
	}

	/* Player Attack.
	 * Launch Laser to attack enemies */
	playerAttack(){
		const playerX = this.player.x;
		const playerY = this.player.y - 25;
		this.lasers.push(this.physics.add.image(playerX, playerY, this.laser));
	}

	spawnEnemies(){
		this.enemies.push(this.physics.add.image(this.getRandomX(), 0, 'enemy_blue_one'));
		this.enemies.push(this.physics.add.image(this.getRandomX(), 0, 'enemy_blue_two'));
		this.enemies.push(this.physics.add.image(this.getRandomX(), 0, 'enemy_blue_three'));
	}

	setKeyEvents(){
		this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
		this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

		this.input.keyboard.on('keydown-SPACE', () => { this.playerAttack(); });

		this.input.keyboard.on('keydown-Q', () => { this.changeSpaceshipColor('blue'); });
		this.input.keyboard.on('keydown-W', () => { this.changeSpaceshipColor('red'); });
		this.input.keyboard.on('keydown-E', () => { this.changeSpaceshipColor('green'); });
	}

	/* Change Spaceship and Laser Color */
	changeSpaceshipColor(color){
		if(this.playerType == 'starter')
			this.player.setTexture('player_' + color + '_one');
		else if(this.playerType == 'middle')
			this.player.setTexture('player_' + color + '_two');
		else if(this.playerType == 'senior')
			this.player.setTexture('player_' + color + '_three');

		this.laser = 'player_laser_' + color;
	}

	setCollisionEvents(){
		/* Enemy Dies */
		this.physics.add.collider(this.lasers, this.enemies, (laser, enemy) => {
			this.score.setText(Number(this.score.text) + this.scorePerShipKilled);
			laser.destroy();
			enemy.destroy();
		});
	}
}
