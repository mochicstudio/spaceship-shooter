export class MochicStudio extends Phaser.Scene {
	constructor(){
		super('mochicStudio');
	}

	create(){
		this.createLogo();
		this.createTitle();
		this.createTimeLine();
	}

	createLogo(){ this.logo = this.add.image(0, 0, 'logo'); }

	createTitle(){
		this.title = this.add.text(
			this.game.config.width / 2,
			this.game.config.height + 100,
			'Mochic Studio',
			{ font: '3em Arial' }
		).setOrigin(0.5);
	}

	createTimeLine(){
		var timeline = this.tweens.createTimeline();

		timeline.add({
			targets: this.logo,
			x: this.game.config.width / 2,
			y: this.game.config.height / 2,
			ease: 'Back',
			duration: 1000,
			repeat: 0,
			yoyo: false
		});

		timeline.add({
			targets: this.title,
			y: this.game.config.height - 300,
			ease: 'Cubic',
			duration: 1000,
			repeat: 0,
			yoyo: false
		});

		timeline.play();
	}
}
