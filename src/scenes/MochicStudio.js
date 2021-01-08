export class MochicStudio extends Phaser.Scene {
	constructor(){
		super('mochicStudio');
	}

	create(){
		this.logo = this.add.image(0, 0, 'logo').setDisplayOrigin(0, 0);
	}
}
