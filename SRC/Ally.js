function Ally(data, x, y){
	
	this.origdata = data;
	this.name = data.name;
	this.type = data.type;
	this.x = x;
	this.y = y;
	this.health = data.health;
	this.current = 0;
	this.listSprites = new Array();
	this.listSprites.push(new Sprite(data.listStand));
	this.listStandX = data.listStandX;
	this.listStandY = data.listStandY;
	this.listStandXDiff = data.listStandXDiff;
	this.listStandYDiff = data.listStandYDiff;
	this.screens = new Array();
	
	for(z=0;z<3;z++){
		this.screens.push(new Image());
		this.screens[z].src = data.targetScreens[z];
	}
	
	this.getCurrentScreen = function(){
		if(this.health/this.origdata.health > 0.50){
			return 0;
		}else if(this.health/this.origdata.health > 0.20){
			return 1;
		}else{
			return 2;
		}
	}
	
	function random(start,end){
	return Math.floor((Math.random() * end)+start);
	}
	
	if(this.type == 1){
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
		this.range = data.range;
		this.attack = data.attack;
		if(data.hitEffect == null){
			temp = random (1,3);
			this.hitEffectSprite = new Sprite(effectList[temp]);
		}
		else
			this.hitEffectSprite = new Sprite(effectList[data.hitEffect]);
		this.frameHit = data.frameHit;
	}else if (this.type == 2){
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
		this.projectiletype = new ProjectileType(projectileList[data.projectile]);
		this.release = data.release;
	}else if(this.type == 3){
		this.listSprites.push(null);
		this.listSprites.push(new Sprite(data.listDefeat));
		this.listDefeatX = data.listDefeatX;
		this.listDefeatY = data.listDefeatY;
		this.listDefeatXDiff = data.listDefeatXDiff;
		this.listDefeatYDiff = data.listDefeatYDiff;
		this.field = data.field;
	}
	
	this.switchAction = function(action){
		if(this.current == 1 && action != 1){
			this.listSprites[this.current].current = action;
		}

		this.current = action;
	}
	
	this.getCurrentFrame = function(){
		return this.listSprites[this.current].getCurrentFrame();
	}
	
	this.getCurrentX = function(){
		switch(this.current){
			case 0: return this.listStandX[this.listSprites[this.current].current];
			case 1: return this.listAttackX[this.listSprites[this.current].current];
			case 2: return this.listDefeatX[this.listSprites[this.current].current];
		}
	}
	
	this.getCurrentY = function(){
		switch(this.current){
			case 0: return this.listStandY[this.listSprites[this.current].current];
			case 1: return this.listAttackY[this.listSprites[this.current].current];
			case 2: return this.listDefeatY[this.listSprites[this.current].current];
		}
	}
	
	this.getCurrentXDiff = function(){
		switch(this.current){
			case 0: return this.listStandXDiff[this.listSprites[this.current].current];
			case 1: return this.listAttackXDiff[this.listSprites[this.current].current];
			case 2: return this.listDefeatXDiff[this.listSprites[this.current].current];
		}
	}
	
	this.getCurrentYDiff = function(){
		switch(this.current){
			case 0: return this.listStandYDiff[this.listSprites[this.current].current];
			case 1: return this.listAttackYDiff[this.listSprites[this.current].current];
			case 2: return this.listDefeatYDiff[this.listSprites[this.current].current];
		}
	}
	
}