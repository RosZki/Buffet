function Enemy(data, lane, effect){

	this.name = data.name;
	this.x = -90;
	this.y = (lane-1)*90;
	this.gold = data.gold;
	this.range = data.range;
	this.speed = data.speed;
	this.attack = data.attack;
	this.health = data.health;
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
	this.hitEffectSprite = new Sprite(effect);
	this.frameHit = data.frameHit;
	this.current = 0;
	
	this.move = function(){
		this.x += this.speed;
	}
	
	this.switchAction = function(action){
		if(this.current == 1 && action != 1){
			this.listSprites[this.current].current = action;
		}
		this.current = action;
	}
	
}