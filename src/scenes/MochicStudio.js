export class MochicStudio extends Phaser.Scene {
	constructor(){
		super('mochicStudio');
	}

	create(){
		this.logo = this.add.image(0, 0, 'logo');

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

		timeline.play();
	}
}
