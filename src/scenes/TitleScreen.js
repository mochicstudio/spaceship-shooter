import background from '../assets/images/backgrounds/blue.png';
import player_blue_one from '../assets/images/png/playerShip1_blue.png';

export class TitleScreen extends Phaser.Scene {
	constructor(){
		super('bootGame');
	}

	preload(){
		this.load.image('background', background);
		this.load.image('player_blue_one', player_blue_one);
	}

	create(){
		this.add.text(20, 20, 'Loading game...');
		this.scene.start('playGame');
	}
}
