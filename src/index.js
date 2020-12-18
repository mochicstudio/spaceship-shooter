import Phaser from 'phaser';
import './styles/main.css';
import { BootGame } from './scenes/BootGame.js';
import { TitleScreen } from './scenes/TitleScreen.js';
import { PlayGame } from './scenes/PlayGame.js';

var config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	background: 0x000000,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
			debug: true
		}
	},
	scene: [BootGame, TitleScreen, PlayGame]
};

var game = new Phaser.Game(config);
