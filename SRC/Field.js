function Field(data,x,y){
	
	this.image = new Image();
	this.image.src = data.image;
	this.x = x;
	this.y = y;
	this.sizeX = data.x;
	this.sizeY = data.y;
	this.xDiff = data.xDiff;
	this.yDiff = data.yDiff;
	this.duration = data.duration;
	this.effect = data.effect;
	this.affected = new Array();

	this.inRange = function(enemy){
		if(isCollide(this.x+this.xDiff, this.y+this.yDiff, this.sizeX, this.sizeY, enemy.x, enemy.y, 90, 90)){
			return true;
		}
		else{
			if(this.isAffected(enemy))
				this.affected.splice(this.affected.indexOf(enemy), 1);
			return false;
		}
	}
	
	this.isAffected = function(enemy){
		if(this.affected.indexOf(enemy) == -1)
			return false;
		else
			return true;
	}

}