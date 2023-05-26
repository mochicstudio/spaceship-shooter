import Phaser from 'phaser';
import { mochicStudioLogo } from './MochicStudioLogo';

class Boot extends Phaser.Scene {
	constructor() {
		super('Boot');
	}

	preload() {
	  this.load.image('logo', 'assets/images/logo/mochicstudio.png');
		this.load.image('background', 'assets/images/backgrounds/blue.png');
		this.load.image('background_title', 'assets/images/backgrounds/purple.png');
		this.load.image('player_blue_one', 'assets/images/png/playerShip1_blue.png');
		this.load.image('player_green_one', 'assets/images/png/playerShip1_green.png');
		this.load.image('player_red_one', 'assets/images/png/playerShip1_red.png');
		this.load.image('player_blue_two', 'assets/images/png/playerShip2_blue.png');
		this.load.image('player_green_two', 'assets/images/png/playerShip2_green.png');
		this.load.image('player_red_two', 'assets/images/png/playerShip2_red.png');
		this.load.image('player_blue_three', 'assets/images/png/playerShip3_blue.png');
		this.load.image('player_green_three', 'assets/images/png/playerShip3_green.png');
		this.load.image('player_red_three', 'assets/images/png/playerShip3_red.png');
		this.load.image('laser_blue_player', 'assets/images/png/Lasers/laserBlue16.png');
		this.load.image('laser_green_player', 'assets/images/png/Lasers/laserGreen10.png');
		this.load.image('laser_red_player', 'assets/images/png/Lasers/laserRed16.png');
		this.load.image('enemy_blue_one', 'assets/images/png/Enemies/enemyBlue1.png');
		this.load.image('enemy_blue_two', 'assets/images/png/Enemies/enemyBlue2.png');
		this.load.image('enemy_blue_three', 'assets/images/png/Enemies/enemyBlue3.png');
		this.load.image('enemy_blue_four', 'assets/images/png/Enemies/enemyBlue4.png');
		this.load.image('enemy_blue_five', 'assets/images/png/Enemies/enemyBlue5.png');
		this.load.image('enemy_green_one', 'assets/images/png/Enemies/enemyGreen1.png');
		this.load.image('enemy_green_two', 'assets/images/png/Enemies/enemyGreen2.png');
		this.load.image('enemy_green_three', 'assets/images/png/Enemies/enemyGreen3.png');
		this.load.image('enemy_green_four', 'assets/images/png/Enemies/enemyGreen4.png');
		this.load.image('enemy_green_five', 'assets/images/png/Enemies/enemyGreen5.png');
		this.load.image('enemy_red_one', 'assets/images/png/Enemies/enemyRed1.png');
		this.load.image('enemy_red_two', 'assets/images/png/Enemies/enemyRed2.png');
		this.load.image('enemy_red_three', 'assets/images/png/Enemies/enemyRed3.png');
		this.load.image('enemy_red_four', 'assets/images/png/Enemies/enemyRed4.png');
		this.load.image('enemy_red_five', 'assets/images/png/Enemies/enemyRed5.png');
		this.load.image('explosion_blue', 'assets/images/png/Lasers/laserBlue08.png');
		this.load.image('explosion_green', 'assets/images/png/Lasers/laserGreen14.png');
		this.load.image('explosion_red', 'assets/images/png/Lasers/laserRed08.png');
    this.scene.add('MochicStudioLogo', mochicStudioLogo);
	}

	create() {
		this.add.text(20, 20, 'Loading game...', { font: '2em Arial' });
		this.scene.start(mochicStudioLogo);
	}
}

const boot = new Boot();
export { boot };
