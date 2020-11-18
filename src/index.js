import Phaser from 'phaser';
import { TitleScreen } from './scenes/TitleScreen.js';
import { PlayGame } from './scenes/PlayGame.js';

var config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	background: 0x000000,
	scene: [TitleScreen, PlayGame]
};

var game = new Phaser.Game(config);
