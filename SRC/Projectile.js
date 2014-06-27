function Projectile(projectiletype,x,y){

	this.name = projectiletype.name;
	this.listSprites = new Array();
	this.attack = projectiletype.attack;
	this.listSprites.push(new Sprite(projectiletype.listImage));
	this.listSprites.push(new Sprite(effectList[this.name]));
	this.x = x;
	this.y = y;
	this.listX = projectiletype.listX;
	this.listY = projectiletype.listY;
	this.listXDiff = projectiletype.listXDiff;
	this.listYDiff = projectiletype.listYDiff;
	this.speed = projectiletype.speed;
	this.current = 0;
	
	this.move = function(){
		this.x-=this.speed;
	}
	
	this.switchAction = function(action){
		this.current = action;
	}
	
	this.getCurrentFrame = function(){
		return this.listSprites[this.current].getCurrentFrame();
	}
	
	this.getCurrentX = function(){
		return this.listX[this.listSprites[this.current].current];
	}
	
	this.getCurrentY = function(){
		return this.listY[this.listSprites[this.current].current];
	}
	
	this.getCurrentXDiff = function(){
		return this.listXDiff[this.listSprites[this.current].current];
	}
	
	this.getCurrentYDiff = function(){
		return this.listYDiff[this.listSprites[this.current].current];
	}
	
}