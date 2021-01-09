export class TitleScreen extends Phaser.Scene {
	constructor(){
		super('titleScreen');
	}

	create(){
		/* Setup Title Screen */
		this.setKeyEvents();
		this.setBackground();
		this.setTitle();
		this.playerSelection();
	}

	setKeyEvents(){
		/* Start Game! */
		this.input.keyboard.on('keyup-SPACE', () => {
			this.scene.start('playGame');
		});

		/* Spaceship Selection */
		this.input.keyboard.on('keyup-LEFT', () => {
			if(this.playerTypeIter == 0)
				this.playerTypeIter = this.playerType.length-1;
			else
				this.playerTypeIter--;

			this.player.setTexture(this.playerType[this.playerTypeIter]);
		});

		this.input.keyboard.on('keyup-RIGHT', () => {
			if(this.playerTypeIter == this.playerType.length-1)
				this.playerTypeIter = 0;
			else
				this.playerTypeIter++;

			this.player.setTexture(this.playerType[this.playerTypeIter]);
		});
	}

	/* Instead of scaling one image, we set an image each size step.
	 * It looks better. */
	setBackground(){
		this.background_title = this.add.image(0, 0, 'background_title').setDisplayOrigin(0, 0);
		const size = this.background_title.displayWidth;

		for(let x = 0; x <= this.game.config.width; x += size){
			for(let y = 0; y <= this.game.config.height; y += size){
				this.add.image(x, y, 'background_title').setDisplayOrigin(0, 0);
			}
		}
	}

	setTitle(){
		this.add.text(
			this.game.config.width/2,
			this.game.config.height/4,
			'SPACESHIP SHOOTER',
			{ font: '3em Arial bold', color: 'orange' }
		).setOrigin(0.5);
		this.add.text(
			this.game.config.width/2,
			this.game.config.height/4 + 30,
			'GameOff 2020',
			{ font: '2em Arial' }
		).setOrigin(0.5);
		this.add.text(
			this.game.config.width/2,
			this.game.config.height/4 + 65,
			'Press Spacebar to Start',
			{ font: '2em Arial' }
		).setOrigin(0.5);
	}

	playerSelection(){
		this.playerTypeIter = 0;
		this.playerType = ['player_blue_one', 'player_blue_two', 'player_blue_three'];
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height/2 + 250;

		this.player = this.add.image(0, 0, this.playerType[this.playerTypeIter]);
		this.player.setPosition(playerX, playerY, 0, 0);
	}
}
