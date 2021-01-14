export class TitleScreen extends Phaser.Scene {
	constructor(){
		super('titleScreen');
	}

	create(){
		/* Setup Title Screen */
		this.setKeyEvents();
		this.setBackground();
		this.setTitle();
		this.setPlayerSelection();
	}

	setKeyEvents(){
		/* Start Game! */
		this.input.keyboard.on('keyup-SPACE', () => {
			this.scene.start('playGame', {
				playerName: this.playerType[this.playerTypeIter].name,
				laserName: this.playerType[this.playerTypeIter].laser,
				playerType: this.playerType[this.playerTypeIter].type
			});
		});

		/* Spaceship Selection */
		this.input.keyboard.on('keyup-J', () => { this.changeToLeft(); });
		this.input.keyboard.on('keyup-K', () => { this.changeToRight(); });
	}

	changeToLeft(){
		if(this.playerTypeIter == 0)
			this.playerTypeIter = this.playerType.length-1;
		else
			this.playerTypeIter--;

		this.player.setTexture(this.playerType[this.playerTypeIter].name);
		this.playerInfo.setText(this.playerType[this.playerTypeIter].info);
	}

	changeToRight(){
		if(this.playerTypeIter == this.playerType.length-1)
			this.playerTypeIter = 0;
		else
			this.playerTypeIter++;

		this.player.setTexture(this.playerType[this.playerTypeIter].name);
		this.playerInfo.setText(this.playerType[this.playerTypeIter].info);
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
		const textXAxis = 0;
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

	setPlayerSelection(){
		this.playerSelectionContainer = this.add.container();
		const textXAxis = 0;
		const pixel = 1;
		const textCenter = 0.5;
		let yAxis = 0;

		this.playerTypeIter = 0;
		this.playerType = [
			{
				name: 'player_blue_one',
				type: 'starter',
				laser: 'player_laser_blue',
				info: 'Starter spaceship, shoots a single laser at a time',
				locked: false
			},
			{
				name: 'player_blue_two',
				type: 'middle',
				laser: 'player_laser_blue',
				info: 'Middle spaceship, shoots two lasers at a time',
				locked: true
			},
			{
				name: 'player_blue_three',
				type: 'senior',
				laser: 'player_laser_blue',
				info: 'Senior spaceship, shoots three lasers at a time',
				locked: true
			}
		];

		/* Same as setTitle() we use the constants and variables to set
		 * relative position on all the childs of the container and the
		 * container itself. This way, they'll never be on top of each
		 * other. Additionally we use the yAxis varaible to move through
		 * the y axis each component. */

		let textTitle = this.add.text(
			textXAxis,
			yAxis,
			'Choose your Spaceship',
			{ font: '3em Arial' }
		).setOrigin(textCenter);

		let moveToSide = textTitle.width / 2;
		yAxis += textTitle.height + pixel;
		let textInfoLeft = this.add.text(
			textXAxis - moveToSide,
			yAxis,
			'< J',
			{ font: '2em Arial' }
		).setOrigin(textCenter);

		let textInfoRight = this.add.text(
			textXAxis + moveToSide,
			yAxis,
			'K >',
			{ font: '2em Arial' }
		).setOrigin(textCenter);

		yAxis += textInfoRight.height + (pixel * 10)
		const playerPos = {
			x: this.playerSelectionContainer.width / 2,
			y: yAxis
		};
		this.player = this.add.image(0, 0, this.playerType[this.playerTypeIter].name);
		this.player.setPosition(playerPos.x, playerPos.y);

		yAxis += this.player.height + pixel;
		this.playerInfo = this.add.text(
			textXAxis,
			yAxis,
			this.playerType[this.playerTypeIter].info,
			{ font: '2em Arial' }
		).setOrigin(textCenter);

		yAxis += this.playerInfo.height + (pixel * 50);
		let textStart = this.add.text(
			textXAxis,
			yAxis,
			'Press Spacebar to Start',
			{ font: '3em Arial' }
		).setOrigin(textCenter);

		this.playerSelectionContainer.add([textTitle, textInfoLeft, textInfoRight, this.player, this.playerInfo, textStart]);
		this.playerSelectionContainer.setPosition(this.game.config.width / 2, this.game.config.height / 2);
	}
}
