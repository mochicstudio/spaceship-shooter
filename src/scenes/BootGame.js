import background from '../assets/images/backgrounds/blue.png';
import background_title from '../assets/images/backgrounds/purple.png';
import player_blue_one from '../assets/images/png/playerShip1_blue.png';
import player_laser from '../assets/images/png/Lasers/laserBlue01.png';
import enemy_black_one from '../assets/images/png/Enemies/enemyBlack1.png';

export class BootGame extends Phaser.Scene {
	constructor(){
		super('bootGame');
	}

	preload(){
		this.load.image('background', background);
		this.load.image('background_title', background_title);
		this.load.image('player_blue_one', player_blue_one);
		this.load.image('player_laser', player_laser);
		this.load.image('enemy_black_one', enemy_black_one);
	}

	create(){
		this.add.text(20, 20, 'Loading game...');
		this.scene.start('titleScreen');
	}
}
