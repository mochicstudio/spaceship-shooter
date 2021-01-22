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
import player_laser_blue from '../assets/images/png/Lasers/laserBlue16.png';
import player_laser_green from '../assets/images/png/Lasers/laserGreen10.png';
import player_laser_red from '../assets/images/png/Lasers/laserRed16.png';
import enemy_blue_one from '../assets/images/png/Enemies/enemyBlue1.png';
import enemy_blue_two from '../assets/images/png/Enemies/enemyBlue2.png';
import enemy_blue_three from '../assets/images/png/Enemies/enemyBlue3.png';
import enemy_blue_four from '../assets/images/png/Enemies/enemyBlue4.png';
import enemy_blue_five from '../assets/images/png/Enemies/enemyBlue5.png';
import enemy_green_one from '../assets/images/png/Enemies/enemyGreen1.png';
import enemy_green_two from '../assets/images/png/Enemies/enemyGreen2.png';
import enemy_green_three from '../assets/images/png/Enemies/enemyGreen3.png';
import enemy_green_four from '../assets/images/png/Enemies/enemyGreen4.png';
import enemy_green_five from '../assets/images/png/Enemies/enemyGreen5.png';
import enemy_red_one from '../assets/images/png/Enemies/enemyRed1.png';
import enemy_red_two from '../assets/images/png/Enemies/enemyRed2.png';
import enemy_red_three from '../assets/images/png/Enemies/enemyRed3.png';
import enemy_red_four from '../assets/images/png/Enemies/enemyRed4.png';
import enemy_red_five from '../assets/images/png/Enemies/enemyRed5.png';
// Explosions
import explosion_blue_one from '../assets/images/png/Lasers/laserBlue08.png';
import explosion_blue_two from '../assets/images/png/Lasers/laserBlue09.png';
import explosion_green_one from '../assets/images/png/Lasers/laserGreen14.png';
import explosion_green_two from '../assets/images/png/Lasers/laserGreen15.png';
import explosion_red_one from '../assets/images/png/Lasers/laserRed08.png';
import explosion_red_two from '../assets/images/png/Lasers/laserRed09.png';

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
		this.load.image('player_laser_green', player_laser_green);
		this.load.image('player_laser_red', player_laser_red);
		this.load.image('enemy_blue_one', enemy_blue_one);
		this.load.image('enemy_blue_two', enemy_blue_two);
		this.load.image('enemy_blue_three', enemy_blue_three);
		this.load.image('enemy_blue_four', enemy_blue_four);
		this.load.image('enemy_blue_five', enemy_blue_five);
		this.load.image('enemy_green_one', enemy_green_one);
		this.load.image('enemy_green_two', enemy_green_two);
		this.load.image('enemy_green_three', enemy_green_three);
		this.load.image('enemy_green_four', enemy_green_four);
		this.load.image('enemy_green_five', enemy_green_five);
		this.load.image('enemy_red_one', enemy_red_one);
		this.load.image('enemy_red_two', enemy_red_two);
		this.load.image('enemy_red_three', enemy_red_three);
		this.load.image('enemy_red_four', enemy_red_four);
		this.load.image('enemy_red_five', enemy_red_five);
		this.load.image('explosion_blue_one', explosion_blue_one);
		this.load.image('explosion_blue_two', explosion_blue_two);
		this.load.image('explosion_green_one', explosion_green_one);
		this.load.image('explosion_green_two', explosion_green_two);
		this.load.image('explosion_red_one', explosion_red_one);
		this.load.image('explosion_red_two', explosion_red_two);
	}

	create(){
		this.add.text(20, 20, 'Loading game...', { font: '2em Arial' });
		this.scene.start('mochicStudio');
	}
}
