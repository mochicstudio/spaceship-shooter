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
			this.scene.start('playGame', { playerName: this.playerType[this.playerTypeIter].name });
		});

		/* Spaceship Selection */
		this.input.keyboard.on('keyup-LEFT', () => {
			if(this.playerTypeIter == 0)
				this.playerTypeIter = this.playerType.length-1;
			else
				this.playerTypeIter--;

			this.player.setTexture(this.playerType[this.playerTypeIter].name);
			this.playerInfo.setText(this.playerType[this.playerTypeIter].info);
		});

		this.input.keyboard.on('keyup-RIGHT', () => {
			if(this.playerTypeIter == this.playerType.length-1)
				this.playerTypeIter = 0;
			else
				this.playerTypeIter++;

			this.player.setTexture(this.playerType[this.playerTypeIter].name);
			this.playerInfo.setText(this.playerType[this.playerTypeIter].info);
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
		/* Store the title objects on a container */
		this.titleContainer = this.add.container();
		const textXAxis = 10;
		const pixel = 1;
		const textCenter = 0.5;

		/* We use the constants and variables to set
		 * relative position on all the childs of the
		 * container and the container itself.
		 * This way, they'll never be on top
		 * of each other. */
		let gameNamePos = { x: textXAxis, y: 10 };
		let gameName = this.add.text(
			gameNamePos.x,
			gameNamePos.y,
			'SPACESHIP SHOOTER',
			{ font: '3em Arial bold', color: 'orange' }
		).setOrigin(textCenter);

		let gameInfoPos = { x: textXAxis, y: gameName.height + pixel };
		let gameInfo = this.add.text(
			gameInfoPos.x,
			gameInfoPos.y,
			'GameOff 2020',
			{ font: '2em Arial' }
		).setOrigin(textCenter);

		this.titleContainer.add([gameName, gameInfo]);
		this.titleContainer.setPosition(this.game.config.width / 2, pixel * 5);
	}

	playerSelection(){
		this.playerTypeIter = 0;
		this.playerType = [
			{
				name: 'player_blue_one',
				info: 'Starter spaceship, shoots a single laser at a time',
				locked: false
			},
			{
				name: 'player_blue_two',
				info: 'Middle spaceship, shoots two lasers at a time',
				locked: true
			},
			{
				name: 'player_blue_three',
				info: 'Senior spaceship, shoots three lasers at a time',
				locked: true
			}
		];
		const playerX = this.game.config.width/2;
		const playerY = this.game.config.height/2 + 200;

		this.add.text(
			this.game.config.width/2,
			this.game.config.height/2 + 60,
			'Choose your Spaceship',
			{ font: '3em Arial' }
		).setOrigin(0.5);

		this.add.text(
			this.game.config.width/2 - 100,
			this.game.config.height/2 + 110,
			'< Left Arrow',
			{ font: '2em Arial' }
		).setOrigin(0.5);

		this.add.text(
			this.game.config.width/2 + 100,
			this.game.config.height/2 + 110,
			'Right Arrow >',
			{ font: '2em Arial' }
		).setOrigin(0.5);

		this.player = this.add.image(0, 0, this.playerType[this.playerTypeIter].name);
		this.player.setPosition(playerX, playerY, 0, 0);

		this.playerInfo = this.add.text(
			this.game.config.width/2,
			this.game.config.height - 200,
			this.playerType[this.playerTypeIter].info,
			{ font: '2em Arial' }
		).setOrigin(0.5);

		this.add.text(
			this.game.config.width/2,
			this.game.config.height - 100,
			'Press Spacebar to Start',
			{ font: '3em Arial' }
		).setOrigin(0.5);
	}
}
