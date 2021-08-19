export class MochicStudio extends Phaser.Scene {
	constructor(){
		super('mochicStudio');
	}

	create(){
		this.createLogo();
		this.createTitle();
		this.createTimeLine();
	}

	/* Set Logo initial coordinates */
	createLogo(){ this.logo = this.add.image(0, 0, 'logo'); }

	/* Set Title initial coordinates */
	createTitle(){
		this.title = this.add.text(
			this.game.config.width / 2,
			this.game.config.height + 100,
			'Mochic Studio',
			{ font: '3em Arial' }
		).setOrigin(0.5);
	}

	createTimeLine(){
		var timeline = this.tweens.createTimeline({
			callbackScope: this,
			onComplete: this.startTitleScreen
		});

		/* Move the Logo */
		timeline.add({
			targets: this.logo,
			x: this.game.config.width / 2,
			y: this.game.config.height / 2,
			ease: 'Back',
			duration: 1000,
			repeat: 0,
			yoyo: false
		});

		/* Move the Title */
		timeline.add({
			targets: this.title,
			y: this.game.config.height / 2 + ( this.logo.height / 2 ) + 10,
			ease: 'Cubic',
			duration: 1000,
			repeat: 0,
			yoyo: false
		});

		timeline.play();
	}

	startTitleScreen(){ this.scene.start('titleScreen'); }
}
