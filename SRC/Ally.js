function Ally(data, x, y){
	
	this.name = data.name;
	this.type = data.type;
	this.x = x;
	this.y = y;
	this.range = data.range;
	this.attack = data.attack;
	this.health = data.health;
	this.current = 0;
	this.listSprites = new Array();
	this.listSprites.push(new Sprite(data.listStand));
	this.listStandX = data.listStandX;
	this.listStandY = data.listStandY;
	this.listStandXDiff = data.listStandXDiff;
	this.listStandYDiff = data.listStandYDiff;
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
	
	function random(start,end){
	return Math.floor((Math.random() * end)+start);
	}
	
	if(this.type == 1){
		temp = random (1,3);
		this.hitEffectSprite = new Sprite(effectList[temp]);
		this.frameHit = data.frameHit;
	}else if (this.type == 2){
		this.projectiletype = new ProjectileType(projectileList[data.projectile]);
		this.release = data.release;
	}
	
	this.switchAction = function(action){
		if(this.current == 1 && action != 1){
			this.listSprites[this.current].current = action;
		}

		this.current = action;
	}
	
}