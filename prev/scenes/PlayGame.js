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
		this.lives = 3;
		/* This variables are for moving in any direction
		 * the spawn point */
		this.aLittle = 25;
		this.more = 35;
		/* To spawn certain quantity of enemies */
		this.three = 3;
		this.four = 4;
		this.five = 5;
		this.setKeyEvents();
		this.setBackground();
		this.setScoreText();
		this.setLivesText();
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

		if(!this.lives){
			/* We send the player ship information
			 * if the player wants to play again. */
			this.scene.start('gameOver', {
				playerName: this.playerInfo.name,
				laserName: this.playerInfo.laserName,
				playerType: this.playerInfo.type,
				score: this.score.text
			});
		}
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

	setLivesText(){
		this.livesText = this.add.text(20, 40, "Lives: " + this.lives, { font: '2em Arial', color: 'yellow' });
	}

	/* Set initial coordinates for the player. */
	initPlayer(data){
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height - 50;

		/* We need this information to be persistant
		 * during the playthrough. So we store it in
		 * an object to set the player and use it
		 * later for the game over phase. */
		this.playerInfo = {
			name: data.playerName,
			laserName: data.laserName,
			type: data.playerType
		};

		this.player = this.physics.add.image(0, 0, this.playerInfo.name);
		this.player.setPosition(playerX, playerY, 0, 0);
		this.laser = this.playerInfo.laserName;
		this.playerType = this.playerInfo.type;
	}

	/* Player Attack.
	 * Launch Laser to attack enemies */
	playerAttack(){
		if(this.playerType == 'starter'){
			const playerX = this.player.x;
			const playerY = this.player.y - this.aLittle;
			/* Shoot one laser */
			this.lasers.push(this.physics.add.image(playerX, playerY, this.laser));
		}else if(this.playerType == 'middle'){
			const playerXLeft = this.player.x - this.aLittle;
			const playerXRight = this.player.x + this.aLittle;
			const playerY = this.player.y - this.aLittle;
			/* Shoot two lasers */
			this.lasers.push(this.physics.add.image(playerXLeft, playerY, this.laser));
			this.lasers.push(this.physics.add.image(playerXRight, playerY, this.laser));
		}else if(this.playerType == 'senior'){
			const playerX = this.player.x;
			const playerXLeft = this.player.x - this.more;
			const playerXRight = this.player.x + this.more;
			const playerY = this.player.y - this.aLittle;
			const playerYUpper = this.player.y - this.more;
			/* Shoot three lasers */
			this.lasers.push(this.physics.add.image(playerXLeft, playerY, this.laser));
			this.lasers.push(this.physics.add.image(playerX, playerYUpper, this.laser));
			this.lasers.push(this.physics.add.image(playerXRight, playerY, this.laser));
		}
	}

	spawnEnemies(){
		if(this.playerType == 'starter'){
			for(let enemy = 0; enemy < this.three; enemy++){
				this.enemies.push(this.physics.add.image(this.getRandomX(), 0, this.getRandomEnemy()));
			}
		}else if(this.playerType == 'middle'){
			for(let enemy = 0; enemy < this.four; enemy++){
				this.enemies.push(this.physics.add.image(this.getRandomX(), 0, this.getRandomEnemy()));
			}
		}else if(this.playerType == 'senior'){
			for(let enemy = 0; enemy < this.five; enemy++){
				this.enemies.push(this.physics.add.image(this.getRandomX(), 0, this.getRandomEnemy()));
			}
		}
	}

	getRandomEnemy(){
		let enemies = [
			'enemy_blue_one',
			'enemy_blue_two',
			'enemy_blue_three',
			'enemy_blue_four',
			'enemy_blue_five',
			'enemy_red_one',
			'enemy_red_two',
			'enemy_red_three',
			'enemy_red_four',
			'enemy_red_five',
			'enemy_green_one',
			'enemy_green_two',
			'enemy_green_three',
			'enemy_green_four',
			'enemy_green_five'
		];

		return enemies[Math.floor(Math.random() * Math.floor(enemies.length))];
	}

	setKeyEvents(){
		this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
		this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

		this.input.keyboard.on('keydown-SPACE', () => { this.playerAttack(); });

		this.input.keyboard.on('keydown-Q', () => { this.changeSpaceshipColor('blue'); });
		this.input.keyboard.on('keydown-W', () => { this.changeSpaceshipColor('green'); });
		this.input.keyboard.on('keydown-E', () => { this.changeSpaceshipColor('red'); });
	}

	/* Change Spaceship and Laser Color */
	changeSpaceshipColor(color){
		if(this.playerType == 'starter')
			this.player.setTexture('player_' + color + '_one');
		else if(this.playerType == 'middle')
			this.player.setTexture('player_' + color + '_two');
		else if(this.playerType == 'senior')
			this.player.setTexture('player_' + color + '_three');

		this.laser = 'laser_' + color + '_player';
	}

	/* To retrieved the color word from a given string */
	getColor(str){
		const underscore = '_';
		const strArray = str.split(underscore);
		return strArray[1];
	}

	/* Checks if the laser and the enemy spaceship are the same color
	 * and return true or false. */
	isLaserAndEnemySameColor(laserTextureStr, enemyTextureStr){
		if(this.getColor(laserTextureStr) == this.getColor(enemyTextureStr))
			return true;
		else
			return false;
	}

	/* Checks if the player and the enemy spaceship are the same color
	 * and return true or false. */
	isPlayerAndEnemySameColor(playerTextureStr, enemyTextureStr){
		if(this.getColor(playerTextureStr) == this.getColor(enemyTextureStr))
			return true;
		else
			return false;
	}

	renderExplosion(position, color){
		const X = position.x;
		const Y = position.y;
		const image = 'explosion_' + color;
		const explosion = this.add.image(X, Y, image);

		setTimeout(() => {
			explosion.destroy();
		}, 500);
	}

	setCollisionEvents(){
		/* Enemy Dies */
		this.physics.add.collider(this.lasers, this.enemies, (laser, enemy) => {
			/* If the enemy spaceship and the laser are the same color, then
			 * kill the enemy. */
			if(this.isLaserAndEnemySameColor(laser.texture.key, enemy.texture.key)){
				laser.destroy();
				enemy.destroy();
				this.score.setText(Number(this.score.text) + this.scorePerShipKilled);
				this.renderExplosion({ x: enemy.x, y: enemy.y }, this.getColor(enemy.texture.key));
			}
		});

		this.physics.add.collider(this.player, this.enemies, (player, enemy) => {
			/* If the enemy spaceship and the player are the same color, then
			 * kill the enemy and kill the player. */
			if(this.isPlayerAndEnemySameColor(player.texture.key, enemy.texture.key)){
				this.lives -= 1;
				this.livesText.setText("Lives: " + this.lives);

				enemy.destroy();
				this.renderExplosion({ x: enemy.x, y: enemy.y }, this.getColor(enemy.texture.key));
				this.renderExplosion({ x: player.x, y: player.y }, this.getColor(player.texture.key));
				this.player.setX(this.game.config.width / 2);
			}
		});
	}
}
