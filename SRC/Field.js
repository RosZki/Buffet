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

	this.activateEffect = function(enemy){
		switch(this.effect){
			case "slow":if(isCollide(this.x+this.xDiff, this.y+this.yDiff, this.sizeX, this.sizeY, enemy.x, enemy.y, 90, 90))
							enemy.speed = enemy.origdata.speed * 0.5;
						else
							enemy.speed = enemy.origdata.speed;
						break;
		}
	}

}