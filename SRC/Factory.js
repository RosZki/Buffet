Factory = function(data, x, y){
	
	this.name = data.name;
	this.x = x;
	this.y = y;
	this.health = data.health;
	this.listSprites = new Array();
	this.listSprites.push(new Sprite(data.listStand));
	this.listStandX = data.listStandX;
	this.listStandY = data.listStandY;
	this.listStandXDiff = data.listStandXDiff;
	this.listStandYDiff = data.listStandYDiff;
	this.listSprites.push(new Sprite(data.listDefeat));
	this.listDefeatX = data.listDefeatX;
	this.listDefeatY = data.listDefeatY;
	this.listDefeatXDiff = data.listDefeatXDiff;
	this.listDefeatYDiff = data.listDefeatYDiff;
	this.current = 0;
	this.cooldown = data.cooldown;
	this.cooldownTimer = 0;
	
	this.switchAction = function(action){
		this.current = action;
	}
	
	this.checkCooldown = function(){
		if(this.cooldownTimer == this.cooldown){
			this.cooldownTimer = 0;
			return true;
		}else{
			this.cooldownTimer++;
			return false;
		}
	}
	
}