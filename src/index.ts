import Phaser from 'phaser';
import config from './config';
import { boot } from './scenes/Boot';

new Phaser.Game(Object.assign(config, { scene: [boot] }));
