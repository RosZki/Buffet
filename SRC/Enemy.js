function Enemy(data, lane){

	this.name = data.name;
	this.x = -90;
	this.y = (lane-1)*90;
	this.gold = data.gold;
	this.range = data.range;
	this.speed = data.speed;
	this.attack = data.attack;
	this.health = data.health;
	this.aspeed = data.aspeed;
	this.currentAction = 0;
	this.listSprites = new Array();
	this.listSprites.push(new Sprite(data.listMove));
	this.listMoveX = data.listMoveX;
	this.listMoveY = data.listMoveY;
	this.listMoveXDiff = data.listMoveXDiff;
	this.listMoveYDiff = data.listMoveYDiff;
	this.listSprites.push(new Sprite(data.listAttack));
	this.listAttackX = data.listAttackX;
	this.listAttackY = data.listAttackY;
	this.listAttackXDiff = data.listAttackXDiff;
	this.listAttackYDiff = data.listAttackYDiff;
	this.listSprites.push(new Sprite(data.listDefeat));
	this.listDefeatX = data.listDefeatX;
	this.listDefeatY = data.listDefeatY;
	this.listDefeatXDiff = data.listDefeatXDiff;
	this.listDefeatYDiff = data.listDefeatYDiff;
	this.currentSprite = 0;
	
	this.move = function(){
		this.x += this.speed;
	}
	
	this.switchAction = function(action){
		this.currentAction = action;
		this.currentSprite = action;
	}
	
}