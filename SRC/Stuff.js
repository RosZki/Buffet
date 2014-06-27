function Stuff(data, x, y){

	this.x = x;
	this.y = y;
	this.sprite = new Sprite(data.listImage);
	this.listX = data.listX;
	this.listY = data.listY;
	this.listXDiff = data.listXDiff;
	this.listYDiff = data.listYDiff;
	
	this.getCurrentFrame = function(){
		return this.sprite.getCurrentFrame();
	}
	
	this.getCurrentX = function(){
		return this.listX[this.sprite.current];
	}
	
	this.getCurrentY = function(){
		return this.listY[this.sprite.current];
	}
	
	this.getCurrentXDiff = function(){
		return this.listXDiff[this.sprite.current];
	}
	
	this.getCurrentYDiff = function(){
		return this.listYDiff[this.sprite.current];
	}

}