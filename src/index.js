import Phaser from 'phaser'

let gameScene = new Phaser.Scene('Game')

gameScene.preload = function(){
	this.load.image('background', '../src/assets/bg_castle.png')
}

gameScene.create = function(){
	let background = this.add.sprite(0, 0, 'background')
	// background.setOrigin(0, 0)
	background.setPosition(50, 50)
}

let config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	scene: gameScene
}

let game = new Phaser.Game(config)
