import mochic_studio_logo from '../assets/images/logo/mochicstudio.png';
import background from '../assets/images/backgrounds/blue.png';
import background_title from '../assets/images/backgrounds/purple.png';
import player_blue_one from '../assets/images/png/playerShip1_blue.png';
import player_green_one from '../assets/images/png/playerShip1_green.png';
import player_red_one from '../assets/images/png/playerShip1_red.png';
import player_blue_two from '../assets/images/png/playerShip2_blue.png';
import player_green_two from '../assets/images/png/playerShip2_green.png';
import player_red_two from '../assets/images/png/playerShip2_red.png';
import player_blue_three from '../assets/images/png/playerShip3_blue.png';
import player_green_three from '../assets/images/png/playerShip3_green.png';
import player_red_three from '../assets/images/png/playerShip3_red.png';
import player_laser_blue from '../assets/images/png/Lasers/laserBlue01.png';
import enemy_black_one from '../assets/images/png/Enemies/enemyBlack1.png';

export class BootGame extends Phaser.Scene {
	constructor(){
		super('bootGame');
	}

	preload(){
		this.load.image('logo', mochic_studio_logo);
		this.load.image('background', background);
		this.load.image('background_title', background_title);
		this.load.image('player_blue_one', player_blue_one);
		this.load.image('player_green_one', player_green_one);
		this.load.image('player_red_one', player_red_one);
		this.load.image('player_blue_two', player_blue_two);
		this.load.image('player_green_two', player_green_two);
		this.load.image('player_red_two', player_red_two);
		this.load.image('player_blue_three', player_blue_three);
		this.load.image('player_green_three', player_green_three);
		this.load.image('player_red_three', player_red_three);
		this.load.image('player_laser_blue', player_laser_blue);
		this.load.image('enemy_black_one', enemy_black_one);
	}

	create(){
		this.add.text(20, 20, 'Loading game...', { font: '2em Arial' });
		this.scene.start('mochicStudio');
	}
}
